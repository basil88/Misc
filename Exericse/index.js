var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {};
var pita = 9;

function buildOptions() {

    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}
buildOptions();
console.log(bitwiseOptions);



function is(obj, option) {
    if ((obj & bitwiseOptions[option]) === bitwiseOptions[option]){
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}

function set(obj, option) {
    if ((!!bitwiseOptions[option]) && !(is(obj, option))){
        console.log("this executes");
        return pita += bitwiseOptions[option];
    }

}
