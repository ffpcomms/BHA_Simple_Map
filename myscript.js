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
			weight: 2,
			opacity: 1,
			color: '#8C8985',
			dashArray: '3',
			fillOpacity: 0.7
		};
	}

	
L.geoJson(bhaCountries, {
	style: style,
	onEachFeature: function (feature, layer) {
		var text = feature.properties.SOVEREIGNT;
		if (feature.properties.Response !== null) {
			text = feature.properties.SOVEREIGNT + "<br />" + feature.properties.Response + " Regional Response";
		}
		layer.bindTooltip(text);
	}
}).addTo(map);

L.geoJson(bhaCountriesBorder, {
	style: style
}).addTo(map);

//Legend
/*var legend = L.control({position: 'topright'});

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  //div.innerHTML += "<h4>Managed By:</h4>";
  div.innerHTML += '<i style="background: #f88379"></i><span>FFP</span><br>';
  div.innerHTML += '<i style="background: #82B2DC"></i><span>OFDA</span><br>';
  div.innerHTML += '<i style="background: #BDA8BA"></i><span>Both FFP and OFDA</span><br>';
  return div;
};

legend.addTo(map); 
*/
