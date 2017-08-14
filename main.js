// Write your JavaScript here


// Variables


var twentyDollars = 0
var tenDollars = 0
var fiveDollars = 0
var dollars = 0
var quarters = 0
var dimes = 0
var nickels = 0
var pennies = 0



//this function is going to do the math that will operate the change calculator
function handleClickEvent(e) {

  var amountReceived = $('#amount-received').val();
  var amountDue = $('#amount-due').val();
  var changeDue = Math.round((amountReceived - amountDue)*100);

    $('#amount-received').append('<div>' + amountReceived + '</div>');
    $('#amount-due').append('<div>' + amountDue + '</div>');


  var i = 0;
  var counter = 0;
while (counter < changeDue) {

    // while (i < changeDue/2000) {
    //     if ((changeDue - counter) < 2000) { break; }
    //     i += 1;
    //     twentyDollars += 1; 
    //     counter += 2000;
    // } 
    //   while (i < changeDue/1000) {
    //       if ((changeDue - counter) < 1000) { break; }
    //       i += 1;
    //       tenDollars += 1; 
    //       counter += 1000;

    //   } 
    //     while (i < changeDue/500) {
    //       if ((changeDue - counter) < 500) { break; }
    //       i += 1;
    //       fiveDollars += 1; 
    //       counter += 500;

    //    }
        while (i < changeDue/100) {
          if ((changeDue - counter) < 100) { break; }
          i += 1;
          dollars += 1; 
          counter += 100;

        }
          while (i < changeDue/25) {
            if ((changeDue - counter) < 25) { break; }
            i += 1;
            quarters += 1; 
            counter += 25;

          }
            while (i < changeDue/10) {
              if ((changeDue - counter) < 10) { break; }
              i += 1;
              dimes += 1; 
              counter += 10;

            }
              while (i < changeDue/5) {
                if ((changeDue - counter) < 5) { break; }
                i += 1;
                nickels += 1; 
                counter += 5;

              }

                while (i < changeDue) {
                  if ((changeDue - counter) < 1) { break; }
                  i += 1;
                  pennies += 1; 
                  counter += 1;

                }
}


    $('#twenty-dollars-output').text(twentyDollars);
    $('#ten-dollars-output').text(tenDollars);
    $('#five-dollars-output').text(fiveDollars);
    $('#dollars-output').text(dollars);
    $('#quarters-output').text(quarters);  
    $('#dimes-output').text(dimes);
    $('#nickels-output').text(nickels);  
    $('#pennies-output').text(pennies);  
  
}


//binds the click event handler to the calculate change button
$( "#calculate-change" ).click(function() {
  handleClickEvent();
});