let MSI_Peru = ' © <a href="http://msi.gob.pe/portal/">MSI</a>';

let baseLayers = {
    'Lotización': L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        attribution: "Lotización" + MSI_Peru,
        layers:'glayer_Lotizacion',
        format:'image/png',
        transparent:true,
        maxZoom:30
    }),
    'Sector catastral': L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        attribution: "Sector catastral" + MSI_Peru,
        layers:'sec_catastro',
        format:'image/png',
        transparent:true,
        maxZoom:30
    }),
    'Sector de habilitación': L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        attribution: "Sector de habilitación" + MSI_Peru,
        layers:'sec_habilitacion',
        format:'image/png',
        transparent:true,
        maxZoom:30
    }),
    'Sector vecinal': L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        attribution: "Sector vecinal" + MSI_Peru,
        layers:'sec_vecinal',
        format:'image/png',
        transparent:true,
        maxZoom:30
    })
};

let basemaps = {
    "MSI - Distritos Colindantes": L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        attribution: 'Distritos Colindantes © <a href="http://msi.gob.pe/portal/"> MSI</a> Lima - Perú',
        format: 'image/png',
        layers: 'glayer_Trama_externa',
        maxZoom: 30
    }),
    "MAPBOX - Streets v11": L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        maxZoom: 30
    }),
    "OSM - Open Streets Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 30
    }),
};

var map = L.map('map', {
    center: [-9.189967, -75.015152],
    zoom: 5,
    layers: [
        basemaps['MSI - Distritos Colindantes'],
        baseLayers['Lotización']
    ]
});

map.createPane('labels');

// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 650;

// Layers in this pane are non-interactive and do not obscure mouse/touch events
//map.getPane('labels').style.pointerEvents = 'none';

L.control.layers(
    basemaps,
    baseLayers
).addTo(map);

/************************************************** BORRADOR */

let schools;
sql_text = '1=1';

/* CBO - Change 
fnLoadSector = function(idElement,urlWFS) {
    try { // DOM - Checkbox (input)
        const nodeCheckbox = document.getElementById(idElement);
        $.ajax( urlWFS, {
            type: 'GET',
            data: {
                service: 'WFS',
                request: 'GetFeature',
                typeName: 'msigeoportal:sec_catastro',
                cql_filter: sql_text,
                srsname: 'EPSG:4326',
                outputFormat: 'application/json'
            }
        }).done(function(item) { 	
            let resultItems = [];
            features = item.features;
            itemLength = features.length;
            for(let i = 0; i < itemLength; i++) {
                resultItems.push('\
                    <option data-heber="asa"\
                        value="' + features[i].properties.id_sector +'" >'
                        + features[i].properties.sector + 
                    '</option>'
                );
            }
            resultItems = resultItems.sort();
            localStorage.setItem('sector', JSON.stringify(features));
            resultItems.unshift("<option value=\"\"> - Seleccione - </option>");
            document.getElementById(idElement).innerHTML = resultItems.join("");
        });
    } catch (error) { console.error(error); }
};
*/

/* CBO - Sector 
fnLoadSector('SectorID','http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wfs');
*/
/*
let multipolygonGeojson;
fnChangeSector = function(idElement) {
try {
const nodeCheckbox = document.getElementById(idElement);
nodeCheckbox.addEventListener('change', function(event) {
event.preventDefault();
let idValue = this.value.trim();
//map.panTo(new L.LatLng(40.737, -73.923));
//map.setView(new L.LatLng(40.737, -73.923), 8);
schools.setParams({cql_filter:'id_sector=' + idValue });
let cboSector = JSON.parse(localStorage.getItem('sector'));
  for (var i = 0; i < cboSector.length; i++) {

      if(cboSector[i].properties.id_sector == idValue) {
            // Borrar la capa
        map.eachLayer( function(layer) {
              if ( layer.myTag &&  layer.myTag === "myGeoJSON") {
                map.removeLayer(layer);
              }
        });
        // Adicional al mapa y un popup
          multipolygonGeojson = L.geoJson(cboSector[i]).addTo(map);
          multipolygonGeojson.eachLayer(function (layer) {
            //Configuracion del POPUP
            layer.bindPopup("<strong>SECTOR: " + layer.feature.properties.sector + "</strong>").openPopup();
            layer.myTag = "myGeoJSON";
        });
        map.flyToBounds(multipolygonGeojson.getBounds());
          //map.fitBounds(multipolygonGeojson.getBounds());
      }
  }
});
} catch (error) { console.error(error); }
};
*/

/* CBO - Sector 
fnChangeSector('SectorID');
*/

/*Configurando*/
/*
function fnTileLayer() {
    schools = L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        layers: 'msigeoportal:sec_catastro',
        format: 'image/png',
        transparent: true,
        maxZoom: 30,
        opacity: 0.5,
        cql_filter: '1=2',
        pane: 'labels'
    }).addTo(map);
};
fnTileLayer();
-*/

/*
let greenIcon = L.icon({
    iconUrl: 'images/policia-48.png',
    iconSize:     [38, 38], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([-12.0989,-77.0347],{icon: greenIcon}).addTo(map);
*/

/* Zoom - San Isidro */
setTimeout(function(){ 
    map.flyTo([-12.099167, -77.034722], 14);
}, 1000);


/* CBO - Change */
fnLoadUbicacion = function() {
    let data = "{\"Longitud\":\"-77.0330859\", \"Latitud\":\"-12.0946961\"}"
    /* DOM - Checkbox (input) */
    /*
    try { 
        $.ajax({
            type: "POST",
            url: 'http://servicios.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro?jsoncallback=?',
            data : JSON.stringify(data),
            contentType: "application/json",
        }).done(function(item) {
            console.log(item);
        });
    } catch (error) { console.error(error); }
    */
  
  $.ajax({
    async: true,
    crossDomain: true,
    method: "post",
    url: 'https://servicios.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro',
    data : data,
    contentType:'application/json',
    dataType: "jsonp",
    cors: true ,
    headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "0b4e16e8-98ca-b52c-2c29-da643a6d34a3"
    },
    processData: false,
    success: function(respuesta) {
        console.log("- - - - - - -");
        console.log(respuesta);
        console.log("- - - - - - -");
    },
    error: function(e) {
      console.log("No se ha podido obtener la información");
      console.log(e);
    }
  });

  /*

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://servicios.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "a3792288-6148-aa73-00aa-e822b22197b9"
    },
    "processData": false,
    "data": "{\n     \"Longitud\":\"-77.0330859\", \n     \"Latitud\":\"-12.0946961\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  */

/*
    var flickerAPI = "http://servicios.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro?jsoncallback=?";
    $.getJSON( flickerAPI, {
        Longitud:"-77.0330859", 
        Latitud:"-12.0946961"
    }).done(function( data ) {
      console.log(data);
    });
    */
   /*
    $.ajax({
        type: 'POST',
        crossDomain: true,
        dataType: 'jsonp',
        data : data,
        url: 'http://servicios.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro?jsoncallback=?',
        success: function(jsondata){
            console.log(jsondata);
        }
    })
    */
/*
    $.ajax({
        type: "post",
        contentType:'application/json',
        url: 'http://servicios.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro?jsoncallback=?',
        secure: true,
        data: JSON.stringify(data),
        dataType: "jsonp",
        cors: true ,
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
        },
        success: function (msg) { msg.d}
    });
    */
};



/* CBO - Sector */
fnLoadUbicacion();