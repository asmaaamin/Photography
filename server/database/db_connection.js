require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let dburl = '';

// switch (NODE_ENV) {
//   case 'production':
//     dburl = DATABASE_URL;
//     break;
//   case 'development':
//     dburl = DEV_DB_URL;
//     break;
//   case 'test':
//     dburl = TEST_DB_URL;
//     break;
//   default:
//     throw new Error('No Database is founded !');
// }

const options = {
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
