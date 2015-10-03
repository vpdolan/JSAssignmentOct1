// IIFE
;( function () {

  console.log(items.length);




//items.forEach ( function (item) {
  // console.log(item.price);//

//Add all of the prices together
  var prices = items.map ( function (item) {
    return item.price;
});

  console.log(prices);

  // prices.filter (function (prices)
    
  // return prices >= 14.00 && <= 18.00;

var sum = prices.reduce( function (prev, next) {
  return prev + next;
});

  console.log(sum);
//Divide by total number of items
  var avg = sum / prices.length;
    console.log(avg);

//Convert to two decimal places

var converted = avg.toFixed(2);
 console.log(converted);

 //make it a string

 var str = 'The average price is $' + converted;
 console.log(str);

//make it show on page
var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(str);

answer1.appendChild(textNode);


}());


//Question 2
//IIFE

;( function () {


  var itemTitle = [];

var merchList = items.forEach (function(item) {
    if ((item.price > 14.00) && (item.price < 18.00)) {
    itemTitle.push(item.title); 
    }
  });

    console.log(itemTitle);
 
var answer2 = document.querySelector('#answer2');
var textNode = document.write(itemTitle.join("<br>"));

}());




//Question 3
//IIFE

;( function () {

var beer = [];


    items.filter (function (item) {
     if (item.currency_code === 'GBP' && item.price >17){
       beer.push (item.title + " costs" + " \u00A3" + item.price);
      }
      
    });
      console.log(beer);
    

      // else if (item.price > 17.00){
      //    beer.push (item.price)
      // }
        // console.log(item.price);

        var answer3 = document.querySelector('#answer3');
        var textNode = document.createTextNode(beer);

        answer3.appendChild(textNode);       


}());



//question4

//IIFE

;( function () {





















}());






