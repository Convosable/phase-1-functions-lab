// Code your solution in this file!
function distanceFromHqInBlocks(blocknumber) {
    return Math.abs(blocknumber - 42)
}
distanceFromHqInBlocks(40)

function distanceFromHqInFeet(blocknumber) {
    return distanceFromHqInBlocks(blocknumber)*264
}
distanceFromHqInFeet(22)

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination)*264)
}
distanceTravelledInFeet(30,44)

function calculatesFarePrice(start, destination) {

    let distance = distanceTravelledInFeet(start, destination)

    if (distance <=400) {
        return 0
    } else if (distance >400 && distance<= 2000) {
        return (distance - 400) *0.02 
    } else if (distance >2000 && distance <=2500) {
        return 25
    } else if (distance >2500) {
        return 'cannot travel that far'
    }
}

