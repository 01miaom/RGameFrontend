import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";
import { GUI } from "./viewhelper/lib.js";

import { OrbitControls } from "./viewhelper/OrbitControls.js";
import { OrbitControlsGizmo } from "./viewhelper/OrbitControlsGizmo.js";

var mesh, renderer, scene, camera, controls, controlsGizmo;

setTimeout(function() { init(); }, 1000); 
animate();

function init() {

  // renderer
     const container = document.getElementById( 'mainCanvas' );
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setClearColor(new THREE.Color(0x4c4b4b));
  renderer.setPixelRatio( window.devicePixelRatio );
  container.appendChild( renderer.domElement );
  // scene
  scene = new THREE.Scene();
  
  // camera
  camera = new THREE.PerspectiveCamera( 45,  container.clientWidth/container.clientHeight , 0.1, 10000 );
  camera.position.set( 15, 12, 12 );

  // Orbit Controls
  controls = new OrbitControls( camera, renderer.domElement );

  // Obit Controls Gizmo
  controlsGizmo = new OrbitControlsGizmo(controls, { size: 100, padding: 8 });

  // Add the Gizmo to the document
    container.appendChild( controlsGizmo.domElement );

  // ambient light
  scene.add( new THREE.AmbientLight( 0x222222 ) );
  
  // directional light
  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 2,2, 0 );
  scene.add( light );

  // axes Helper
  const axesHelper = new THREE.AxesHelper( 15 );
  scene.add( axesHelper );

  // Grid Helper
  scene.add(new THREE.GridHelper(10, 10, "#666666", "#222222"));

  // geometry
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  
  // material
  var material = new THREE.MeshPhongMaterial( {
    color: 0x00ffff, 
    transparent: true,
    opacity: 0.7,
  });
  
  // mesh
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0, 0.5, 0);
  scene.add( mesh );

  // GUI
  //const gui = new GUI();
  //gui.add(controls, 'enabled').name("Enable Orbit Controls");
  //gui.add(controlsGizmo, 'lock').name("Lock Gizmo");
  //gui.add(controlsGizmo, 'lockX').name("Lock Gizmo's X Axis");
//  gui.add(controlsGizmo, 'lockY').name("Lock Gizmo's Y Axis");

}

function animate() {

  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();

}

function resize() {
  renderer.setSize( container.clientWidth,container.clientHeight );
  camera.aspect = ( container.clientWidth/container.clientHeight);
  camera.updateProjectionMatrix();
}

window.onresize = resize;





/*

window.onresize=function(){
    renderer.setSize(container.clientWidth, container.clientHeight);
    let k=container.clientWidth/container.clientHeight;
    //camera.left=-s*k;
    //camera.right=s*k;
    //camera.top=s;
    //camera.bottom=-s;
    //
    camera.aspect=k;
    camera.updateProjectionMatrix();
}
*/
