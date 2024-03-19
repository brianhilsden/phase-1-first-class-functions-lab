// Code your solution in this file!
function returnFirstTwoDrivers(array){

    const newArray=array.slice(0,2);
    return newArray;
}

function returnLastTwoDrivers(array){
    const newArray=array.slice(array.length-2)
    return newArray;
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function (fare){
        return fare*num
    }
}

function fareDoubler(fare){
    const doubled=createFareMultiplier(2)(fare);
    return doubled;
}

function fareTripler(fare){
    const tripled=createFareMultiplier(3)(fare);
    return tripled;
}

function selectDifferentDrivers(drivers,FirstOrLast){
    return FirstOrLast(drivers)
}