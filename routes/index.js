var express = require('express');
var router = express.Router();
var CronJob = require('cron').CronJob;
var moment = require('moment');

var client = require('cheerio-httpcli');

/* GET home page. */
router.get('/', function(req, res, next) {

  /**
   * cron sample
   */

  var cronTime = moment().add(3, 'second').toDate();
  var job = new CronJob({
    cronTime: cronTime,
    onTick: function() {
      console.log('onTick');
    },
    onComplete: function() {
      console.log('onComplete');
    },
   start: true,
    timeZone: "Asia/Tokyo"
  });
  job.start();


  /**
   * scraping sample
   */
  client.fetch('http://www.agqr.jp/timetable/digital-mf.php', {}, function(err, $, req){
    console.log(res.headers);

    console.log($('title').text());

    $('a').each(function (idx) {
      console.log($(this).attr('href'));
    });
  });

  res.render('index.ejs', { title: 'Express' });
});

module.exports = router;
