const mysql = require("wafer-node-sdk").mysql;
// 登录授权接口
module.exports = async (ctx, next) => {
    mysql.schema.createTable('vic', function (table) {
        table.increments();
        table.string('name');
    }).then(function(){
        return mysql.insert({ name: 'Tim' }).into('vic')
    });
    // var date = new Date();
    // var time = date.getTime();
    // mysql('vic').insert({name:`xiaoMing${time}`});
}