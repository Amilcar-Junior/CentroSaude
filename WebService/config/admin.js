module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a6b20c74d24f2f8cf178db087f81ce3c'),
  },
});
