const locations = [
    {
        name: "Alcuin Montessori School",
        lat: 32.916321207598,
        lng: -96.7993770361158,
        url: "http://www.alcuinschool.org/"
    },
    {
        name: "Alliance College - Ready Public Schools",
        lat: 34.0781875880187,
        lng: -118.215540070314,
        url: "http://www.laalliance.org/"
    },
    {
        name: "Altoona High School",
        lat: 45.4956098975185,
        lng: -91.4012083742759,
        url: "https://www.altoona.k12.wi.us/schools/high-school/index"
    },
    {
        name: "Ann Arbor Pioneer Highschool",
        lat: 42.2628343929086,
        lng: -83.7553171585085,
        url: "http://www.a2schools.org/pioneer"
    },
    {
        name: "Apalachee High school",
        lat: 33.9486062731354,
        lng: -83.7857646606704,
        url: "http://www.barrow.k12.ga.us/ahs/"
    },
    {
        name: "Arlington Catholic High School",
        lat: 42.4157387285584,
        lng: -71.1503543008311,
        url: "https://www.achssas.org/"
    },
    {
        name: "Ayala High School",
        lat: 33.9946866152181,
        lng: -117.731553089504,
        url: "https://www.chino.k12.ca.us/Ayala"
    },
    {
        name: "Belle fourche high school",
        lat: 44.6638062876038,
        lng: -103.842269302585,
        url: "http://www.bellefourche.k12.sd.us/"
    },
    {
        name: "Bronx High School of Science",
        lat: 40.8781153601928,
        lng: -73.8912509910988,
        url: "http://www.bxscience.edu/"
    },
    {
        name: "Central Union Highschool",
        lat: 32.7889012623769,
        lng: -115.563594112832,
        url: "http://www.spartansnet.net/"
    },
    {
        name: "Centreville High School",
        lat: 38.8252698910762,
        lng: -77.4108830451516,
        url: "https://centrevillehs.fcps.edu/"
    },
    {
        name: "Channal Islands High School",
        lat: 34.1713684956049,
        lng: -119.162648731827,
        url: "http://www.channelislandshigh.us/"
    },
    {
        name: "Charlotte Lab School",
        lat: 35.2256398578283,
        lng: -80.8709985011056,
        url: "http://www.charlottelabschool.org/"
    },
    {
        name: "Coppell High School",
        lat: 32.9748331831737,
        lng: -96.9986142723469,
        url: "https://www.coppellisd.com/chs"
    },
    {
        name: "Countryside High",
        lat: 28.0235639042022,
        lng: -82.71149763387,
        url: "http://www.countryside-hs.pinellas.k12.fl.us/"
    },
    {
        name: "Crean Lutheran High School",
        lat: 33.7023893351585,
        lng: -117.731333076568,
        url: "http://www.creanlutheran.org/"
    },
    {
        name: "Division Avenue High School",
        lat: 40.7293724868244,
        lng: -73.5261146622691,
        url: "http://www.levittownschools.com/division/"
    },
    {
        name: "Foothill High School",
        lat: 33.8183287275795,
        lng: -117.803248085534,
        url: "https://www.tustin.k12.ca.us/foothill"
    },
    {
        name: "Foster high school",
        lat: 47.4748884066299,
        lng: -122.279993977325,
        url: "http://www.tukwilaschools.org/"
    },
    {
        name: "Green Hope High School",
        lat: 35.8050668908877,
        lng: -78.867126701085,
        url: "http://wcpss.net/greenhopehs"
    },
    {
        name: "Green Level High",
        lat: 35.7730119672634,
        lng: -78.8997363336206,
        url: "https://www.wcpss.net/greenlevelhs"
    },
    {
        name: "HH Dow Highschool",
        lat: 43.6408391063771,
        lng: -84.2754640468075,
        url: "https://dhs.midlandps.org/"
    },
    {
        name: "Hillsdale High School",
        lat: 37.5318124429928,
        lng: -122.314411677734,
        url: "https://www.smuhsd.org/hillsdalehigh"
    },
    {
        name: "HSN (Highschool North)",
        lat: 40.3235040236073,
        lng: -74.6003431181071,
        url: "http://www.west-windsor-plainsboro.k12.nj.us/schools/high_school_north"
    },
    {
        name: "Kenmore West High School",
        lat: 42.9734274706262,
        lng: -78.8648755738216,
        url: "http://www.ktufsd.org/Domain/56"
    },
    {
        name: "Laboratory School of Finance and Technology",
        lat: 40.8133796921201,
        lng: -73.9206002585671,
        url: "https://www.mshs223.org/"
    },
    {
        name: "Lenape Valley Regional High School",
        lat: 40.9206988955356,
        lng: -74.6981253315765,
        url: "https://www.lvhs.org/"
    },
    {
        name: "Manhattan Hunter Science High School",
        lat: 40.7746431192083,
        lng: -73.9852820027468,
        url: "https://www.mhshs.org/"
    },
    {
        name: "Mcconnell middle school",
        lat: 33.894212098182,
        lng: -83.9160036490284,
        url: "http://www.mcconnellms.org/"
    },
    {
        name: "Millennium High School",
        lat: 33.4947967414541,
        lng: -112.377217758836,
        url: "http://www.aguafria.org/Domain/10"
    },
    {
        name: "Millikan High School",
        lat: 33.8082668928753,
        lng: -118.111617520195,
        url: "https://millikan.lbschools.net/"
    },
    {
        name: "Miramonte High School, Orinda",
        lat: 37.8408570999785,
        lng: -122.145531674024,
        url: "http://www.acalanes.k12.ca.us/miramonte"
    },
    {
        name: "Montgomery Blair High School",
        lat: 39.0187939634124,
        lng: -77.0120956893222,
        url: "http://mbhs.edu/"
    },
    {
        name: "Mount Vernon High School",
        lat: 40.3783298864859,
        lng: -82.47444238742,
        url: "http://www.fcps.edu/MtVernonHS/"
    },
    {
        name: "Narbonne High School",
        lat: 33.8036389423214,
        lng: -118.305331331839,
        url: "https://www.narbonnehs.org/"
    },
    {
        name: "North Hollywood High School",
        lat: 34.1658791173299,
        lng: -118.388996402991,
        url: "https://northhollywoodhs.lausd.org/"
    },
    {
        name: "Northwood high school",
        lat: 33.7340840553477,
        lng: -117.750361082937,
        url: "https://northwoodhigh.iusd.org/"
    },
    {
        name: "Old Donation School",
        lat: 36.8705995077457,
        lng: -76.1350510163891,
        url: "https://olddonationschool.vbschools.com/"
    },
    {
        name: "Pacific Academy",
        lat: 33.1068337807781,
        lng: -117.271112044665,
        url: "http://www.pacificacademy.org/"
    },
    {
        name: "Panther Creek High School",
        lat: 38.8055369182599,
        lng: -79.7901273202529,
        url: "http://www.wcpss.net/panthercreekhs"
    },
    {
        name: "Parkdale High School",
        lat: 38.9699059488739,
        lng: -76.9047160046666,
        url: "https://www.pgcps.org/schools/parkdale-high"
    },
    {
        name: "Plano East Senior High School",
        lat: 33.0404571319008,
        lng: -96.6448159858379,
        url: "https://www.pisd.edu/pesh"
    },
    {
        name: "Queens Gateway to Health Sciences Secondary School",
        lat: 40.7185734358514,
        lng: -73.8059136604202,
        url: "https://www.queensgateway.org/"
    },
    {
        name: "Rancho Cucamonga High School",
        lat: 34.1323193301421,
        lng: -117.54691758765,
        url: "https://rchs.cjuhsd.net/"
    },
    {
        name: "Ruth Asawa San Francisco School of the Arts",
        lat: 37.7455091971993,
        lng: -122.448586360534,
        url: "https://www.sfusd.edu/school/ruth-asawa-san-francisco-school-arts"
    },
    {
        name: "Saint anthony high school",
        lat: 40.8125802944585,
        lng: -73.3880278297315,
        url: "http://www.stanthonyshs.org/"
    },
    {
        name: "Saint Ignatius College Preparatory",
        lat: 37.7476363915903,
        lng: -122.496351604712,
        url: "http://www.siprep.org/"
    },
    {
        name: "Santa Margarita Catholic High School",
        lat: 33.6436084403473,
        lng: -117.58072246253,
        url: "http://www.smhs.org/"
    },
    {
        name: "South High School",
        lat: 33.8752346587925,
        lng: -118.345854237064,
        url: "https://www.tusd.org/schools/shs"
    },
    {
        name: "St. Margaret's Episcopal School",
        lat: 33.5045831582961,
        lng: -117.650222356986,
        url: "https://www.smes.org/page"
    },
    {
        name: "Tustin High School",
        lat: 33.7357447061381,
        lng: -117.817407462527,
        url: "https://www.tustin.k12.ca.us/tustin-high"
    },
    {
        name: "Waterford High School",
        lat: 41.6463634394125,
        lng: -72.2519764698287,
        url: "https://www.waterford.k12.ca.us/o/waterford-high-school"
    },
    {
        name: "West Windsor - Plainsboro High School South",
        lat: 40.3061547257957,
        lng: -74.619655300916,
        url: "http://www.west-windsor-plainsboro.k12.nj.us/schools/high_school_south"
    },
    {
        name: "Westover School",
        lat: 41.5274644962513,
        lng: -73.1234205045659,
        url: "https://www.westoverschool.org/"
    }
];

// map.js

// Initialize map
const map = L.map('map').setView([39.8283, -98.5795], 4); // Center on USA

// Add OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18,
//     attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

//Add Carto Titles
// L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//     attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
//     subdomains: 'abcd',
//     maxZoom: 19
// }).addTo(map);
//Add Esri Tiles
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
}).addTo(map);

// Typography
// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
//     attribution: 'Tiles &copy; Esri',
//     maxZoom: 19
// }).addTo(map);
// //satallite
// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//     attribution: 'Tiles &copy; Esri',
//     maxZoom: 19
// }).addTo(map);

// Add markers to map
locations.forEach(loc => {
    L.marker([loc.lat, loc.lng]).addTo(map)
        .bindPopup(`
            <b>${loc.name}</b><br>
            <a href="${loc.url}" target="_blank">Visit School Page</a>
        `);
});

// var map = L.map('map').setView([51.505, -0.09], 13);

// document.addEventListener('DOMContentLoaded', function () {
//     // Create the map centered at a location with a zoom level
//     var map = L.map('map').setView([51.505, -0.09], 13);

//     // Add OpenStreetMap tiles
//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Add a marker and popup
//     L.marker([51.5, -0.09]).addTo(map)
//         .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//         .openPopup();
// });


