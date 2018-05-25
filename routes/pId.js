const express = require('express');
const passport = require('passport');
const router = express.Router();
const multer = require('multer');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const planetId = require(__dirname + '/../planetId');

var storage = multer.diskStorage({
  destination: function(req, res, cb) {
    cb(null, '../uploads');
  },
  filename: function(req, res, cb) {
    var datetimestamp = Date.now();
    cb(null, 'aaa');
  }
});

const upload = multer({
  storage: storage
}).single('file');

/**
 * @api {post} /pId
**/
router.post('', (req, res, next) => {
  let msg = req.body.msg;

  planetId.send(msg);

  res.send("success");
});

router.post('/upload', /*passport.authenticate('jwt', { session: false }),*/ (req, res, next) => {
  upload(req, res, function(err) {
    
    console.log(req.file);

    if(err)
      throw err;
  });
  res.send('response');
});

module.exports = router;
