import { Getters, Posts } from "../Handlers/DataHandler.js";
import { utilsManager } from "../utils.js";
import { ActiveCallComponent } from "../Views/Components/ActiveCallComponent.js";
import { PopupCallDetails } from "../Views/Components/Popups/PopupDetails.js";
import { CallSignToDisplayCircle } from "../config.js";
import { InitAddUnit } from "./PopupController.js";


let mymap;
let markers = [];
let ActtiveCalls = [];
const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

const CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
projection: L.Projection.LonLat,
scale: function(zoom) {

    return Math.pow(2, zoom);
},
zoom: function(sc) {

    return Math.log(sc) / 0.6931471805599453;
},
distance: function(pos1, pos2) {
    var x_difference = pos2.lng - pos1.lng;
    var y_difference = pos2.lat - pos1.lat;
    return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
},
transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
infinite: true
});


let ExampleGroup = L.layerGroup();
let Icons = {
"Example" :ExampleGroup,
};

export function InitDispatch(){
    ActtiveCalls = Getters.GetActiveCalls()
   InitMap()
   DisplayCalls()
   InitAddUnits()
}


function InitMap(){
    const MapStyle =  L.tileLayer('images/mapStyles/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,id: 'styleAtlas map',})
    mymap = L.map('map', {
        crs: CUSTOM_CRS,
        minZoom: 2,
        maxZoom: 5,
        Zoom: 5,
        maxNativeZoom: 5,
        preferCanvas: true,
        layers: [MapStyle],
        center: [0, 0],
        zoom: 3,
    });
    
    document.querySelector('.leaflet-control-attribution').innerHTML = ""  
}

function DisplayCalls(){
    
    ActtiveCalls.map(call => {
        utilsManager.addChild('.calls-holder', ActiveCallComponent(call, markers.length ) )
        markers.push("")
       
    })

    InitCallListeners()
     
}


function InitCallListeners(){
    document.querySelectorAll('.calls-item--container').forEach( call => {
        const item_id = call.dataset.id
        call.addEventListener('click', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            utilsManager.addChild('body', PopupCallDetails(mouseX, mouseY) )
            InitCallDetails(item_id)
        })
        
    })
}



function InitCallDetails(item_id){
    const popupHolder = document.querySelector('.popup-holder')
    document.querySelector('.addpin').addEventListener('click', () => {
        if(CallSignToDisplayCircle.includes(ActtiveCalls[item_id].code)){
          
            AddCircle(ActtiveCalls[item_id].coords.x, ActtiveCalls[item_id].coords.y, item_id)
        } else{
         
            AddPin(ActtiveCalls[item_id].coords.x, ActtiveCalls[item_id].coords.y, item_id)
            console.log(markers[item_id])
        }
        
        popupHolder.remove()
    })
    document.querySelector('.deletepin').addEventListener('click', () => {
        RemovePin(item_id)
        popupHolder.remove()

    })
    document.querySelector('.gps').addEventListener('click', () => {
        Posts.MarkGps({x:ActtiveCalls[item_id].coords.x, y: ActtiveCalls[item_id].coords.y })
        popupHolder.remove()

    })
    document.querySelector('.abort').addEventListener('click', () => {
        popupHolder.remove()
    })
}

function AddPin(x,y, item_id ){
  

    if(typeof markers[item_id] === "object") return
    markers[item_id] = L.marker([y, x]).addTo(mymap).bindPopup(`${ActtiveCalls[item_id].code} <br> ${ActtiveCalls[item_id].description}`)
    .openPopup();
}

function RemovePin(item_id){
    mymap.removeLayer(markers[item_id])
    markers[item_id] = ""
}

function AddCircle(x, y, item_id) {
    markers[item_id] =  L.circle([y, x], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 100
    }).addTo(mymap);  
}

function InitAddUnits(){
    
    document.querySelector('.units-header--add').addEventListener('click', () => {
       InitAddUnit()
    })
}

function DisplayUnits(){

}


export function ClearMarkers()
{
    markers = [];
    ActtiveCalls = [];
}