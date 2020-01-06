var map = L.map('map').setView([0, 25], 3);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 4,
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
		}).addTo(map);


	
// get color depending on Office No value
/*	function getColor(d) {
			if(d === 'Both'){
				return '#BDA8BA';
			}else if(d === 'FFP'){
				return '#f88379';
			}else{
				return '#82B2DC';
			}
	}
*/	

	function style(feature) {
		return {
			fillColor: '#82B2DC',
			weight: 1,
			opacity: 0,
			color: '#8C8985',
			dashArray: '3',
			fillOpacity: 0.7
		};
	}
	
	function style2(feature) {
		return {
			fillColor: '#82B2DC',
			weight: 1.25,
			opacity: 1,
			color: '#6C6463',
			dashArray: '3',
			
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			fillColor: '#002F6C',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
    }
	}
	
	var geoJson;
	
	
	
	function resetHighlight(e) {
		geoJson.resetStyle(e.target);
	}
	
	function onEachFeature(feature, layer) {
		var text = feature.properties.SOVEREIGNT;
		if (feature.properties.Response !== null) {
			text = feature.properties.SOVEREIGNT + "<br />" + "<i>" + feature.properties.Response + " Regional Response" + "</i>";
		}
		layer.bindTooltip(text);
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
		});
		
	}

geoJson = L.geoJson(bhaCountriesBorder, {
	style: style2
}).addTo(map);
	
geoJson = L.geoJson(bhaCountries, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);
