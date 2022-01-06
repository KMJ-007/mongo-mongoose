require("dotenv").config();
//importing mongoose
const mongoose = require("mongoose");
//taking mongourl from env file
const mongoUrl = process.env["MONGO_URI"];
// console.log(mongoUrl)
//connecting mongodb database
mongoose.connect(mongoUrl);
const connection = mongoose.connection;

//for checking our connection is done or not
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;
//creating a schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);
// console.log("hello repl what are you doing")

const createAndSavePerson = (done) => {
  const karan = new Person({name:'Karan Janthe',age:18,favoriteFoods:['dabeli','vadapav',"icecream"]});

  karan.save(function(err,data){
    //if there is error than show the error in console else save the sata
    // console.log(data);
    if(err) return  console.error(err);
    done(null,data);
    

  });
};
const arrayOfPeople=[{name:'Krishna Agarwal',age:40,favoriteFoods:['grilledsandwich']},{name:'Het bhavsar',age:21,favoriteFoods:['pasta']}]

const createManyPeople = (arrayOfPeople, done) => {
  // console.log(done);
  Person.create(arrayOfPeople,(err,data)=>{
    if(err) return  console.error(err);
    done(null , data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({personName},(err,personFound)=>{
    if(err) return  console.error(err);
    done(null,personFound);
  });
};

const findOneByFood = (food, done) => {

    Person.findOne({favoriteFoods: food}, (err, data) =>{
      if (err) return console.log(err);
      done(null, data);
    });
  
};

const findPersonById = (personId, done) => {
  
  Person.findById(personId,(err,data)=>{
    if(err)return console.log(err);
    done(null,data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId,(err,person)=>{
    if(err)return console.log(err);
    
    person.favoriteFoods.push(foodToAdd);

    person.save((err,updatedPerson)=>{
      if(err)return console.log(err);
    done(null,updatedPerson);
    });
  });

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
