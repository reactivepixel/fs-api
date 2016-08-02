module.exports = (express) => {
  const router = express.Router();

  const users = [
    {
      id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      name: "Chapman"
    },
    {
      id: "bc25e5a4-73db-4969-9f6c-acf8246b7fbb",
      name: "Cavagna"
    },
  ];

  // View All Users
  router.get('/users', (req, res) => {
    res.status(200).json(users)
  });

  // View All Users
  router.get('/users/:id', (req, res) => {
    for(var index in users) {
      var user = users[index];
      if(user.id === req.params.id) {
        return res.status(200).json(user);
      }
    }

    // No match Found
    return res.status(404).json({
      error: "User ID Not Matched",
      reqID: req.params.id
    });
  });

  return router;
}
