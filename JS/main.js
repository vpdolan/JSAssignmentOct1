(function(){


//Add all of the prices together
var prices = items.map ( function (item) {
  return item.price;
});

//console.log(prices);

var sum = prices.reduce( function (prev, next) {
  return prev + next;
});

  //console.log(sum);
//Divide by total number of items
 var avg = sum / prices.length;
    //console.log(avg);

//Convert to two decimal places

var converted = avg.toFixed(2);
 //console.log(converted);

 //make it a string//
var str = 'The average price is $' + converted;
 //console.log(str);

//make it show on page
var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(str);

answer1.appendChild(textNode);





//Question 2
//IIFE


var itemTitle = [];

var merchList = items.forEach (function(item) {
    if ((item.price > 14.00) && (item.price < 18.00)) {
    itemTitle.push(item.title); 
    }
  });

    //console.log(itemTitle);
 
var answer2 = document.querySelector('#answer2');
var textNode = document.createTextNode(itemTitle.join("<br>"));
answer2.appendChild(textNode);






//Question 3
//IIFE



var beer = [];


  items.filter (function (item) {
     if (item.currency_code === 'GBP' && item.price >17){
       beer.push (item.title + " costs" + " \u00A3" + item.price);
      }
      
    });
      //console.log(beer);
    
 var answer3 = document.querySelector('#answer3');
 var textNode = document.createTextNode(beer);
 answer3.appendChild(textNode);       






//question4




   
var wood = items.filter(function (item){
  if(item.materials.indexOf("wood") !== -1)
    return item.materials 
  });

var answerFour = document.querySelector('#answer4');
  answerFour.innerText = '';
  wood.forEach(function(item){
    answerFour.appendChild(document.createTextNode(item.title + "is made of wood" + "n\n\n" ));
  });




//Question 5

//IIFE
 
 var material=[];
 var mat_count;

 var materials = items.filter(function(item) {
  if(item.materials.length > 7) { 
     material.push(item);
   };
    
 });
 
 var answer5 = document.querySelector('#answer5');  
  
 material.forEach(function(x) {
    mat_count = x.materials.length;
    var str = "has " + mat_count + " " + "materials:";
    var textNode1 = document.createTextNode(x.title);
    var textNode2 = document.createTextNode(str);
    var linebreak = document.createElement('br');
    var textNode3; 
    var linbrk;
    answer5.appendChild(textNode1);
    answer5.appendChild(linebreak);
    answer5.appendChild(textNode2);
    answer5.appendChild(linebreak);
    x.materials.forEach(function(y) {
      textNode3 = document.createTextNode(y);
      linbrk = document.createElement('br');
      answer5.appendChild(textNode3);
      answer5.appendChild(linbrk);
    });
  });    
  


//Question 6

//IIFE



var itemHomemade = [];
var total;
var byMaker = items.filter (function(item) {
  if (item.who_made==="i_did") {
    itemHomemade.push(item.who_made); 
  }
}); 

total = itemHomemade.length;

var str = total + " " + "were made by sellers";
    
var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(str); 
answer6.appendChild(textNode); 


//IIFE Brackets
}()); 
            
  





