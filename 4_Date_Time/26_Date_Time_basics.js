// The Date() object is used to deal with both date and time
// There are different ways to use it with different arguments
// There are 4 ways to create a date object:

// 1. Date()
// Returns the current date and time along with the local time zone
const dt = new Date();
console.log(dt); // 2024-01-08T03:27:39.649Z

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// This way is more preferable & better way to deal with dates
const dt1 = new Date(2024, 0, 8, 8, 23, 5);
console.log(dt1); // 2024-01-08T03:23:05.000Z

// new Date(milliseconds)
// In Javascript millisecond count starts from 1st January 1970
// new Date(milliseconds) accepts milliseconds & that is converted into a date considering
// the first millisecond on 1st January 1970
const dt2 = new Date(1);
console.log(dt2); // 1970-01-01T00:00:00.001Z

const dt3 = new Date('2024-1-8');
const dt4 = new Date('2024-1-8T8:45:00Z');
console.log(dt3); // 2024-01-07T19:00:00.000Z
