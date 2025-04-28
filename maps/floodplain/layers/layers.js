var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_25yrReturnPeriod_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '25-yr Return Period<br />\
    <img src="styles/legend/25yrReturnPeriod_3_0.png" /> 0.0010<br />\
    <img src="styles/legend/25yrReturnPeriod_3_1.png" /> 6.2285<br />\
    <img src="styles/legend/25yrReturnPeriod_3_2.png" /> 12.4559<br />\
    <img src="styles/legend/25yrReturnPeriod_3_3.png" /> 18.6834<br />\
    <img src="styles/legend/25yrReturnPeriod_3_4.png" /> 24.9109<br />\
    <img src="styles/legend/25yrReturnPeriod_3_5.png" /> 31.1383<br />\
    <img src="styles/legend/25yrReturnPeriod_3_6.png" /> 37.3658<br />\
    <img src="styles/legend/25yrReturnPeriod_3_7.png" /> 43.1142<br />\
    <img src="styles/legend/25yrReturnPeriod_3_8.png" /> 47.9045<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/25yrReturnPeriod_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13396699.548349, 1627598.340575, 13411912.260482, 1656048.057899]
        })
    });
var lyr_50yrReturnPeriod_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '50-yr Return Period<br />\
    <img src="styles/legend/50yrReturnPeriod_4_0.png" /> 0.0010<br />\
    <img src="styles/legend/50yrReturnPeriod_4_1.png" /> 6.6932<br />\
    <img src="styles/legend/50yrReturnPeriod_4_2.png" /> 13.3853<br />\
    <img src="styles/legend/50yrReturnPeriod_4_3.png" /> 20.0775<br />\
    <img src="styles/legend/50yrReturnPeriod_4_4.png" /> 26.7697<br />\
    <img src="styles/legend/50yrReturnPeriod_4_5.png" /> 33.4618<br />\
    <img src="styles/legend/50yrReturnPeriod_4_6.png" /> 40.1540<br />\
    <img src="styles/legend/50yrReturnPeriod_4_7.png" /> 46.3314<br />\
    <img src="styles/legend/50yrReturnPeriod_4_8.png" /> 51.4792<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/50yrReturnPeriod_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13396699.548349, 1627598.340575, 13411912.260482, 1656048.057899]
        })
    });
var lyr_100yrReturnPeriod_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '100-yr Return Period<br />\
    <img src="styles/legend/100yrReturnPeriod_5_0.png" /> 0.0010<br />\
    <img src="styles/legend/100yrReturnPeriod_5_1.png" /> 7.1265<br />\
    <img src="styles/legend/100yrReturnPeriod_5_2.png" /> 14.2519<br />\
    <img src="styles/legend/100yrReturnPeriod_5_3.png" /> 21.3774<br />\
    <img src="styles/legend/100yrReturnPeriod_5_4.png" /> 28.5028<br />\
    <img src="styles/legend/100yrReturnPeriod_5_5.png" /> 35.6283<br />\
    <img src="styles/legend/100yrReturnPeriod_5_6.png" /> 42.7537<br />\
    <img src="styles/legend/100yrReturnPeriod_5_7.png" /> 49.3310<br />\
    <img src="styles/legend/100yrReturnPeriod_5_8.png" /> 54.8122<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/100yrReturnPeriod_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13396699.548349, 1627598.340575, 13411912.260482, 1656048.057899]
        })
    });
var group_FLOODPLAINMAPS = new ol.layer.Group({
                                layers: [lyr_25yrReturnPeriod_3,lyr_50yrReturnPeriod_4,lyr_100yrReturnPeriod_5,],
                                fold: 'close',
                                title: 'FLOODPLAIN MAPS'});

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_25yrReturnPeriod_3.setVisible(false);lyr_50yrReturnPeriod_4.setVisible(false);lyr_100yrReturnPeriod_5.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,group_FLOODPLAINMAPS];
