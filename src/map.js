
 
 (function() {
    var thunderforestAttributions = [
        'Tiles &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>',
        ol.source.OSM.ATTRIBUTION
    ];
     
      var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Group({
                'title': 'Uydu Görüntüleri',
                layers: [
                    new ol.layer.Tile({
                        title: 'Stamen - Water color',
                        type: 'base',
                        visible:false,
                        source: new ol.source.Stamen({
                            layer: 'watercolor'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Stamen - Toner',
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'toner'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Thunderforest - OpenCycleMap',
                        type: 'base',
                        visible: false,
                        source: new ol.source.OSM({
                            url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
                            attributions: thunderforestAttributions
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Thunderforest - Outdoors',
                        type: 'base',
                        visible: false,
                        source: new ol.source.OSM({
                            url: 'http://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',
                            attributions: thunderforestAttributions
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Thunderforest - Landscape',
                        type: 'base',
                        visible: false,
                        source: new ol.source.OSM({
                            url: 'http://{a-c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
                            attributions: thunderforestAttributions
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Thunderforest - Transport',
                        type: 'base',
                        visible: false,
                        source: new ol.source.OSM({
                            url: 'http://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
                            attributions: thunderforestAttributions
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Thunderforest - Transport Dark',
                        type: 'base',
                        visible: false,
                        source: new ol.source.OSM({
                            url: 'http://{a-c}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png',
                            attributions: thunderforestAttributions
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'OSM',
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    })
                ]
            }),
        
        ],

        view: new ol.View({
            center: ol.proj.transform([36, 40], 'EPSG:4326', 'EPSG:3857'),
            zoom: 6
        })
    });
    
   var map1 = new ol.Map({
        layers: [
                
                new ol.layer.Group({
                // A layer must have a title to appear in the layerswitcher
                title: 'Tarihler',
                // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
                // collapsible
                fold: 'open',
                layers: [
                    new ol.layer.Image({
                                title: '28 Eylül 2007',
                                source: new ol.source.ImageWMS({
                                     ratio: 1,
                                   url: "http://localhost:8080/geoserver/gtu_proje/wms",
                                    params: {'LAYERS': 'show:0',
                                    LAYERS: "gtu_proje:A2007289", },
                                    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [20,34936285326488, 29,695898092640064, 53,49777973326088, 48,16870006910842]
                                })
                            }),
                    new ol.layer.Image({
                                // A layer must have a title to appear in the layerswitcher
                               title: '21 Mart 2007',
                                source: new ol.source.ImageWMS({
                                     ratio: 1,
                                   url: "http://localhost:8080/geoserver/gtu_proje/wms",
                                    params: {'LAYERS': 'show:0',
                                    LAYERS: "gtu_proje:A2007321", },
                                    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [25,668508999, 35,8084193, 44,817931, 42,1047857]
                                        })
                            }),
                                   
 
                              new ol.layer.Image({
                                // A layer must have a title to appear in the layerswitcher
                                title: '05 Mart 2007',
                                source: new ol.source.ImageWMS({
                                     ratio: 1,
                                   url: "http://localhost:8080/geoserver/gtu_proje/wms",
                                    params: {'LAYERS': 'show:0',
                                    LAYERS: "gtu_proje:A2007305", },
                                    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [25,668508999, 35,8084193, 44,817931, 42,1047857]
                                })
                            })
                            
                        ]
                    })
                           
        ],
        
    });

    var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });
    var toc1=document.getElementById("canberk");
    ol.control.LayerSwitcher.renderPanel(map1, toc1); 
    var toc = document.getElementById("layers");
    ol.control.LayerSwitcher.renderPanel(map, toc);
    map1.addControl(sidebar);
    map.addControl(sidebar);
    









})();






   














        

  




