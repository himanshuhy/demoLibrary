const mongoose = require('mongoose')


const mongoURI = 'mongodb://127.0.0.1/my_database'

mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let Schema = mongoose.Schema

let person = new Schema({
    name: String,
    birthday: Date,
    updated: {type: Date, default: new Date()},
    age: {type: Number, required:true, min:18, max: 65},
    contact: [],
    nested: {stuff: {wow: String}},
    foreignKey: Schema.Types.ObjectId
})
//Model becomes a collection in mongoDB
let PersonModel = mongoose.model('PersonModel', person)

let person1 = new PersonModel({name:'Himanshu', age: 24});

console.log("Himanshu");
// console.log(person1.save())

// console.log(person1.birthday);
