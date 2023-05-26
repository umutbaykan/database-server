const Database = require('../models/data')

const GetController = {
  Index: (req, res) => {
    const response = Database[req.query.key];
    if (response) {
      res.send(response);
    } else {
      res.status(404).send('Invalid request')
    }
  }
}

module.exports = GetController;