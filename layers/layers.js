var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 0.676000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_100yr_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '100 yr<br />\
    <img src="styles/legend/100yr_2_0.png" /> 0.0010<br />\
    <img src="styles/legend/100yr_2_1.png" /> 7.1265<br />\
    <img src="styles/legend/100yr_2_2.png" /> 14.2519<br />\
    <img src="styles/legend/100yr_2_3.png" /> 21.3774<br />\
    <img src="styles/legend/100yr_2_4.png" /> 28.5028<br />\
    <img src="styles/legend/100yr_2_5.png" /> 35.6283<br />\
    <img src="styles/legend/100yr_2_6.png" /> 42.7537<br />\
    <img src="styles/legend/100yr_2_7.png" /> 49.3310<br />\
    <img src="styles/legend/100yr_2_8.png" /> 54.8122<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/100yr_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13396699.548349, 1627598.340575, 13411912.260482, 1656048.057899]
        })
    });
var lyr_50yr_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '50 yr<br />\
    <img src="styles/legend/50yr_3_0.png" /> 0.0010<br />\
    <img src="styles/legend/50yr_3_1.png" /> 6.6932<br />\
    <img src="styles/legend/50yr_3_2.png" /> 13.3853<br />\
    <img src="styles/legend/50yr_3_3.png" /> 20.0775<br />\
    <img src="styles/legend/50yr_3_4.png" /> 26.7697<br />\
    <img src="styles/legend/50yr_3_5.png" /> 33.4618<br />\
    <img src="styles/legend/50yr_3_6.png" /> 40.1540<br />\
    <img src="styles/legend/50yr_3_7.png" /> 46.3314<br />\
    <img src="styles/legend/50yr_3_8.png" /> 51.4792<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/50yr_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13396699.548349, 1627598.340575, 13411912.260482, 1656048.057899]
        })
    });
var lyr_25yr_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '25 yr<br />\
    <img src="styles/legend/25yr_4_0.png" /> 0.0010<br />\
    <img src="styles/legend/25yr_4_1.png" /> 6.2285<br />\
    <img src="styles/legend/25yr_4_2.png" /> 12.4559<br />\
    <img src="styles/legend/25yr_4_3.png" /> 18.6834<br />\
    <img src="styles/legend/25yr_4_4.png" /> 24.9109<br />\
    <img src="styles/legend/25yr_4_5.png" /> 31.1383<br />\
    <img src="styles/legend/25yr_4_6.png" /> 37.3658<br />\
    <img src="styles/legend/25yr_4_7.png" /> 43.1142<br />\
    <img src="styles/legend/25yr_4_8.png" /> 47.9045<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/25yr_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13396699.548349, 1627598.340575, 13411912.260482, 1656048.057899]
        })
    });
var format_COPINGCAPACITY_5 = new ol.format.GeoJSON();
var features_COPINGCAPACITY_5 = format_COPINGCAPACITY_5.readFeatures(json_COPINGCAPACITY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COPINGCAPACITY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COPINGCAPACITY_5.addFeatures(features_COPINGCAPACITY_5);
var lyr_COPINGCAPACITY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COPINGCAPACITY_5, 
                style: style_COPINGCAPACITY_5,
                popuplayertitle: 'COPING CAPACITY',
                interactive: true,
    title: 'COPING CAPACITY<br />\
    <img src="styles/legend/COPINGCAPACITY_5_0.png" /> Very Low<br />\
    <img src="styles/legend/COPINGCAPACITY_5_1.png" /> Low<br />\
    <img src="styles/legend/COPINGCAPACITY_5_2.png" /> Moderate<br />\
    <img src="styles/legend/COPINGCAPACITY_5_3.png" /> High<br />\
    <img src="styles/legend/COPINGCAPACITY_5_4.png" /> Very HIgh<br />' });
var format_EXPOSURE_6 = new ol.format.GeoJSON();
var features_EXPOSURE_6 = format_EXPOSURE_6.readFeatures(json_EXPOSURE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPOSURE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPOSURE_6.addFeatures(features_EXPOSURE_6);
var lyr_EXPOSURE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPOSURE_6, 
                style: style_EXPOSURE_6,
                popuplayertitle: 'EXPOSURE',
                interactive: true,
    title: 'EXPOSURE<br />\
    <img src="styles/legend/EXPOSURE_6_0.png" /> Very Low<br />\
    <img src="styles/legend/EXPOSURE_6_1.png" /> Low<br />\
    <img src="styles/legend/EXPOSURE_6_2.png" /> Moderate<br />\
    <img src="styles/legend/EXPOSURE_6_3.png" /> High<br />\
    <img src="styles/legend/EXPOSURE_6_4.png" /> Very High<br />' });
