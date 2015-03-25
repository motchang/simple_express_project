var Sequelize = require('sequelize');
var Seq = new Sequelize('test', 'root');

var User = Seq.define('user', {
  firstName: Sequelize.STRING,
  familyName: Sequelize.STRING
});

Seq
  .sync({force: true})
  .complete(function(errors){
      console.log('DATABASE SYNC:', errors);
  });
