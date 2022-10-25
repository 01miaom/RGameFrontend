/*
*using for test
*it will be delete later
*/
let object = [
{nodeClass: "scene", id: "scene1", name: "main scene",no: '0',positionx:2,positiony:0,positionz:0,scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube1", name: "cube1",no: '1',positionx:0,positiony:0,positionz:2,scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube2", name: "newcube",no: '2',positionx:0,positiony:2,positionz:0,scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "light", id: "light1", name: "light1",no: '3',positionx:2,positiony:0,positionz:0,scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
];

import * as THREE from "./viewhelper/three.module.js";
import { GUI } from "./viewhelper/lib.js";
import { OrbitControls } from "./viewhelper/OrbitControls.js";
import { OrbitControlsGizmo } from "./viewhelper/OrbitControlsGizmo.js";
import { TransformControls } from './Lib/TransformControls.js';
import { STLLoader } from './Lib/STLLoader.js';
import { DragControls } from './Lib/DragControls.js';

let cameraPersp, cameraOrtho, currentCamera;
let control, orbit, group;
let mesh, renderer, scene, camera, controls, controlsGizmo;

const mouse = new THREE.Vector2(), raycaster = new THREE.Raycaster();
const objects = [];
const windowResize

/*
*Load the workspace
*There may be multiple workspace page in here, such as Edit, Animation, Run
*/
let theProcess = setInterval(process,100);

if(localStorage.hasOwnProperty("add")==false){
    var obj = [];
       obj = JSON.stringify(obj); 
　　    localStorage.setItem("add", obj);
}

function process(){
if(document.getElementById( 'mainCanvas' )){
init()
windowResize = new ResizeObserver(resize).observe(document.getElementById( 'mainCanvas' ))
//window.onresize = resize;
//animate();
//editor()
clearInterval(theProcess);
setInterval(editor,1.0/60);
}
}

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
  document.getElementById('mainCanvas').addEventListener( 'click', onClick );
  document.getElementById('mainCanvas').addEventListener( 'touchstart', onTouch );// touch screen
  control = new TransformControls( camera, renderer.domElement );
  control.addEventListener( 'change', editor );
  control.addEventListener( 'dragging-changed', function ( event ) {
					orbit.enabled = ! event.value;
  } );
	
//drag gizmo
  controls = new DragControls( [ ... objects ], camera, renderer.domElement );
  controls.addEventListener( 'drag', render );

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
	
	//add group, use for test
	group = new THREE.Group();
	scene.add( group );

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
  objects.push( mesh );

  
  for(let i=0; i<object.length; i++){
      window[object[i].id] = new THREE.Mesh( geometry, material );
      window[object[i].id].position.set(object[i].positionx, object[i].positiony, object[i].positionz);
      scene.add(window[object[i].id]);
      objects.push( window[object[i].id] );
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

/*
*Add some simple objects
*Add the clickable attribute of the object (only in the Ediotr workspace)
*/

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
	    if(add[i].nodeClass=='sphere'){
            var geometry = new THREE.SphereGeometry( 0.5, 10, 10 );
            }
            if(add[i].nodeClass=='cube'){
            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            }
            if(add[i].nodeClass=='cylinder'){
            var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32);
            }
            if(add[i].nodeClass=='cone'){
            var geometry = new THREE.ConeGeometry( 0.5, 1, 32 );
            }
            /*if(add[i].nodeClass=='capsule'){
            var geometry = new THREE.CapsuleGeometry( 0.5, 1, 4, 8 );
            }*/
            if(add[i].nodeClass=='plane'){
            var geometry = new THREE.PlaneGeometry( 10, 10 );
            }
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
	    objects.push( window[add[i].id] );
        }
    }
    var obj = [];
    obj = JSON.stringify(obj);
    localStorage.setItem("add", obj);
	
	//add stl
	if(localStorage.hasOwnProperty("stl")==true){
　　    var tmpdata = localStorage.getItem("stl");
        localStorage.removeItem("stl");
        let loader = new STLLoader();
        console.log("a");
        var geometry = loader.parse( tmpdata);
        console.log(geometry);
        const material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200 } );
					const mesh = new THREE.Mesh( geometry, material );

					mesh.position.set( 0, 2, 0.6 );
					mesh.rotation.set(  - Math.PI / 2, 0,0 );
					mesh.scale.set( 0.5, 0.5, 0.5 );
					mesh.castShadow = true;
					mesh.receiveShadow = true;

					scene.add( mesh );
					objects.push( mesh );
	}
	//add stl finish 
    renderer.render( scene, camera );
}

//resize window when window change size
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


function onClick( event ) {
					mouse.x = ((event.clientX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth) * 2 - 1;
					mouse.y = -((event.clientY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight) * 2 + 1;

					raycaster.setFromCamera( mouse, camera );

					const intersections = raycaster.intersectObjects( objects, true );

					if ( intersections.length > 0 ) {
						const object = intersections[ 0 ].object;
   
                        			control.attach(object );
                        			scene.add( control );
		
					}else{
                        			control.detach(mesh);
                   			}

			}

function onTouch( event ) {
					mouse.x = ((event.targetTouches[0].pageX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth) * 2 - 1;
					mouse.y = -((event.targetTouches[0].pageY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight) * 2 + 1;

					raycaster.setFromCamera( mouse, camera );

					const intersections = raycaster.intersectObjects( objects, true );

					if ( intersections.length > 0 ) {
						const object = intersections[ 0 ].object;
   
                        			control.attach(object );
                        			scene.add( control );
		
					}else{
                        			control.detach(mesh);
                   			}

			}




function render() {
			renderer.render( scene, camera );
			}


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
