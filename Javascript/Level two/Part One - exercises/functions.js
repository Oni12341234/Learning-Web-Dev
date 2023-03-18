function sleepIn(weekday, vacation){

    if (!(weekday) || (vacation)){
        return true;
    }
    else {

        return false;
    }

}

function monkeyTrouble(aSmile, bSmile){

    if ((aSmile && bSmile) || (!(aSmile) && !(bSmile))){
        return true;


    }
    else {

        return false;
    }
}

function stringTimes(str,n){

    return str*n;
}

function luckySum(a,b,c){

    if (b==13){
        return a;
    }
    else {return a+b+c};
}