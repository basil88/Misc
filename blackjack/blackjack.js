

// var number = Math.floor((Math.random() * 14) + 1);
var result = 0 ;
var counter = 0 ;

while (result < 21 && counter < 2){
    var answer = prompt("Deal Next Card?");
    if (answer === "no") break;
    else {
        var number = Math.floor((Math.random() * 14) + 1);
        result = number;
        counter++;
    }
    console.log("your result is " + result);
}
