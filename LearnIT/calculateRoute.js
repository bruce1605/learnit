

/* 
    parameters: current location (string), destination (string), Array


*/

function calculateRoute(location, destination, ranksArr) {
    
    let locationRank;
    let destinationRank;
    
    //find rank in location and assign to locationRank
    locationRank = ranksArr.find(locationRank(rankObj))

    locationRank.routes.find((destinationRankObj, index) => {
        if(destinationRankObj.destination.search(destination) != -1) {
            destinationRank = destinationRankObj;
        }
    })
}

function locationRank(rankObj) {
    if(rankObj.name.search(location) != -1) {
        locationRank = rankObj
    } else {
        console.log('No taxi rank found in ' + location);
        return null;
    }
}