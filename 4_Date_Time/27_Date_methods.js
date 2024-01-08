// The Date() object has various methods for date and time related operations
const dt = new Date();
console.log(dt); // 2024-01-08T05:49:28.118Z
console.log(dt.getFullYear()); // 2024
console.log(dt.getMonth()); // 0
console.log(dt.getDate()); // 8
console.log(dt.getDay());

// date.setFullYear(Year,[month],[day])
dt.setFullYear(2025);

// date.setMonth(month,[day])
dt.setMonth(09);

// date.setDate(day)
dt.setDate(12);

// Date.parse()
// It parses a string of date and returns milliseconds
let dt2 = Date.parse('2024-07-24');
