const express = require('express');
const router = express.Router();

const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

/**
 * @api {get} /stats/stats get stats from the database
 * @apiName stats
 * @apiGroup stats
 *
 * @apiDescription Gets system stats.
 *
 * @apiSuccess {Number} users     number of users
 * @apiSuccess {Number} images    number of images analyzed
 * @apiSuccess {Number} confirmed number of confirmed exoplanets
 *
 * @apiError (401) NoStats stats do not exist on database
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
