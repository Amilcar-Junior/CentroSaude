module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e7d22d2b12353f323c2fe55fcd70d602'),
  },
});
