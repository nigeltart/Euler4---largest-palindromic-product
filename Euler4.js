function numberIsPalindromic (number){
    var units = number%10;
    number = number-number%10;
    var tens = number%100/10;
    number = number-number%100;
    var hundreds = number%1000/100;
    number = number-number%1000;
    var thousands = number%10000/1000;
    number=number-number%10000;
    var tenThousands = number%100000/10000;
    number=number-number%100000;
    var hundredThousands = number%1000000/100000;
  
    return  (hundredThousands===units && tenThousands===tens && thousands===hundreds);
}

var highestSoFar = 1;
for (i=1; i<=999; i++) {
    for (j=1; j<=999; j++) {
        var product = i*j;
        if (numberIsPalindromic(product) ){
            if (product>highestSoFar){
                highestSoFar = product;
            }
        }
    }
}
console.log("The highest palindromic product is ",highestSoFar);
