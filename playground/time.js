// Jan 1st 1970 00:00:00 am
const moment = require("moment");

// var date = moment();
// date.add(100, "Y").subtract(2, "month");
// console.log(date.format("MMM Do, YYYY"));

// 10:35 am
var someTimeststamp = moment().valueOf();
console.log(someTimeststamp);

var createdAt = 1234;
var date = moment(someTimeststamp).format("MMM Do YYYY h:m a");
console.log(date);

