// Created with Motiva Layama v1.6 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Mesura-Layama0000", a: "V012-Salon_Layama", p: new BABYLON.Vector3(212051, 120, -131238), l: new BABYLON.Vector3(212051, 120, -131237)});
   layamaCameras.push({n: "Mesura-Layama0001", a: "V012-Salon_Layama001", p: new BABYLON.Vector3(212051, 120, -130948), l: new BABYLON.Vector3(212051, 120, -130947)});
   layamaCameras.push({n: "Mesura-Layama0002", a: "V012-Salon_Layama002", p: new BABYLON.Vector3(211903, 120, -130377), l: new BABYLON.Vector3(211903, 120, -130376)});
   layamaCameras.push({n: "Mesura-Layama0003", a: "V012-Salon_Layama003", p: new BABYLON.Vector3(212340, 170, -130480), l: new BABYLON.Vector3(212340, 170, -130479)});
   layamaCameras.push({n: "Mesura-Layama0004", a: "V012-Salon_Layama004", p: new BABYLON.Vector3(212753, 170, -130622), l: new BABYLON.Vector3(212753, 170, -130621)});
   layamaCameras.push({n: "Mesura-Layama0005", a: "V012-Salon_Layama007", p: new BABYLON.Vector3(212055, 120, -130702), l: new BABYLON.Vector3(212055, 120, -130701)});
   layamaCameras.push({n: "Mesura-Layama0006", a: "V012-Salon_Layama008", p: new BABYLON.Vector3(212580, 170, -130203), l: new BABYLON.Vector3(212580, 170, -130202)});
   layamaCameras.push({n: "Mesura-Layama0007", a: "V012-Salon_Layama009", p: new BABYLON.Vector3(212497, 170, -130724), l: new BABYLON.Vector3(212497, 170, -130723)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 5;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getHideHotspotsAtStartup()
{
   return true;
}

function getLayamaHotspots()
{
   var layamaHotspots = new BABYLON.SmartArray(0);
   layamaHotspots.push({n: "Silla", m: 3, u: "https://capdell.com/producto/silla-stir/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(212102, 55.5313, -130603), d: 1500});
   layamaHotspots.push({n: "Mesa", m: 3, u: "https://capdell.com/producto/mesa-mesana/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(212111, 62.5362, -130499), d: 1500});
   layamaHotspots.push({n: "Sillon", m: 3, u: "https://capdell.com/producto/sillon-plum/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(211897, 56.261, -131029), d: 1500});
   layamaHotspots.push({n: "Mesita", m: 3, u: "https://capdell.com/producto/mesa-auxiliar-insula-4/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(212021, 20.3923, -131060), d: 1500});
   layamaHotspots.push({n: "Sillon2", m: 3, u: "https://capdell.com/producto/sofa-plum/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(212206, 59.7523, -131101), d: 1500});
   layamaHotspots.push({n: "Mesita2", m: 3, u: "https://capdell.com/producto/mesa-auxiliar-insula-3/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(212895, 41.8688, -130653), d: 1500});
   layamaHotspots.push({n: "Sillon3", m: 3, u: "https://capdell.com/producto/sillon-plum/", i: "./hotspots/boton2.png", p: new BABYLON.Vector3(212830, 94.2528, -130731), d: 1500});
   return layamaHotspots;
}