var format_VULNERABILITY_7 = new ol.format.GeoJSON();
var features_VULNERABILITY_7 = format_VULNERABILITY_7.readFeatures(json_VULNERABILITY_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VULNERABILITY_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VULNERABILITY_7.addFeatures(features_VULNERABILITY_7);
var lyr_VULNERABILITY_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VULNERABILITY_7, 
                style: style_VULNERABILITY_7,
                popuplayertitle: 'VULNERABILITY',
                interactive: true,
    title: 'VULNERABILITY<br />\
    <img src="styles/legend/VULNERABILITY_7_0.png" /> Very Low<br />\
    <img src="styles/legend/VULNERABILITY_7_1.png" /> Low<br />\
    <img src="styles/legend/VULNERABILITY_7_2.png" /> Moderate<br />\
    <img src="styles/legend/VULNERABILITY_7_3.png" /> High<br />\
    <img src="styles/legend/VULNERABILITY_7_4.png" /> Very High<br />' });
var format_HAZARD_8 = new ol.format.GeoJSON();
var features_HAZARD_8 = format_HAZARD_8.readFeatures(json_HAZARD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAZARD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAZARD_8.addFeatures(features_HAZARD_8);
var lyr_HAZARD_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAZARD_8, 
                style: style_HAZARD_8,
                popuplayertitle: 'HAZARD',
                interactive: true,
    title: 'HAZARD<br />\
    <img src="styles/legend/HAZARD_8_0.png" /> Very Low<br />\
    <img src="styles/legend/HAZARD_8_1.png" /> Low<br />\
    <img src="styles/legend/HAZARD_8_2.png" /> Moderate<br />\
    <img src="styles/legend/HAZARD_8_3.png" /> High<br />\
    <img src="styles/legend/HAZARD_8_4.png" /> Very High<br />' });
var format_FLOODRISKINDEXMAP_9 = new ol.format.GeoJSON();
var features_FLOODRISKINDEXMAP_9 = format_FLOODRISKINDEXMAP_9.readFeatures(json_FLOODRISKINDEXMAP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLOODRISKINDEXMAP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLOODRISKINDEXMAP_9.addFeatures(features_FLOODRISKINDEXMAP_9);
var lyr_FLOODRISKINDEXMAP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FLOODRISKINDEXMAP_9, 
                style: style_FLOODRISKINDEXMAP_9,
                popuplayertitle: 'FLOOD RISK INDEX MAP',
                interactive: true,
    title: 'FLOOD RISK INDEX MAP<br />\
    <img src="styles/legend/FLOODRISKINDEXMAP_9_0.png" /> Very High Flood Risk<br />\
    <img src="styles/legend/FLOODRISKINDEXMAP_9_1.png" />  High Flood Risk<br />\
    <img src="styles/legend/FLOODRISKINDEXMAP_9_2.png" /> Moderate Flood Risk<br />\
    <img src="styles/legend/FLOODRISKINDEXMAP_9_3.png" /> Low Flood Risk<br />\
    <img src="styles/legend/FLOODRISKINDEXMAP_9_4.png" /> Very Low Flood Risk<br />' });
var group_FloodplainMap = new ol.layer.Group({
                                layers: [lyr_100yr_2,lyr_50yr_3,lyr_25yr_4,],
                                fold: 'close',
                                title: 'Floodplain Map'});
var group_Terrain = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,],
                                fold: 'open',
                                title: 'Terrain'});

