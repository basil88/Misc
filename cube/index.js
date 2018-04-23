function randomCube() {

    var number = Math.floor((Math.random() * 6) + 1);


    switch (number){
        case 1:
            console.log("A"); break;
        case 2:
            console.log("B"); break;
        case 3:
            console.log("C"); break;
        case 4:
            console.log("D"); break;
        case 5:
            console.log("E"); break;
        case 6:
            console.log("F"); break;
    }

}
randomCube();
