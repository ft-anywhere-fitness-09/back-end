const db = require('../data/db-config');

async function findAll() {
    // return "findAll"
    return db('users')
}

async function findBy(filter) {
    const row = await db('users').where(filter)
    return row
}

async function findById(id) {
    const result = await db('users').where('user_id', id).first()
    return result
}

async function add() {
    const [id] =await db('users').insert(user)
    return findById(id)
}

module.exports = {
    findAll,
    findBy,
    findById,
    add,
  };