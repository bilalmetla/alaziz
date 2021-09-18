const USERS = 'users'



exports.getForLogin = async function ({ userName, password }, db) {
    let where = { $and: [{ "userName": userName }, { "password": password }] }
    return await db.find(USERS, where)
}