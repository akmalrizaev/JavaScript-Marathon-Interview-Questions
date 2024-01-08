// For time, javascript gives the very same Date() object only
// There is a unique static method called Date.now() which returns a timestamp
// in milliseconds elapsed since "1 Jan 1970" UTC

console.log(Date.now());

let dt = new Date();
console.log(dt.getTime());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());

// So by giving the setTime(milliseconds) it will set the time and the value is started
// since Jan1 1970

let dt1 = new Date();
console.log(dt1);
dt1.setTime(0);
console.log(dt1);
console.log(dt1.setHours(3));
console.log(dt1.setMinutes(45));
console.log(dt1.setSeconds(5));
console.log(dt1.setMilliseconds(10));
console.log(dt1);
