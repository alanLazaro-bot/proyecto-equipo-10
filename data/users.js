/*const path =require('path')
const file = require('../database/models');
let users = require(file.Usuarios)
let fs = require('fs')

function latest(){
    return users.reverse()[0]
}


function create(user){
    user.id = users.length + 1
    users.push(user)
    fs.writeFileSync(file, JSON.stringify(users))

}


function findById(id){

   return  users.find(function(user){
        return user.id == id
    })
}

function findByEmail(email){

     return users.find(function(user){
        return user.email == email
    })
}

module.exports = {
    findById,
    findByEmail,
    create,
    latest
}*/