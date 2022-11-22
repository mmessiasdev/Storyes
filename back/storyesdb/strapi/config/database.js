const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});


// // path: ./my-project/config/database.js

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "storyesdb.c5ysy25j6dpi.us-east-1.rds.amazonaws.com"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "storyesdb"),
//       user: env("DATABASE_USERNAME", "username"), 
//       password: env("DATABASE_PASSWORD", "adminroot"),
//     },
//     useNullAsDefault: true,
//   },
// });