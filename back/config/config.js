require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.MYSQL_PRODUCTION_PASSWORD,
    "database": "slack",
    "host": "doul.c6twjfaqgp0c.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  }
}
