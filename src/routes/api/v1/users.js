const user = require('../../../models/user');

module.exports = (express) => {
  const router = express.Router();


  // View All Users
  router.get('/users', (req, res) => {
    user.all(
      // Incase of Error
      (err) => res.status(404).json(err),

      // Incase of Success
      (data) => res.status(200).json(data)
    );
  });

  // View One User
  router.get('/users/:id', (req, res) => {
    const payload = { id: req.params.id };
    user.one(payload,
      // Incase of Error
      (err) => res.status(404).json(err),

      // Incase of Success
      (data) => res.status(200).json(data)
    );
  });

  // Add One User
  router.post('/users/', (req, res) => {
    const payload = req.body;
    user.add(payload,
      // Incase of Error
      (err) => res.status(404).json(err),

      // Incase of Success
      (data) => res.status(200).json(data)
    );
  });

  // Edit One User
  router.post('/users/', (req, res) => {
    const payload = req.body;
    user.update(payload,
      // Incase of Error
      (err) => res.status(404).json(err),

      // Incase of Success
      (data) => res.status(200).json(data)
    );
  });

  // remove One User
  router.get('/users/:id', (req, res) => {
    const payload = { id: req.params.id };
    user.remove(payload,
      // Incase of Error
      (err) => res.status(404).json(err),

      // Incase of Success
      (data) => res.status(200).json(data)
    );
  });

  return router;
};
