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
    }
destination()

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
    }
restaurant()

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
    }
transport()

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

    }
entertainment()