lyr_GoogleTerrain_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_100yr_2.setVisible(false);lyr_50yr_3.setVisible(false);lyr_25yr_4.setVisible(false);lyr_COPINGCAPACITY_5.setVisible(false);lyr_EXPOSURE_6.setVisible(false);lyr_VULNERABILITY_7.setVisible(false);lyr_HAZARD_8.setVisible(false);lyr_FLOODRISKINDEXMAP_9.setVisible(true);
var layersList = [group_Terrain,group_FloodplainMap,lyr_COPINGCAPACITY_5,lyr_EXPOSURE_6,lyr_VULNERABILITY_7,lyr_HAZARD_8,lyr_FLOODRISKINDEXMAP_9];
lyr_COPINGCAPACITY_5.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'adm4_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'h1': 'h1', 'h2': 'h2', 'E1': 'E1', 'E2': 'E2', 'V1': 'V1', 'C1': 'C1', 'C2': 'C2', 'E': 'E', 'H': 'H', 'V': 'V', 'C': 'C', 'R': 'R', 'R H': 'R H', 'R V': 'R V', 'R E': 'R E', 'R C': 'R C', 'R R': 'R R', });
lyr_EXPOSURE_6.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'adm4_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'h1': 'h1', 'h2': 'h2', 'E1': 'E1', 'E2': 'E2', 'V1': 'V1', 'C1': 'C1', 'C2': 'C2', 'E': 'E', 'H': 'H', 'V': 'V', 'C': 'C', 'R': 'R', 'R H': 'R H', 'R V': 'R V', 'R E': 'R E', 'R C': 'R C', 'R R': 'R R', });
lyr_VULNERABILITY_7.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'adm4_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'h1': 'h1', 'h2': 'h2', 'E1': 'E1', 'E2': 'E2', 'V1': 'V1', 'C1': 'C1', 'C2': 'C2', 'E': 'E', 'H': 'H', 'V': 'V', 'C': 'C', 'R': 'R', 'R H': 'R H', 'R V': 'R V', 'R E': 'R E', 'R C': 'R C', 'R R': 'R R', });
lyr_HAZARD_8.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'adm4_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'h1': 'h1', 'h2': 'h2', 'E1': 'E1', 'E2': 'E2', 'V1': 'V1', 'C1': 'C1', 'C2': 'C2', 'E': 'E', 'H': 'H', 'V': 'V', 'C': 'C', 'R': 'R', 'R H': 'R H', 'R V': 'R V', 'R E': 'R E', 'R C': 'R C', 'R R': 'R R', });
lyr_FLOODRISKINDEXMAP_9.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'Barangay', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'h1': 'h1', 'h2': 'h2', 'E1': 'E1', 'E2': 'E2', 'V1': 'V1', 'C1': 'C1', 'C2': 'C2', 'E': 'E', 'H': 'H', 'V': 'V', 'C': 'C', 'R': 'R', 'R H': 'R H', 'R V': 'R V', 'R E': 'R E', 'R C': 'R C', 'R R': 'R R', });
lyr_COPINGCAPACITY_5.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'h1': 'TextEdit', 'h2': 'TextEdit', 'E1': 'TextEdit', 'E2': 'TextEdit', 'V1': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'E': 'TextEdit', 'H': 'TextEdit', 'V': 'TextEdit', 'C': 'TextEdit', 'R': 'TextEdit', 'R H': 'TextEdit', 'R V': 'TextEdit', 'R E': 'TextEdit', 'R C': 'TextEdit', 'R R': 'TextEdit', });
lyr_EXPOSURE_6.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'h1': 'TextEdit', 'h2': 'TextEdit', 'E1': 'TextEdit', 'E2': 'TextEdit', 'V1': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'E': 'TextEdit', 'H': 'TextEdit', 'V': 'TextEdit', 'C': 'TextEdit', 'R': 'TextEdit', 'R H': 'TextEdit', 'R V': 'TextEdit', 'R E': 'TextEdit', 'R C': 'TextEdit', 'R R': 'TextEdit', });
lyr_VULNERABILITY_7.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'h1': 'TextEdit', 'h2': 'TextEdit', 'E1': 'TextEdit', 'E2': 'TextEdit', 'V1': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'E': 'TextEdit', 'H': 'TextEdit', 'V': 'TextEdit', 'C': 'TextEdit', 'R': 'TextEdit', 'R H': 'TextEdit', 'R V': 'TextEdit', 'R E': 'TextEdit', 'R C': 'TextEdit', 'R R': 'TextEdit', });
lyr_HAZARD_8.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'h1': 'TextEdit', 'h2': 'TextEdit', 'E1': 'TextEdit', 'E2': 'TextEdit', 'V1': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'E': 'TextEdit', 'H': 'TextEdit', 'V': 'TextEdit', 'C': 'TextEdit', 'R': 'TextEdit', 'R H': 'TextEdit', 'R V': 'TextEdit', 'R E': 'TextEdit', 'R C': 'TextEdit', 'R R': 'TextEdit', });
lyr_FLOODRISKINDEXMAP_9.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'h1': 'TextEdit', 'h2': 'TextEdit', 'E1': 'TextEdit', 'E2': 'TextEdit', 'V1': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'E': 'TextEdit', 'H': 'TextEdit', 'V': 'TextEdit', 'C': 'TextEdit', 'R': 'TextEdit', 'R H': 'TextEdit', 'R V': 'TextEdit', 'R E': 'TextEdit', 'R C': 'TextEdit', 'R R': 'TextEdit', });
lyr_COPINGCAPACITY_5.set('fieldLabels', {'adm1_psgc': 'hidden field', 'adm2_psgc': 'hidden field', 'adm3_psgc': 'hidden field', 'adm4_psgc': 'hidden field', 'adm4_en': 'hidden field', 'geo_level': 'hidden field', 'len_crs': 'hidden field', 'area_crs': 'hidden field', 'len_km': 'hidden field', 'area_km2': 'hidden field', 'h1': 'hidden field', 'h2': 'hidden field', 'E1': 'hidden field', 'E2': 'hidden field', 'V1': 'hidden field', 'C1': 'hidden field', 'C2': 'hidden field', 'E': 'hidden field', 'H': 'hidden field', 'V': 'hidden field', 'C': 'hidden field', 'R': 'hidden field', 'R H': 'hidden field', 'R V': 'hidden field', 'R E': 'hidden field', 'R C': 'hidden field', 'R R': 'hidden field', });
lyr_EXPOSURE_6.set('fieldLabels', {'adm1_psgc': 'hidden field', 'adm2_psgc': 'hidden field', 'adm3_psgc': 'hidden field', 'adm4_psgc': 'hidden field', 'adm4_en': 'hidden field', 'geo_level': 'hidden field', 'len_crs': 'hidden field', 'area_crs': 'hidden field', 'len_km': 'hidden field', 'area_km2': 'hidden field', 'h1': 'hidden field', 'h2': 'hidden field', 'E1': 'hidden field', 'E2': 'hidden field', 'V1': 'hidden field', 'C1': 'hidden field', 'C2': 'hidden field', 'E': 'hidden field', 'H': 'hidden field', 'V': 'hidden field', 'C': 'hidden field', 'R': 'hidden field', 'R H': 'hidden field', 'R V': 'hidden field', 'R E': 'hidden field', 'R C': 'hidden field', 'R R': 'hidden field', });
lyr_VULNERABILITY_7.set('fieldLabels', {'adm1_psgc': 'hidden field', 'adm2_psgc': 'hidden field', 'adm3_psgc': 'hidden field', 'adm4_psgc': 'hidden field', 'adm4_en': 'hidden field', 'geo_level': 'hidden field', 'len_crs': 'hidden field', 'area_crs': 'hidden field', 'len_km': 'hidden field', 'area_km2': 'hidden field', 'h1': 'hidden field', 'h2': 'hidden field', 'E1': 'hidden field', 'E2': 'hidden field', 'V1': 'hidden field', 'C1': 'hidden field', 'C2': 'hidden field', 'E': 'hidden field', 'H': 'hidden field', 'V': 'hidden field', 'C': 'hidden field', 'R': 'hidden field', 'R H': 'hidden field', 'R V': 'hidden field', 'R E': 'hidden field', 'R C': 'hidden field', 'R R': 'hidden field', });
lyr_HAZARD_8.set('fieldLabels', {'adm1_psgc': 'hidden field', 'adm2_psgc': 'hidden field', 'adm3_psgc': 'hidden field', 'adm4_psgc': 'hidden field', 'adm4_en': 'hidden field', 'geo_level': 'hidden field', 'len_crs': 'hidden field', 'area_crs': 'hidden field', 'len_km': 'hidden field', 'area_km2': 'hidden field', 'h1': 'hidden field', 'h2': 'hidden field', 'E1': 'hidden field', 'E2': 'hidden field', 'V1': 'hidden field', 'C1': 'hidden field', 'C2': 'hidden field', 'E': 'hidden field', 'H': 'hidden field', 'V': 'hidden field', 'C': 'hidden field', 'R': 'hidden field', 'R H': 'hidden field', 'R V': 'hidden field', 'R E': 'hidden field', 'R C': 'hidden field', 'R R': 'hidden field', });
lyr_FLOODRISKINDEXMAP_9.set('fieldLabels', {'adm1_psgc': 'hidden field', 'adm2_psgc': 'hidden field', 'adm3_psgc': 'hidden field', 'adm4_psgc': 'hidden field', 'adm4_en': 'inline label - visible with data', 'geo_level': 'hidden field', 'len_crs': 'hidden field', 'area_crs': 'hidden field', 'len_km': 'hidden field', 'area_km2': 'hidden field', 'h1': 'hidden field', 'h2': 'hidden field', 'E1': 'hidden field', 'E2': 'hidden field', 'V1': 'hidden field', 'C1': 'hidden field', 'C2': 'hidden field', 'E': 'hidden field', 'H': 'hidden field', 'V': 'hidden field', 'C': 'hidden field', 'R': 'hidden field', 'R H': 'hidden field', 'R V': 'hidden field', 'R E': 'hidden field', 'R C': 'hidden field', 'R R': 'hidden field', });
lyr_FLOODRISKINDEXMAP_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});