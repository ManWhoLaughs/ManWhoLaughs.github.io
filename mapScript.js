mapboxgl.accessToken = 'pk.eyJ1IjoibWFud2hvbGF1Z2hzIiwiYSI6ImNqaDU4MW50eTEwajYycW1qdTQyZ280d2QifQ.JMSxouzm767PutWPIFBrlw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/manwholaughs/cjhdrmj8c1ve12rmwedci7580',
    logoPosition: 'bottom-left',
    center: [70,70],
    zoom: 1
});

map.dragRotate.disable();
map.touchZoomRotate.disableRotation();
        
map.on('load', function () {

    map.addLayer({
        "id": "full_map",
        "type": "fill",
        "source": {
            "type" : "geojson",
            "data" : 'countries_data.geojson'
        },
        "layout": {},
        "paint" : {
            "fill-color" : [
                'match',
                ['get', 'Qonqlusion'],
                'Very good', 'rgba(42, 160, 42, 0.4)',
                'Good', 'rgba(1,99,1,0.4)',
                'Normal', 'rgba(54, 200, 200, 0.4)',
                'Increased', 'rgba(244, 200, 24, 0.4)',
                'High', 'rgba(244, 128, 24, 0.4)',
                'Very high', 'rgba(225, 10, 34, 0.4)',
                'Deadly', 'rgba(255, 0, 0, 0.45)',
                'None', 'rgba(0, 0, 0, 0.2)',
                'rgba(100, 100, 400, 0.4)'
            ],
            "fill-outline-color" : [
                'match',
                ['get', 'Qonqlusion'],
                'Very good', 'rgba(42, 160, 42, 1)',
                'Good', 'rgba(0, 128, 0, 1)',
                'Normal', 'rgba(54, 200, 200, 1)',
                'Increased', 'rgba(244, 200, 24, 1)',
                'High', 'rgba(244, 128, 24, 1)',
                'Very high', 'rgba(225, 10, 34, 1)',
                'Deadly', 'rgba(255, 0, 0, 1)',
                'None', 'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
            ]
        }
    });
});

map.on('click', 'full_map' ,function (e) {
    console.log(e.features[0]);
    if (e.features[0].properties.Qonqlusion != "None") {
        let grp = e.features[0].properties.Qonqlusion;
        if (grp == 'Deadly') {
            grp = 'Very high';
        }
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<h3 style=\"margin:6px; color:rgba(245, 245, 245,1);\">" + e.features[0].properties.Name + "</h3>\n"
            + "\n<p style=\"margin:6px;  color:rgba(235,235,235,1);\"> Crime rating: " + e.features[0].properties['Crime rating'] + "</p>"
        + "<p style=\"margin:6px;  color:rgba(235,235,235,1);\">" + "Dynamic of situation: " + e.features[0].properties['Dynamic'] + "</p>"
        + "\n<p style=\"margin:6px; color:rgba(235, 235, 235, 1);\"> Group: " + grp + "</p>") 
        .addTo(map);
    } else {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<h3 style=\"margin:6px;color:rgba(235,235,235,1);\">" 
            + e.features[0].properties.Name + "</h3>\n" + "<p style=\"margin:6px;  color:rgba(235,235,235,1);\" > No information </p>")
        .addTo(map);
    }
});

map.on('mouseenter', 'full_map', function (e) {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'full_map', function () {
    map.getCanvas().style.cursor = '';
});

