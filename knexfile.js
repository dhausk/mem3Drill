module.exports = {
  development: {
    client: 'pg',
    connection: "postgress:///mem3"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
