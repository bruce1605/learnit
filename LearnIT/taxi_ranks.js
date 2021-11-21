//Ekhurhuleni Taxi Ranks object




function addRoute() {
    //get data
    const fromRank = (document.getElementById('from-rank').value).toLowerCase();
    const destinationRank = (document.getElementById('destination-rank').value).toLowerCase();
    const distance = (document.getElementById('distance').value).toLowerCase();
    const cost = (document.getElementById('cost').value).toLowerCase();

    //create obj
    const newRoute = {
        destination: destinationRank,
        distance: distance,
        cost: cost
    }
    //find index of chosen rank
    let rankIndex = Ranks.find((obj, index) => {
        if(obj.name == fromRank) {
            return index;
        }
    })
    //add route to rank routes array
    Ranks[rankIndex].routes.push(newRoute);

    console.log(Ranks[rankIndex]);
}

/*
function addTaxiRank() {
    //get data
    const name = (document.getElementById('name').value).toLowerCase();
    const area = (document.getElementById('area').value).toLowerCase();
    const address = (document.getElementById('address').value).toLowerCase();

    //create obj
    const newRank = {
        name: name,
        area: area,
        address: address,
        routes: []
    }
    //add to Rank array
    Ranks.push(newRank);
    
    console.log(Ranks);

    localStorage.setItem('ranks', JSON.stringify(Ranks));
    alert('Success');

}
*/


