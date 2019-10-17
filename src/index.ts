require('dotenv').config();
const massive = require('massive');

const connect = () => massive({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  poolSize: 1,
  idleTimeoutMillis: 5000,
});

connect().then(db => db.things.count()).then(console.log);
