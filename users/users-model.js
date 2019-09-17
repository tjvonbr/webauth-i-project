const db = require('../data/dataConfig.js');

module.exports = {
  find,
  findBy,
  findById,
  add,
};

function find() {
  return db('users')
    .select(
        'id',
        'firstName',
        'username'
    )
};

function findBy(filter) {
  return db('users')
    .where(filter);
};

function findById(id) {
  return db('users')
    .where({ id })
    .first()
};

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
};