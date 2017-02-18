const db = require('../db/db');

function getAllFood(req, res, next) {
  db.any('SELECT * from mmmfood ORDER by likes DESC;')
    .then((food) => {
      res.food = food;
      next();
    })
    .catch(error => next(error));
}

function addFood(req, res, next) {
  db.none(`INSERT INTO mmmfood (name, url) VALUES ($1, $2)`, [req.body.name, req.body.url])
    .then(next())
    .catch(err => next(err));
}

function deleteFood(req, res, next) {
  db.none(`DELETE FROM mmmfood WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
}

function likeFood(req, res, next) {
  db.none(`UPDATE mmmfood
           SET likes = likes + 1
           WHERE id = $1`,
           [req.params.id])
    .then(next())
    .catch(err => console.log(err));
}

module.exports = {
  getAllFood,
  addFood,
  deleteFood,
  likeFood
};
