let object = [
{nodeClass: "scene", id: "scene1", name: "main scene",no: '0',positionx:'2',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube1", name: "cube1",no: '1',positionx:'0',positiony:'0',positionz:'2',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube2", name: "newcube",no: '2',positionx:'0',positiony:'2',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "light", id: "light1", name: "light1",no: '3',positionx:'2',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
];

if(localStorage.hasOwnProperty("add")==false){
    var obj = [];
       obj = JSON.stringify(obj); 
　　    localStorage.setItem("add", obj);
}

import * as THREE from "./viewhelper/three.module.js";
import { GUI } from "./viewhelper/lib.js";

import { OrbitControls } from "./viewhelper/OrbitControls.js";
import { OrbitControlsGizmo } from "./viewhelper/OrbitControlsGizmo.js";
import { TransformControls } from './Lib/TransformControls.js';
import { STLLoader } from './Lib/STLLoader.js';

let cameraPersp, cameraOrtho, currentCamera;
let control, orbit;
let mesh, renderer, scene, camera, controls, controlsGizmo;

setTimeout(function() { init(); }, 1000); 
window.onresize = resize;
//animate();
setInterval(editor,1.0/60);


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

  //drag control
  orbit = new OrbitControls( camera, renderer.domElement );
				orbit.update();
				orbit.addEventListener( 'change', editor );
  control = new TransformControls( camera, renderer.domElement );
  control.addEventListener( 'change', editor );
  control.addEventListener( 'dragging-changed', function ( event ) {
					orbit.enabled = ! event.value;
  } );

  // Obit Controls Gizmo
  controlsGizmo = new OrbitControlsGizmo(orbit, { size: 100, padding: 8 });

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
  control.attach( mesh );
  scene.add( control );
  
  for(let i=0; i<object.length; i++){
      window[object[i].id] = new THREE.Mesh( geometry, material );
      window[object[i].id].position.set(object[i].positionx, object[i].positiony, object[i].positionz);
      scene.add(window[object[i].id]);
  }

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
  orbit.update();
}

function editor() {
  let add=JSON.parse(localStorage.getItem("add"));
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial( {
    color: 0x00ffff, 
    transparent: true,
    opacity: 0.7,
  });
    if(add.length>0){
        for(let i=0; i<add.length; i++){
            window[add[i].id] = new THREE.Mesh( geometry, material );
            window[add[i].id].position.set(
                add[i].positionx,
                add[i].positiony,
                add[i].positionz);
            window[add[i].id].scale.set(
                add[i].scalex,
                add[i].scaley,
                add[i].scalez);
            window[add[i].id].rotation.set(
                add[i].rotationx,
                add[i].rotationy,
                add[i].rotationz);
            scene.add(window[add[i].id]);
        }
    }
    var obj = [];
    obj = JSON.stringify(obj);
    localStorage.setItem("add", obj);
    renderer.render( scene, camera );
}

function resize() {
    const container = document.getElementById( 'mainCanvas' );
  renderer.setSize( container.clientWidth, container.clientHeight );
  camera.aspect = ( container.clientWidth/container.clientHeight);
  camera.updateProjectionMatrix();
}

window.addEventListener( 'keydown', function ( event ) {

					switch ( event.keyCode ) {

						case 81: // Q
							control.setSpace( control.space === 'local' ? 'world' : 'local' );
							break;

						case 16: // Shift
							control.setTranslationSnap( 100 );
							control.setRotationSnap( THREE.MathUtils.degToRad( 15 ) );
							control.setScaleSnap( 0.25 );
							break;

						case 87: // W
							control.setMode( 'translate' );
							break;

						case 69: // E
							control.setMode( 'rotate' );
							break;

						case 82: // R
							control.setMode( 'scale' );
							break;

						case 67: // C
							const position = currentCamera.position.clone();

							currentCamera = currentCamera.isPerspectiveCamera ? cameraOrtho : cameraPersp;
							currentCamera.position.copy( position );

							orbit.object = currentCamera;
							control.camera = currentCamera;

							currentCamera.lookAt( orbit.target.x, orbit.target.y, orbit.target.z );
							onWindowResize();
							break;

						case 86: // V
							const randomFoV = Math.random() + 0.1;
							const randomZoom = Math.random() + 0.1;

							cameraPersp.fov = randomFoV * 160;
							cameraOrtho.bottom = - randomFoV * 500;
							cameraOrtho.top = randomFoV * 500;

							cameraPersp.zoom = randomZoom * 5;
							cameraOrtho.zoom = randomZoom * 5;
							onWindowResize();
							break;

						case 187:
						case 107: // +, =, num+
							control.setSize( control.size + 0.1 );
							break;

						case 189:
						case 109: // -, _, num-
							control.setSize( Math.max( control.size - 0.1, 0.1 ) );
							break;

						case 88: // X
							control.showX = ! control.showX;
							break;

						case 89: // Y
							control.showY = ! control.showY;
							break;

						case 90: // Z
							control.showZ = ! control.showZ;
							break;

						case 32: // Spacebar
							control.enabled = ! control.enabled;
							break;

						case 27: // Esc
							control.reset();
							break;
					}
} );


window.addEventListener( 'keyup', function ( event ) {

					switch ( event.keyCode ) {

						case 16: // Shift
							control.setTranslationSnap( null );
							control.setRotationSnap( null );
							control.setScaleSnap( null );
							break;
					}
				} );


export default {resize}


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
