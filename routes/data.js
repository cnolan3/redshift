const express = require('express');
const router = express.Router();

const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

/**
 * @api {get} /data/articles?id get an article from the database
 * @apiName articles
 * @apiGroup articles
 *
 * @apiDescription gets an article from the database
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
 * @api {get} /data/latestart:num get the latest num articles
 * @apiName latestArticles
 * @apiGroup articles
 *
 * @apiDescription get the latest articles from the database
 *
 * @apiParam {Number} num number of articles to get
 *
 * @apiSuccess {Number} id       article id number
 * @apiSuccess {String} category article category
 * @apiSuccess {String} title    article title
 * @apiSuccess {String} author   article author
 * @apiSuccess {String} body     article body
 *
 * @apiError (404) NoArticles articles do not exist
 * @apiError (500) Error      server error
**/
router.get('/latestart', (req, res, next) => {
    let num = req.query.num;
    models.articles.findAll({
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
 * @apiGroup stats
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
