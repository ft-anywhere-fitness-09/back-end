const db = require('../data/db-config');

async function findAll() {
    // return "findAll"
    // return db('users')
    /*
    SELECT user_id, username, password, role_type
        FROM public.users as u
        join user_role as r
        on u.role_id = r.role_id
        order by user_id 
    */
   const result = await db('users as u')
                    .join('user_role as r', 'u.role_id', 'r.role_id')
                    .select('user_id', 'username', 'password', 'role_type')
                    .orderBy('u.user_id')
    return result
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
async function add({ username, password, role_type }) {
    /*
        INSERT INTO users (username, password, role_id) VALUES ('JIM', 1234, 1) 
    */

    // way 1
    // const [{ username, password, role_type }] = await db('users').insert(user)
    // const [{user_id}] = await db('users').insert(
    //     {
    //         username: user.username,
    //         password: user.password,
    //         role_id: user.role_id,
    //     },
    //     ['user_id']
    //     );
   
    // console.log(user_id)
    // return findById(user_id)

    await db.transaction(async (trx) => {
        let role_id_to_use
        const [role] = await trx('user_role').where('role_type', role_type);
        // const [role_id] = await trx('user_role').insert({"role_type": role_type})
        if (role) {
            role_id_to_use = role.role_id;
          } else {
            const [role_id] = await trx('user_role').insert({ role_type: role_type });
            role_id_to_use = role_id;
          }
        const [user_id] = await trx('users').insert(
            {
                "username": username,
                "password": password,
                "role_id": role.role_id,
            },
            ['user_id']
            );
            created_user_id = user_id.user_id;
    })
    console.log(created_user_id)
    return findById(created_user_id)

}


module.exports = {
    findAll,
    findBy,
    findById,
    add,
  };