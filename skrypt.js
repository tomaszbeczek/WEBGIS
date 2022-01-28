require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/widgets/Measurement",
    "esri/widgets/Search"
], function(Map, MapView, FeatureLayer, BasemapGallery, Expand, LayerList, Legend, Measurement, Search) {

    const layer = new FeatureLayer({
        url: "https://services9.arcgis.com/XzFo5ArWiIwKyBgo/arcgis/rest/services/Lokale/FeatureServer"
        
    });

    const map1 = new Map ({
        basemap: "topo-vector",
        layers: [layer]
    });

    const view = new MapView({
        map: map1,
        container: "mapDiv",
        zoom: 12,
        center: [22.55, 51.22]
    });

    layer.popupTemplate = {
        title: "nazwa lokalu: {Nazwa}",
        content: "<p>adres: {Adres}</p>" + "<p>rodzaj jedzenia: {Rodzaj}</p>"+ "<p>Ocena (wg Google Maps): {Ocena}</p>" + "<p>{Zdjęcia i pliki}</p>",
    };

    const basemapGalleryWg = new BasemapGallery({
        view: view
    });

    const expWg = new Expand({
        view: view,
        content: basemapGalleryWg
    });

    view.ui.add(expWg, {
        position: "top-right"
    });

    let layerList = new LayerList({
        view: view
    });

    view.ui.add(layerList, {
        position: "top-left"
    });

    let legend = new Legend({
        view: view
    });

    view.ui.add(legend, "bottom-right");

    const measurement = new Measurement({
        view: view,
        activeTool: "distance"
    });

    view.ui.add(measurement, "top-right");

    const searchWidget = new Search({
        view: view
    });
    
    view.ui.add(searchWidget, {
        position: "top-right",
        index: 2
    });

    let pol = document.getElementById("pol")
        pol.addEventListener("click", function() {
            view.center = [22.551019, 51.238201],
            view.zoom = 20;
    });
    
    let amer = document.getElementById("amer")
        amer.addEventListener("click", function() {
            view.center = [22.549246, 51.246024],
            view.zoom = 20;
    });

    let wlos = document.getElementById("wlos")
        wlos.addEventListener("click", function() {
            view.center = [22.568782, 51.248815],
            view.zoom = 20;
    });
    
    let taj = document.getElementById("taj")
        taj.addEventListener("click", function() {
            view.center = [22.528167, 51.237732],
            view.zoom = 20;
    });

    let kaw = document.getElementById("kaw")
        kaw.addEventListener("click", function() {
            view.center = [22.553494, 51.247706],
            view.zoom = 20;
    });

    let bar = document.getElementById("bar")
        bar.addEventListener("click", function() {
            view.center = [22.567523, 51.244280],
            view.zoom = 20;
    });
})

