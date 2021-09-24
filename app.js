'use strict'
//code below

    function destination() {
        let destinations = ['zoo', 'water park', 'amusement park', 'campgrounds'];
            let result = Math.floor(Math.random() * destinations.length); 
            let randomIndex = Math.floor(Math.random() * destinations.length);
        result = destinations[randomIndex];
      console.log('Selected Destination: ' + result);
      let newOption = prompt('Are you satisfied with your destination option?');
      while(newOption !== 'yes') {
       randomIndex = Math.floor(Math.random() * destinations.length);
       result = destinations[randomIndex]
       console.log('Selected Destination: ' + result);
       newOption = prompt('Are you satisfied with your destination option?');  
      }
      return result
    }


    function restaurant() {
        let restaurants = ['italian', 'mexican', 'american', 'japanese'];
            let foodChoice = Math.floor(Math.random() * restaurants.length);
        let randomIndex = Math.floor(Math.random() * restaurants.length);
     foodChoice = restaurants[randomIndex];
      console.log('Selected Restaurant: ' + foodChoice);
      let newOption = prompt('Are you satisfied with your restaurant option?');
      while(newOption !== 'yes') {
       randomIndex = Math.floor(Math.random() * restaurants.length);
       foodChoice = restaurants[randomIndex]
       console.log('Selected Restaurant: ' + foodChoice);
       newOption = prompt('Are you satisfied with your restaurant option?');  
      }
      return foodChoice;
    }

    function transport() {
        let trans = ['car', 'train', 'bus', 'heli'];
            let transOption = Math.floor(Math.random() * trans.length);
        let randomIndex = Math.floor(Math.random() * trans.length);
         transOption = trans[randomIndex];
      console.log('Selected Transport: ' + transOption);
      let newOption = prompt('Are you satisfied with your transport option?');
      while(newOption !== 'yes') {
       randomIndex = Math.floor(Math.random() * trans.length);
       transOption = trans[randomIndex]
       console.log('Selected Transport: ' + transOption);
       newOption = prompt('Are you satisfied with your transport option?');  
      }
      return transOption;
    }

    function entertainment() {
        let activity = ['live music', 'video games', 'bowling', 'pool hall'];
            let pickedActivity = Math.floor(Math.random() * activity.length);
       let randomIndex = Math.floor(Math.random() * activity.length);
             pickedActivity = activity[randomIndex];
       console.log('Selected Entertainment: ' + pickedActivity);
       let newOption = prompt('Are you satisfied with your entertainment option?');
       while(newOption !== 'yes') {
        randomIndex = Math.floor(Math.random() * activity.length);
        pickedActivity = activity[randomIndex]
        console.log('Selected Entertainment: ' + pickedActivity);
        newOption = prompt('Are you satisfied with your entertainment option?');  
       }
       return pickedActivity;
    }


function itinerary() {
    let chosenDestination = destination();
    let chosenRestaurant = restaurant(); 
    let chosenTrans = transport();
    let chosenEntertainment = entertainment();
    console.log('you are going to the:' + ' ' + chosenDestination + ',', 'the type of food chosen is' + ' ' + chosenRestaurant + ',' ,'you have chosen to take the:'+ ' ' + chosenTrans + ',', 'your chosen form of entertainment is:' + ' ' + chosenEntertainment + ',');
}
itinerary()

function runGenerator() { 
    let newOption = prompt('are you satisfied with your days results?:')
     while( newOption === "no") {
         itinerary()
         break;
     }
     if( newOption !== "no"){
         console.log('completed trip!');
     }
 }
 runGenerator();