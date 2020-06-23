const connection = require('../db/connection');

module.exports = function (app) {
  app.get('/api/notes', function (req, res) {
    connection.query('SELECT * FROM notes', (err, response) => {
      return res.json(response);
    });
  });
  app.post('/api/notes', function (req, res) {
    connection.query('INSERT INTO notes SET ?', req.body, (err, response) => {
      return res.json(response);
    });
  });
  app.delete('/api/notes/:id', function (req, res) {
    const id = req.params.id;

    connection.query('DELETE FROM notes WHERE ?', { id }, (err, response) => {
      return res.json(response);
    });
  });
};
