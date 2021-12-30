function getRandomInt(max){
    return Math.floor(Math.random()*max)
}

function reynMoves(){
    attack = getRandomInt(3);
    switch(attack){
        case(0):
        // Play sound effect
        //Increment score
        return 50;
        //Bone upper
        case(1):
        //Sword drive
        return 40;
        case(2):
        return 20;
        // pick another move
    }
    return 0
}
function MeliaMoves(){
    attack = getRandomInt(4);
    switch(attack){
        case(1):
        //ice move
        case(2):
        //Fire move
        case(3):
        //Lighting move
    }
    return 0;

}
function DunbanMoves(){
    attack = getRandomInt(4);
    switch(attack){
        case(1):

    }
    return 0
}