let Ranks = [
    {
        "name": "springs main taxi rank",
        "area": "springs",
        "address": "at spring station next to 1st st",
        "routes": []
    },
    {
        "name": "top centre taxi rank",
        "area": "springs",
        "address": "next to 1st street between 4th ave & 5th ave",
        "routes": [
            {
                "destination": "springs main taxi rank",
                "distance": "30",
                "cost": "25"
            },
            {
                "destination": "benoni station rank",
                "distance": "20",
                "cost": "17"
            },
            {
                "destination": "brakpan station taxi rank -1",
                "distance": "24",
                "cost": "34"
            },
            {
                "destination": "brakpan station taxi rank -2",
                "distance": "15",
                "cost": "44"
            },
            {
                "destination": "nigel main taxi rank",
                "distance": "24",
                "cost": "35"
            },
            {
                "destination": "majola taxi rank",
                "distance": "34",
                "cost": "26"
            },
            {
                "destination": "elandsfontein station taxi rank",
                "distance": "42",
                "cost": "35"
            },
            {
                "destination": "alra park",
                "distance": "26",
                "cost": "27"
            },
            {
                "destination": "top centre taxi rank",
                "distance": "26",
                "cost": "25"
            },
            {
                "destination": "black road/vlakfontein taxi rank",
                "distance": "34",
                "cost": "17"
            },
            {
                "destination": "top centre taxi rank",
                "distance": "26",
                "cost": "8"
            },
            {
                "destination": "top centre taxi rank",
                "distance": "26",
                "cost": "8"
            },
            {
                "destination": "nigel main taxi rank",
                "distance": "26",
                "cost": "8"
            }
        ]
    },
    {
        "name": "benoni station rank",
        "area": "benoni",
        "address": "at station – cnr luton rd and liverpool rd",
        "routes": []
    },
    {
        "name": "brakpan station taxi rank -1",
        "area": "brakpan",
        "address": "at brakpan station next to station st",
        "routes": []
    },
    {
        "name": "brakpan station taxi rank -2",
        "area": "brakpan",
        "address": "station rd, brakpan",
        "routes": []
    },
    {
        "name": "brakpan station taxi rank -3",
        "area": "brakpan",
        "address": "station rd, brakpan",
        "routes": []
    },
    {
        "name": "dunswart junction taxi rank plus holding area",
        "area": "benoni",
        "address": "end of wheaton rd",
        "routes": []
    },
    {
        "name": "nigel main taxi rank",
        "area": "nigel",
        "address": "cnr nigel marievale rd (r42) & northern road",
        "routes": []
    },
    {
        "name": "black road/vlakfontein taxi rank",
        "area": "tsakane",
        "address": "cnr vlakfontein rd & ndabezitha st (black rd)",
        "routes": []
    },
    {
        "name": "daveyton square (cbd) taxi rank",
        "area": "daveyton",
        "address": "cnr eiselen & embuswe st ",
        "routes": []
    },
    {
        "name": "daveyton station taxi rank",
        "area": "daveyton",
        "address": "daveyton station – huruthse st",
        "routes": []
    },
    {
        "name": "las vegas (etwatwa)",
        "area": "daveyton",
        "address": "eiselen st & albatros st",
        "routes": []
    },
    {
        "name": "lakeside taxi rank (benoni cbd)",
        "area": "benoni",
        "address": "cnr voortrekker st & kemston ave (next to lake)",
        "routes": []
    },
    {
        "name": "majola taxi rank",
        "area": "kwa-thema",
        "address": "cnr thema rd & majola st",
        "routes": []
    },
    {
        "name": "harpur/market blue taxi rank",
        "area": "benoni",
        "address": "cnr voortrekker st & harpur ave",
        "routes": []
    },
    {
        "name": "elandsfontein station taxi rank",
        "area": "boksburg",
        "address": "cnr jet park rd and jansen road",
        "routes": []
    },
    {
        "name": "alra park",
        "area": "nigel",
        "address": "cnr gazelle dr & grysbok av",
        "routes": []
    },
    {
        "name": "duduza taxi rank",
        "area": "duduza",
        "address": "cnr nala & lekope st",
        "routes": []
    },
    {
        "name": "new era station taxi rank",
        "area": "springs",
        "address": "cnr orr rd & meter dr",
        "routes": []
    },
    {
        "name": "kingsway taxi rank",
        "area": "benoni",
        "address": "cnr kingsway rd & isibusiso st ",
        "routes": []
    },
    {
        "name": "northmead hospital taxi rank",
        "area": "benoni",
        "address": "on hospital rd between aster st & aerodrome dr",
        "routes": []
    },
    {
        "name": "dannottar taxi rank",
        "area": "nigel",
        "address": "cnr nigel rd & birkenruth ave ",
        "routes": []
    },
    {
        "name": "selcourt taxi rank",
        "area": "springs",
        "address": "cnr nigel rd south & charterland ave",
        "routes": []
    },
    {
        "name": "malandela/tsakane taxi rank",
        "area": "tsakane",
        "address": "cnr malandela & ndlambe st",
        "routes": []
    },
    {
        "name": "slovo park/ welgedacht taxi rank",
        "area": "springs",
        "address": "cnr welgedacht rd & milner rd",
        "routes": []
    },
    {
        "name": "bakerton taxi rank",
        "area": "springs",
        "address": "cnr welgedacht rd & 1st ave",
        "routes": []
    },
    {
        "name": "reedville taxi rank",
        "area": "springs",
        "address": "prague rd",
        "routes": []
    },
    {
        "name": "far east hospital taxi rank",
        "area": "benoni",
        "address": "hospital road",
        "routes": []
    },
    {
        "name": "kempton park main",
        "area": "kempton park",
        "address": "pretoria rd at kempton park station",
        "routes": []
    },
    {
        "name": "oakmoor east (octs= oakmoor commuter tranport services)",
        "area": "tembisa",
        "address": "pretoria rd (next to railway station)",
        "routes": []
    },
    {
        "name": "oakmoor long distance (north)",
        "area": "tembisa",
        "address": "cnr nyarhi st & crocodile st (next to oakmoor train station on the tembisa side)",
        "routes": []
    },
    {
        "name": "phomolong taxi rank",
        "area": "tembisa",
        "address": "cnr et mdaka & sm songo st",
        "routes": []
    },
    {
        "name": "jabula taxi rank",
        "area": "edenvale",
        "address": "cnr de wet st & 7th st",
        "routes": []
    },
    {
        "name": "betschana taxi rank",
        "area": "edenvale",
        "address": "cnr betschana st & terrace rd",
        "routes": []
    },
    {
        "name": "winnie mandela taxi rank",
        "area": "tembisa",
        "address": "madiba dr",
        "routes": []
    },
    {
        "name": "birchleigh station west",
        "area": "kempton park",
        "address": "station st & matumi ave",
        "routes": []
    },
    {
        "name": "birchleigh station east",
        "area": "kempton park",
        "address": "pretoria rd",
        "routes": []
    },
    {
        "name": "umnonjaneni taxi rank",
        "area": "tembisa",
        "address": "benji st",
        "routes": []
    },
    {
        "name": "hospital view taxi rank",
        "area": "tembisa",
        "address": "cnr flint mazibuko & samora machel st",
        "routes": []
    },
    {
        "name": "olifantsfontein taxi rank",
        "area": "tembisa",
        "address": "olifantsfontein shopping centre, patricia st",
        "routes": []
    },
    {
        "name": "crown cork (isando 2) taxi rank",
        "area": "isando",
        "address": "foundry st between isando rd & monteer rd",
        "routes": []
    },
    {
        "name": "tsaka/sebenza taxi rank",
        "area": "edenvale",
        "address": "tsaka rd near terrace rd",
        "routes": []
    },
    {
        "name": "ossewa taxi rank",
        "area": "edenvale",
        "address": "cnr ossewa st & zuurfontein rd",
        "routes": []
    },
    {
        "name": "ndayeni taxi rank",
        "area": "tembisa",
        "address": "northern cnr of umnonjaneni next to benji dr",
        "routes": []
    },
    {
        "name": "leralla station taxi rank (east)",
        "area": "tembisa",
        "address": "nakuru street",
        "routes": []
    },
    {
        "name": "leralla station taxi rank (west)",
        "area": "tembisa",
        "address": "cnr umzimvubu st and seagul street tembisa",
        "routes": []
    },
    {
        "name": "germiston station taxi rank",
        "area": "germiston",
        "address": "between railway st, sauer st & institute st",
        "routes": []
    },
    {
        "name": "simmer taxi rank",
        "area": "germiston",
        "address": "simmer rd",
        "routes": []
    },
    {
        "name": "dunswart north taxi rank",
        "area": "boksburg",
        "address": "van dyk rd & main reef rd (under the bridge)",
        "routes": []
    },
    {
        "name": "market/commissioner taxi rank",
        "area": "boksburg",
        "address": "trichard rd, between leeuwpoort st & adderley rd",
        "routes": []
    }
]