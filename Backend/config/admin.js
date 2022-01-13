module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eca2dcd6d8b5f76e7b3dbd9f0df2ad4b'),
  },
});
