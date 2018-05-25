const express = require('express');
const router = express.Router();

const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

/**
 * @api {get} /data/articles?id get an article by id
 * @apiName articles
 * @apiGroup data
 *
 * @apiDescription gets an article by id from the database
 *
 * @apiParam {Number} id id number of article
 *
 * @apiSuccess {String} category article category
 * @apiSuccess {String} title    article title
 * @apiSuccess {String} author   article author
 * @apiSuccess {String} body     article body
 *
 * @apiError (404) ArticleNotFound article with id does not exist
 * @apiError (500) Error           server error
**/
router.get('/articles', (req, res, next) => {
    let artId = req.query.id; 
    models.articles.findOne({
        where: { id: artId },
        attributes: ['category', 'title', 'date', 'author', 'body', 'photo'],
    }).then((data) => {
        if(data)
            return res.status(200).json({ article: data });
        else
            return res.status(404).send('ArticleNotFound')
    }).catch((err) => {
        res.status(500).send('Error');
    });
});

/**
 * @api {get} /data/search?col&query&num&off search articles
 * @apiName articleSearch
 * @apiGroup data
 *
 * @apiDescription searches articles
 *
 * @apiParam {String} col   table column to search by
 * @apiParam {String} query row value to search for, case insensitive
 * @apiParam {Number} num   number of articles to get
 * @apiParam {Number} off   search offset
 *
 * @apiSuccess {Number}   count             number of matched articles
 * @apiSuccess {Object[]} articles          array of articles
 * @apiSuccess {Number}   articles.id       article id number
 * @apiSuccess {String}   articles.category article category
 * @apiSuccess {String}   articles.title    article title
 * @apiSuccess {String}   articles.author   article author
 * @apiSuccess {String}   articles.body     article body
 *
 * @apiError (404) NoArticles articles do not exist
 * @apiError (500) Error      server error
**/
router.get('/search', (req, res, next) => {
    let col = req.query.col;
    let q = req.query.query;
    let num = req.query.num;
    let off = req.query.off;
    models.articles.findAndCountAll({
        offset: off,
        limit: num,
        where: { [col]: { $ilike: '%' + q + '%' } },
        attributes: [ 'id', 'category', 'title', 'date', 'author', 'body', 'photo', 'createdAt']
    }).then((data) => {
        if(data)
            return res.status(200).json({ count: data.count, articles: data.rows });
        else
            return res.status(404).send('NoArticles');
    }).catch((err) => {
        throw err;
        return res.status(500).send('Error');
    });
});

/**
 * @api {get} /data/latestart?num&off get the latest articles
 * @apiName latestArticles
 * @apiGroup data
 *
 * @apiDescription get the latest 'num' articles offset by 'off' from the database
 *
 * @apiParam {Number} num number of articles to get
 * @apiParam {Number} off offset for search
 *
 * @apiSuccess {Object[]} articles          array of articles
 * @apiSuccess {Number}   articles.id       article id number
 * @apiSuccess {String}   articles.category article category
 * @apiSuccess {String}   articles.title    article title
 * @apiSuccess {String}   articles.author   article author
 * @apiSuccess {String}   articles.body     article body
 *
 * @apiError (404) NoArticles articles do not exist
 * @apiError (500) Error      server error
**/
router.get('/latestart', (req, res, next) => {
    let num = req.query.num;
    let off = req.query.off;
    models.articles.findAll({
        offset: off,
        limit: num,
        order: [ [ 'createdAt', 'DESC' ] ],
        attributes: ['id', 'category', 'title', 'date', 'author', 'body', 'photo', 'createdAt']
    }).then((data) => {
        if(data)
            return res.status(200).json({ articles: data });
        else
            return res.status(404).send('NoArticles');
    }).catch((err) => {
        return res.status(500).send('Error');
    });
});

/**
 * @api {get} /data/stats get stats from the database
 * @apiName stats
 * @apiGroup data
 *
 * @apiDescription Gets system stats.
 *
 * @apiSuccess {Number} users     number of users
 * @apiSuccess {Number} images    number of images analyzed
 * @apiSuccess {Number} confirmed number of confirmed exoplanets
 *
 * @apiError (404) NoStats stats do not exist on database
 * @apiError (500) Error database error
**/
router.get('/stats', (req, res, next) => {
    models.stats.findOne({
        where: { id: 1 },
        attributes: ['id', 'users', 'images', 'confirmed'],
    }).then((stat) => {
        if(stat)
            return res.status(200).json(stat.toJSON());
        else
            return res.status(401).send('NoStats');
    }).catch((err) => {
        res.status(500).send('Error');
    });
});

module.exports = router;
