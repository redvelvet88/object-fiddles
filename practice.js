// //Once you complete a problem, open up Chrome and check the answer in the console.


// //Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

//   //Code here
var me = {
  name: "Abbey",
  age: "27"
};
alert(me.name);


// //NEXT PROBLEM




// //Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

//   //Code here
  var favoriteThings = {
    band: "Judah & the Lion",
    food: "french fries",
    person: "Mom",
    book: "Amelia Bedilia",
    movie: "A Knight's Tale",
    holiday: "Valentine's Day",

  };



// //After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

//   //Code here

favoriteThings.car = "Elantra";
favoriteThings.brand = "Hyundai";

// //Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

//   //Code here

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";



// //NEXT PROBLEM



// /*Create an empty Object called backPack. Now, create a variable called 'item'
// and set it equal to the string 'firstPocket'. Using bracket notation,
// add a 'firstPocket' key (or property) to backPack, using 'item'.
// Set the value of that key to 'chapstick'.

// Using dot notation, add another key (or property) to your backPack object
// that is named color, with the value being the color of your backpack. */

//   //Code here
var backPack = {};

var item = "firstPocket";
backPack[item] = "chapstick";
backPack.color = "red";


// //After you do the above, alert your entire backPack object.

//   //Code here
alert(backPack);
// /*You probably noticed that it just alerted [object Object].
// Alerting to see the data in your Object doesn't work so well.
// Instead, console.log your whole backPack object and then check out the console. */

//   //Code here
console.log(backPack);



// //NEXT PROBLEM




// //Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

//   //Code Here
var alsoMe = {
  name: "Abbey",
  age: "27",
  height: "5ft7.5in",
  gender: "female",
  married: false,
  eyeColor: "hazel",
  hairColor: "dirty blonde"

};
// //Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

//   //Code Here
for(value in alsoMe) {
alert(alsoMe[value]);
};


// //NEXT PROBLEM




// //Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

//   //Code Here
var album = {
  Song1: "1:00",
  Song2: "2:00",
  Song3: "3:00",
  Song4: "4:00",
  Song5: "5:00"

};
// //Now, loop through your album object alerting every song title individually.

//   //Code Here
for(var key in album) {
alert(key);
};



// //NEXT PROBLEM




// //Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

//   //Code Here
var states = {
  Utah: 500000,
  Colorado: 600000,
  Idaho: 300000,
  Arizona: 400000,
  NewMexico: 700000
};
// //Now, loop through your states object and if the states population is greater than 30K, alert that state.

//   //Code Here
for(var statePop in states) {
if (states[statePop] > 30000) {
  alert(statePop);
}
};


//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here
for(var object in user1) {
if(!user1[object]) {
  delete(user1[object])
}
};
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
user1.name = "Abbey Rollins";
user1.username = "abbeyrollins";




//NEXT PROBLEM

var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here
user2.name = "Tyler S. McGinnis";
user2.email = "tyler.micginnis@devmounta.in";
//Now call the sayName method that's on the user object which will alert the users email

  //Code Here
user2.sayName();



//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here
methodCollection = {};
/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here
methodCollection.alertHello = function () {
  alert("hello");
};
//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here
function MakePerson (name, birthday, ssn) {
  return {
    name: "name",
    birthday: "birthday",
    ssn: "ssn"
  }
};
var newObject = MakePerson();

//NEXT PROBLEM



// Create a function called MakeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here
var MakeCard = function (cardNumber, expirationDate, securityCode) {
  return {
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    securityCode: securityCode
  }
};


//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
   While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  //Code Here
var bindCard = function (person, creditcard) {
  var paymentMethod = person;
  for (var prop in creditcard) {
    paymentMethod[prop] = creditcard[prop];
  };
  return paymentMethod;
};
