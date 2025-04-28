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
var format_EXPOSURE_3 = new ol.format.GeoJSON();
var features_EXPOSURE_3 = format_EXPOSURE_3.readFeatures(json_EXPOSURE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPOSURE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPOSURE_3.addFeatures(features_EXPOSURE_3);
var lyr_EXPOSURE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPOSURE_3, 
                style: style_EXPOSURE_3,
                popuplayertitle: 'EXPOSURE',
                interactive: true,
    title: 'EXPOSURE<br />\
    <img src="styles/legend/EXPOSURE_3_0.png" /> Very Low<br />\
    <img src="styles/legend/EXPOSURE_3_1.png" /> Low<br />\
    <img src="styles/legend/EXPOSURE_3_2.png" /> Moderate<br />\
    <img src="styles/legend/EXPOSURE_3_3.png" /> High<br />\
    <img src="styles/legend/EXPOSURE_3_4.png" /> Very High<br />' });
var group_FLOODPLAINMAPS = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'FLOODPLAIN MAPS'});

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_EXPOSURE_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_EXPOSURE_3];
lyr_EXPOSURE_3.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'Barangay', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'h1': 'h1', 'h2': 'h2', 'E1': 'E1', 'E2': 'E2', 'V1': 'V1', 'C1': 'C1', 'C2': 'C2', 'E': 'E', 'H': 'H', 'V': 'V', 'C': 'C', 'R': 'R', 'R H': 'R H', 'R V': 'R V', 'R E': 'Exposure Level', 'R C': 'R C', 'R R': 'R R', });
lyr_EXPOSURE_3.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'h1': 'TextEdit', 'h2': 'TextEdit', 'E1': 'TextEdit', 'E2': 'TextEdit', 'V1': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'E': 'TextEdit', 'H': 'TextEdit', 'V': 'TextEdit', 'C': 'TextEdit', 'R': 'TextEdit', 'R H': 'TextEdit', 'R V': 'TextEdit', 'R E': 'TextEdit', 'R C': 'TextEdit', 'R R': 'TextEdit', });
lyr_EXPOSURE_3.set('fieldLabels', {'adm1_psgc': 'hidden field', 'adm2_psgc': 'hidden field', 'adm3_psgc': 'hidden field', 'adm4_psgc': 'hidden field', 'adm4_en': 'inline label - visible with data', 'geo_level': 'hidden field', 'len_crs': 'hidden field', 'area_crs': 'hidden field', 'len_km': 'hidden field', 'area_km2': 'hidden field', 'h1': 'hidden field', 'h2': 'hidden field', 'E1': 'hidden field', 'E2': 'hidden field', 'V1': 'hidden field', 'C1': 'hidden field', 'C2': 'hidden field', 'E': 'hidden field', 'H': 'hidden field', 'V': 'hidden field', 'C': 'hidden field', 'R': 'hidden field', 'R H': 'hidden field', 'R V': 'hidden field', 'R E': 'inline label - visible with data', 'R C': 'hidden field', 'R R': 'hidden field', });
lyr_EXPOSURE_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});