/*An array is a datatype that lists values (collection of elements). Arrays are an efficent and scalable way to pass logically grouped data throughout an application. Arrays allow us to write applications that process collections of data of an undetermined or growing size.*/

/*Array methods allow you to do things to an existing array*/

/*Let's practice the following array methods. Don't forget to console.log your results and run your node REPL in your terminal*/

/*================================================================*/

/*Mutator Methods allow you to modify the array*/

/* The array.pop() method removes the last element from an array and returns that element*/

/*1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers. Remove this imposter immediately and assign it to a new variable named `notHof` Console.log this new variable as well as the original list.*/ 

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

var notHof = hof.pop();
console.log(hof);
console.log(notHof);



var gil = ["Mickey", "Minnie", "Pluto", "Donald", "Daisy", "Kermit"];

var notGil = gil.pop();
console.log(gil);
console.log(notGil);

/* The array.push() adds one or more element to the end of an array and returns the new length of the array*/

/*2. You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/

var shoppingList = ["cool ranch doritos", "kings hawaiian sweet bread", "peanut butter oreos", "fruit loops cereal"];

var newList = shoppingList.push("Hendricks");
console.log(shoppingList);
console.log(newList);


var carList = ["Pontiac", "Chevrolet", "Oldmobile", "Saturn", "GMC"];

var newCar = carList.push("Hummer");
console.log(carList);
console.log(newCar);

/*The array.reverse() reverses the order of the element of an array in place - the first becomes the last and the last becomes the first*/

/*3. Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

var newLast = yoda.reverse();
console.log(yoda);
console.log(newLast);


var message = [" dog", " lazy", " the", " over", " jumps", " fox", " brown", " quick", "the"];

var newMessage = message.reverse();
console.log(message);
console.log(newMessage);

/*The array.shift() removes the first element from an array and returns that element*/

/*4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = ["Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro"];

var nowServing = waitList.shift();
console.log(waitList);
console.log("nowServing:", nowServing);


var goodList = ["Bar Rafaeli", "Adriana Lima", "Alessandra Ambrosio", "Izabel Goulart", "Xenia Tchoumitchova", "Erin Heatherton"];

var willWaitOn = goodList.shift();
console.log(goodList);
console.log("willWaitOn:", willWaitOn);

/*The array.unshift() adds one or more elements to the front of an array and returns the new length of the array*/

var wuTangList = ["Frank Sinatra", "Mel Torme", "Johnny Cash", "Marilyn Monroe", "James Dean"];

var willServe = wuTangList.unshift("Old Dirty Bastard");
console.log(wuTangList);
console.log("willServe:", willServe);


var colorList = ["Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

var myColor = colorList.unshift("Red");
console.log(colorList);
console.log("myColor:", myColor);

/*5. Apparently, you didn't do a good job with crowd control in the previous exercise. Kanye just cut in front of everyone!. Add Kanye to the waitList array above. Console.log waitList*/

/*The array.splice() adds and/or removes elements from an array.
array.splice(index, how many items to be removed)*/

var newTangLine = wuTangList.unshift("Kanye");
console.log("newTangLine:", newTangLine);

/*6. As head of McDonald's New Product Division, your job is to test and approve all new menu items. In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau". Remove these items from the list and console.log the updated testMenu.*/

var testMenu = ["McPizza Burger", "McFly Burger", "McLinguine", "McChar-Siu Bau", "McChop-Chae", "McPancit"];

var noMenu = testMenu.splice(2, 2, "McChop-Chae", "McPancit");
console.log(noMenu);
console.log("noMenu:", noMenu);


var schoolList = ["Will Ferrell", "Tracy Morgan", "Dave Chappell", "Colin Ferrell", "Chad Smith", "Fred Armisen"];

var newSchool = schoolList.splice(3, 2);
console.log(schoolList);
console.log("newSchool:", newSchool);

/*=============================================================*/

/*Accessor Methods do not modify the array and returns some representation of the array.*/

/*The array.concat() returns a new array comprised of this array joined with other array(s) and/or values(s).*/

/*7. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`. Console.log this new array.*/

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

var allSide = westSide.concat(eastSide);
console.log(westSide);
console.log(eastSide);
console.log(allSide);


var soundGarden = ["Chris Cornell", "Kim Thayil", "Ben Shepard", "Matt Cameron"];
var rageAgainstTheMachine = ["Zack de la Rocha", "Tom Morello", "Tim Commerford", "Brad Wilk"];

var megaSinger = soundGarden.splice(0, 1);
var megaBand = rageAgainstTheMachine.splice(1, 3);

var audioSlave = megaBand.concat(megaSinger);
console.log(soundGarden);
console.log(rageAgainstTheMachine);
console.log("audioSlave:", audioSlave);

/*The array.join() joins all the elements of an array into a string.*/

/*8. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.*/

var shoe = ["just", " do", " it"];

var shoeString = shoe.join();
console.log(shoeString);


var neighborsMovie = ["People", " Under", " The", " Stairs"];

var familyFlick = neighborsMovie.join();
console.log(familyFlick);

/*The array.slice() extracts a section of an array and returns a new array.
array.slice(index start, index end)*/

/*9. Some drama between you and the Kardashian's went down during last Saturday's potluck party. You are no longer on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. Console.log this new variable.*/

var fbFriends = ["Khalid", "Yeezy", "Kimmy K", "Lamar Odom", "Lebron", "Warren Buffet"];

var unFriend = fbFriends.slice(1,4);
console.log(unFriend);


var newJackets = ["AlpineStars", "Dainese", "Rev It", "Icon", "Strength & Speed"];

var noJackets = newJackets.slice(2, 5);
console.log(noJackets);
