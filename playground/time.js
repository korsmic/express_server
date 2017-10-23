// Jan 1st 1970 00:00:00 am
const moment = require("moment");

var date = moment();
// console.log(date.format("MMM Do, YYYY"));

// // 10:35 am
// var someTimeststamp = moment().valueOf();
// console.log(someTimeststamp);

// var createdAt = 1234;
// var date = moment().format("h:m a");
// console.log(date);

console.log(date.format("YYYY年MM月DD日 H時m分"))