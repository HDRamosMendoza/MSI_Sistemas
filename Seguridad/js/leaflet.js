
	var cities = L.layerGroup();

	L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
	L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
	L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
	L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

	var map = L.map('map', {
		center: [-12.099167, -77.034722],
    	zoom: 14,
		layers: [grayscale, cities]
	});

	map.createPane('labels');

	// This pane is above markers but below popups
	map.getPane('labels').style.zIndex = 650;

	// Layers in this pane are non-interactive and do not obscure mouse/touch events
	map.getPane('labels').style.pointerEvents = 'none';

	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};

	var overlays = {
		"Cities": cities
	};

	L.control.layers(baseLayers, overlays).addTo(map);

/************************************************** BORRADOR */

let schools;
sql_text = '1=1';
/* CBO - Change */
fnLoadSector = function(idElement,urlWFS) {
    try { /* DOM - Checkbox (input) */
        const nodeCheckbox = document.getElementById(idElement);
        $.ajax( urlWFS, {
	  		type: 'GET',
	  		data: {
	      		service: 'WFS',
	      		request: 'GetFeature',
	      		typeName: 'msigeoportal:sec_catastro',
	      		CQL_FILTER: sql_text,
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
            resultItems.unshift("<option data-heber='asa' value=\"\"> - Seleccione - </option>");
		  	document.getElementById(idElement).innerHTML = resultItems.join("");

		  	
		});
    } catch (error) { console.error(error); }
};

/* CBO - Sector */
fnLoadSector('SectorID','http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wfs');
let multipolygonGeojson;
fnChangeSector = function(idElement) {
    try { /* DOM - Checkbox (input) */
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
		  			/* Borrar la capa */
					map.eachLayer( function(layer) {
          				if ( layer.myTag &&  layer.myTag === "myGeoJSON") {
            				map.removeLayer(layer)
              			}
            		});
            		/* Adicional al mapa y un popup */
		  			multipolygonGeojson = L.geoJson(cboSector[i]).addTo(map);
		  			multipolygonGeojson.eachLayer(function (layer) {
		  				/* Configuracion del POPUP */
						layer.bindPopup("<strong>SECTOR: " + layer.feature.properties.sector + "</strong>").openPopup();
						layer.myTag = "myGeoJSON";
					});

		  			map.fitBounds(multipolygonGeojson.getBounds());
		  		}
		  	}
        });
    } catch (error) { console.error(error); }
};

/* CBO - Sector */
fnChangeSector('SectorID');

/*Configurando*/
function fnTileLayer (){
     //defeine schools as a global variable, without var keyword so it can be checked at set_sql function
     schools = L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
            layers: 'msigeoportal:sec_catastro',
            format: 'image/png',
            transparent: true,
            maxZoom: 30,
            opacity: 0.5,
            cql_filter: '1=2',
            pane: 'labels'
        }).addTo(map);

     //console.log(schools);
}

fnTileLayer();