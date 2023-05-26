const Database = require('../models/data');

const SetController = {
  Index: (req, res) => {
    const userKey = Object.keys(req.query)[0];
    const value = req.query[userKey];
    Database[userKey] = value;
    res.send('ok!');
  },
};

module.exports = SetController;
