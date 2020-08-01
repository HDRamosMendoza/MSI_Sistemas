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
    center: [-12.099167, -77.034722],
    zoom: 14,
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

/* Zoom - San Isidro
setTimeout(function(){ 
    map.flyTo([-12.099167, -77.034722], 14);
}, 1000);
 */

/* LOAD - Field */
let _fnLoadField = function(Longitud, Latitud) {
    try {
        /* DOM - Checkbox (input) */
        let settings = {
            url: "https://test.munisanisidro.gob.pe/WSMSI/ListarCalleCatastro",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(
                {
                    "Longitud":Longitud,
                    "Latitud":Latitud
                }
            )
        };

        $.ajax(settings)
            .done(function (response) {
                /* FIELD */
                $("#IDCuadra").val(response[0]["CuadraVia"]);
                $("#IDComentario").val(response[0]["ReferenciaDireccion"]);
            })
            .fail(function(jqXHR, textStatus) {
                console.log(textStatus);
            })
            .always(function() {
                console.log(`Complete - fnLoadUbicacion`);
            });

    } catch(error) {
        console.error(`fnLoadUbicacion: ${error.name} - ${error.message}.`);
    }
};

/* LOAD - Field */
_fnLoadField("-77.0330859","-12.0946961");

/* LOAD - Lote */
let _fnLoadLote = function(lote) {
    
    try {
        // DOM - Checkbox (input)
        let markerLote;
        let settings = {
            url: "https://test.munisanisidro.gob.pe/WSMSI/ListarCalleCatastroLote",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({ "Lote": lote })
        };

        $.ajax(settings)
            .done(function (response) {
                // LOTE
                console.log(response[0]);
                let greenIcon = L.icon({
                    iconUrl: 'images/geo-35.png', iconSize:[38,38],
                });
                markerLote = [response[0]["NumLatitud"],response[0]["NumLongitud"]];
                let popupLote = L.marker(markerLote,{
                    icon: greenIcon
                }).addTo(map);
                popupLote.bindPopup("<center><b>LOTE</b></center>\
                    <p>\
                        <b>Código Lote Catastral:</b> "+ response[0]['CodigoLoteCatastral'] + "<br/>\
                        <b>Código Sector Vecinal:</b> "+ response[0]["CodigoSectorVecinal"] + "<br/>\
                        <b>Código Segmento Víal:</b> "+ response[0]["CodigoSegmentoVial"] + "<br/>\
                        <b>Código SubSectorVecinal:</b> "+ response[0]["CodigoSubSectorVecinal"] + "<br/>\
                        <b>Código Ubigeo:</b> "+ response[0]["CodigoUbigeo"] + "<br/>\
                        <b>Código Vía:</b> "+ response[0]["CodigoVia"] + "<br/>\
                        <b>Cuadra Vía:</b> "+ response[0]["CuadraVia"] + "<br/>\
                        <b>Latitud:</b> "+ response[0]["NumLatitud"] + "<br/>\
                        <b>Longitud:</b> "+ response[0]["NumLongitud"] + "<br/>\
                        <b>Referencia Dirección:</b>"+ response[0]["ReferenciaDireccion"] + "\
                    </p>\
                ").openPopup();
            })
            .fail(function(jqXHR, textStatus) {
                console.log(textStatus);
            })
            .always(function() {
                console.log(`Complete - fnLoadUbicacion`);
            });

    } catch(error) {
        console.error(`_fnLoadLote: ${error.name} - ${error.message}.`);
    }
};

/* LOAD - Lote */
_fnLoadLote("3104010002");

/* Map RENDER */
let _zoomHomeToggle = function(valueBoolean){
    try{
      let getCenter = map.getCenter(),point,pixelToGrad;
      let gradToPixel = map.latLngToContainerPoint(getCenter);
      if (valueBoolean){
        point = [gradToPixel.x - 300, gradToPixel.y + 300];
      } else {
        point = [gradToPixel.x + 300, gradToPixel.y - 300];
      }
      pixelToGrad = map.containerPointToLatLng(point);
      map.setView(pixelToGrad,map.getZoom())
    } catch(error) {
      console.error(`InitializeMap: ${error.name} - ${error.message}.`);
    }
};

let _changeButtonNuevo = function(idElement){
    const nodeNuevo = document.getElementById(idElement);
    const nodeCancelar = document.getElementById('IDCancelar');
    nodeNuevo.addEventListener('click', function(event) {
        const contentID = document.getElementById("IDContent");
        const contentMap = document.getElementById("map");
        contentID.classList.remove('col-md-12');
        contentID.classList.add('col-md-8');
        console.log(contentMap.style.height);
        contentMap.style.height = "800px";
        nodeNuevo.style.display = "none";
        nodeCancelar.style.display = "block";
        _zoomHomeToggle(false);
    });
};

_changeButtonNuevo("IDNuevo");

let _changeButtonCancelar = function(idElement){
    const nodeNuevo = document.getElementById("IDNuevo");
    const nodeCancelar = document.getElementById(idElement);
    nodeCancelar.addEventListener('click', function(event) {
        const contentID = document.getElementById("IDContent");
        const contentMap = document.getElementById("map");
        contentID.classList.remove('col-md-8');
        contentID.classList.add('col-md-12');
        console.log(contentMap.style.height);
        contentMap.style.height = "450px";
        nodeCancelar.style.display = "none";
        nodeNuevo.style.display = "block";
        _zoomHomeToggle(true);
    });
};

_changeButtonCancelar('IDCancelar');
/*
let _changeXPanel = function (valueBoolean, valueThis) {
    try {
        // Accede al padre del padre
        const contentID = valueThis.parentNode.parentNode;
        const contentIDNuevoCaso = document.getElementById("IDNuevoCaso");
        const contentMap = document.getElementById("map");
        if (valueBoolean == true) {
            contentID.classList.remove('col-md-12');
            contentID.classList.add('col-md-8');
            contentMap.style.height = "820px";
            valueThis.style.display = "none";
            // Accede al hermano siguiente
            valueThis.previousElementSibling.style.display = "block";
            contentIDNuevoCaso.style.display = "block";
            _zoomHomeToggle(false);
        } else {
            contentID.classList.remove('col-md-8');
            contentID.classList.add('col-md-12');
            contentMap.style.height = "450px";
            valueThis.style.display = "none";
            // Accede al hermano anterior con la misma jerarquia
            valueThis.nextElementSibling.style.display = "block";
            contentIDNuevoCaso.style.display = "none";
            _zoomHomeToggle(true);
        }
    } catch (error) {
        console.error(`_changeXPanel: ${error.name} - ${error.message}.`);
    }
};
*/
