const db = require('../data/db-config')


async function findAll(class_id){
return db('classes')
}
async function findById(id){
    const result =  await db('classes').where('class_id', id).first()
    return result
}
async function findAttending(class_id){

}
async function add(classes){
/**
 INSERT INTO classes (class_name, class_duration, max_class_size, class_date, start_time, class_location, class_instructor, intensity_id, type_id) 
VALUES ('JIM', '1.5 hours', 10, '2021-11-19', '9:00:00', 'Gym Z', 1, 3, 3)  
 */
    const result = db('classes').insert(classes)
    return result

}
async function findTeaching(class_id){

}
async function signup(class_id){

}
async function update(class_id, change){
    /**
     * UPDATE  classes set class_name='jimmm'
     * where class_id = 6 
     */
    return db('classes').where('class_id', class_id)
            .update(change)
            .then(()=>{
                return findById(class_id)
            })

}
async function remove(class_id){
    /**
        Delete FROM classes
        where class_id = 7
     */
    const result = await db('classes')
                    .where('class_id', class_id)
                    .del()
    return result
}
module.exports = {
    findAll,
    findById,
    findAttending,
    add,
    findTeaching,
    signup,
    update,
    remove
  };