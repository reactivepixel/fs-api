module.exports = (express) => {
  const router = express.Router();

  const apps = [
    {
      id: "0032c47b-4a7b-4232-9cc3-6af718244ea8",
      title: "GroupVoter", 
      description: "A fast paced side scrolling shooter",
      artAssets: [
        { title: "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
        { title: "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
      ],
      releaseDate: "2016-06-15T22:29:20.000Z",
      createdAt: "2016-05-15T22:29:20.000Z",
      updatedAt: "2016-05-15T22:29:20.000Z",
    },
    {
      id: "38192-4a7b-4232-9cc3-6af718244cji",
      title: "Avalon Helper",
      description: "A fast paced side scrolling shooter",
      artAssets: [
        { title: "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
        { title: "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
      ],
      releaseDate: "2016-06-15T22:29:20.000Z",
      createdAt: "2016-05-15T22:29:20.000Z",
      updatedAt: "2016-05-15T22:29:20.000Z",
    },
  ]

  // View All apps
  router.get('/apps', (req, res) => {
    res.status(200).json(apps)
  });

  // View All apps
  router.get('/apps/:id', (req, res) => {
    for(var index in apps) {
      var app = apps[index];
      if(app.id === req.params.id) {
        return res.status(200).json(app);
      }
    }

    // No match Found
    return res.status(404).json({
      error: "app ID Not Matched",
      reqID: req.params.id
    });
  });

  return router;
}
