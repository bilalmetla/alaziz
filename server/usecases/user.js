

exports.getForLogin = function ({ userName, password }, db) {
    return new Promise((resolve, reject) => {
        return db.users.find({ $and: [{ "userName": userName }, {"password": password}] }, (err, docs) => err ? reject(err): resolve(docs))
     })
}