function getRandomInteger(lower, upper){
    //R = parseInt(rnd * (upper - (lower - 1)) + lower
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;

    return rnd;
}

function isLandscape(width, height){
    return width > height ? true : false;
}

// console.log("The view is landscape: " + isLandscape(200, 400));
// console.log("The view is landscape: " + isLandscape(400, 400));
// console.log("The view is landscape: " + isLandscape(200, 100));

function brooklynTech(num){
    var message = num;
    if (typeof num != 'number'){
        return "Not a number";
    }
    if (num % 3 == 0){
        message = "Brooklyn ";
        if (num % 5 == 0){
            message += "Tech";
        }
    }
    else if (num % 5 == 0){
        message = "Tech";
    }
    

    return message;
    
}

// console.log(brooklynTech(15));
// console.log(brooklynTech(5));
// console.log(brooklynTech(1));
// console.log(brooklynTech(3));
// console.log(brooklynTech(true));


