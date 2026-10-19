var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_BATAS_BANDUNGAN_1 = new ol.format.GeoJSON();
var features_BATAS_BANDUNGAN_1 = format_BATAS_BANDUNGAN_1.readFeatures(json_BATAS_BANDUNGAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_BANDUNGAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_BANDUNGAN_1.addFeatures(features_BATAS_BANDUNGAN_1);
var lyr_BATAS_BANDUNGAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_BANDUNGAN_1, 
                style: style_BATAS_BANDUNGAN_1,
                popuplayertitle: 'BATAS_BANDUNGAN',
                interactive: true,
                title: '<img src="styles/legend/BATAS_BANDUNGAN_1.png" /> BATAS_BANDUNGAN'
            });

lyr_GoogleSatelit_0.setVisible(true);lyr_BATAS_BANDUNGAN_1.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_BATAS_BANDUNGAN_1];
lyr_BATAS_BANDUNGAN_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATAS_BANDUNGAN_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BATAS_BANDUNGAN_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BATAS_BANDUNGAN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});