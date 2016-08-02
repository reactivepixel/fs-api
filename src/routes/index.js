module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Routes
  router.use('/api/v1', require('./api/v1/user')(express));

  return router;
};
