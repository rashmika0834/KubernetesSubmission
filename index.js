const { randomUUID } = require('crypto');

const randomString = randomUUID();

// Output every 5 seconds
setInterval(() => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}, 5000);

console.log('Application started. Random string generated:', randomString);