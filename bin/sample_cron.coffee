cronJob = require('cron').CronJob
moment = require('moment')

# 毎秒実行
# var cronTime = "* * * * * *";
# 一度だけ実行したい場合、Dateオブジェクトで指定も可能
# cronTime = new Date;
cronTime = moment().add(3, 'second').toDate()

new cronJob({
  # 実行したい日時 or crontab書式
  cronTime: cronTime
  # 指定時に実行したい関数
  onTick: ->
    console.log('onTick!')
  # ジョブの完了または停止時に実行する関数
  onComplete: ->
    console.log('onComplete!')
  # コンストラクタを終する前にジョブを開始するかどうか
  start: true
  # タイムゾーン
  timeZone: "Asia/Tokyo"
}).start()

console.log('emit')
