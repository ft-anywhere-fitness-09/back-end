const db = require('../data/db-config');

async function findAll() {
    // return "findAll"
    return db('users')
}

async function findBy(filter) {
    const row = await db('users').where(filter).first()
    return row
}

async function findById(user_id) {
    const result = await db('users').where('user_id', user_id).first()
    console.log(result)
    return result
}

// async function findById(id) {
//     //"ur" is used on line 24 before it's defined on line 25. Haven't ran into an issue yet, noting just in case.
//     const user = await db('users as u')
//       .select('u.user_id', 'u.username', 'ur.role_type')
//       .leftJoin('user_role as ur', 'u.role_id', 'ur.role_id')
//       .orderBy('u.user_id')
//       .where('u.user_id', id);
  
//     return user[0];
//   }
async function add(user) {
    /*
        INSERT INTO users (username, password, role_id) VALUES ('JIM', 1234, 1) 
    */
    // const [{ username, password, role_type }] = await db('users').insert(user)
    const [{user_id}] = await db('users').insert(
        {
            username: user.username,
            password: user.password,
            role_id: user.role_id,
        },
        ['user_id']
        );
   
    console.log(user_id)
    return findById(user_id)
}


module.exports = {
    findAll,
    findBy,
    findById,
    add,
  };