

exports.getForLogin = function ({ userName, password }, db) {
    return new Promise((resolve, reject) => {
        return db.collection('users').find({ $and: [{ "userName": userName }, { "password": password }] })
        .toArray((err, docs) => err ? reject(err): resolve(docs))
     })
}