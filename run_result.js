
let object = [
{nodeClass: "scene", id: "scene1", name: "main scene",no: '0',positionx:'2',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube1", name: "cube1",no: '1',positionx:0,positiony:0,positionz:2,scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube2", name: "newcube",no: '2',positionx:'0',positiony:'2',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "light", id: "light1", name: "light1",no: '3',positionx:'2',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
];



import * as THREE from "./viewhelper/three.module.js";
import { STLLoader } from './Lib/STLLoader.js';
import { RGBELoader } from './Lib/RGBELoader.js';


let cameraPersp, cameraOrtho, currentCamera;
let control, orbit, group;
let mesh, renderer, scene, camera, controls, controlsGizmo;


const mouse = new THREE.Vector2(), raycaster = new THREE.Raycaster();
const objects = [];

let theProcess = setInterval(process,100);

//
    const params = {
				color: 0xe6e147,
				transmission: 0.95,
				opacity: 1,
				metalness: 0.05,
				roughness: 0.05,
				ior: 1.79,
				thickness: 0.01,
				specularIntensity: 1,
				specularColor: 0xffffff,
				envMapIntensity: 1,
				lightIntensity: 1,
				exposure: 1
			};
                const hdrEquirect = new RGBELoader()
				.setPath( './Lib/' )
				.load( 'royal_esplanade_1k.hdr', function () {

					hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;


				} );
                    

function process(){
if(document.getElementById( 'runresult' )){
init()
document.getElementsByTagName("canvas")[0].setAttribute("tabindex","0");
const observer = new ResizeObserver(resize).observe(document.getElementById( 'runresult' ))
clearInterval(theProcess);
setInterval(editor,1.0/60);
}
}

    
function init() {

    
  const container = document.getElementById( 'runresult' );
  renderer = new THREE.WebGLRenderer({ antialias: true });
  //renderer = new THREE.RaytracingRenderer();
  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setClearColor(new THREE.Color(0x4c4b4b));
  renderer.setPixelRatio( window.devicePixelRatio );
  container.appendChild( renderer.domElement );
  // scene
  scene = new THREE.Scene();
    
  
  // camera
  camera = new THREE.PerspectiveCamera( 95,  container.clientWidth/container.clientHeight , 0.1, 10000 );
  camera.position.set( 0, 2, 12 );

 
  // ambient light
  scene.add( new THREE.AmbientLight( 0x222222 ) );
  
  // directional light
  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 2,2, 0 );
  scene.add( light );

            //light
                const rectLight1 = new THREE.RectAreaLight( 0xff0000, 5, 4, 10 );
				rectLight1.position.set( - 5, 5, 5 );
				scene.add( rectLight1 );
                //scene.add( new RectAreaLightHelper( rectLight1 ) );
    
                const geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
				const matStdFloor = new THREE.MeshStandardMaterial( { color: 0xf1f1df, roughness: 0.1, metalness: 0 } );
				const mshStdFloor = new THREE.Mesh( geoFloor, matStdFloor );
				scene.add( mshStdFloor );
    
 
                const loader = new STLLoader();
    //stl with glass

				loader.load( './testmodel.stl', function ( geometry ) {
                    
               
                    
                const texture = new THREE.CanvasTexture( generateTexture() );
				texture.magFilter = THREE.NearestFilter;
				texture.wrapT = THREE.RepeatWrapping;
				texture.wrapS = THREE.RepeatWrapping;
				texture.repeat.set( 1, 3.5 );

					const material = new THREE.MeshPhysicalMaterial( {
					color: params.color,
					metalness: params.metalness,
					roughness: params.roughness,
					ior: params.ior,
					alphaMap: texture,
					envMap: hdrEquirect,
					envMapIntensity: params.envMapIntensity,
					transmission: params.transmission, // use material.transmission for glass materials
					//specularIntensity: params.specularIntensity,
					//specularColor: params.specularColor,
					opacity: params.opacity,
					side: THREE.DoubleSide,
					transparent: true
				} );

					const mesh = new THREE.Mesh( geometry, material );

					mesh.position.set( -6, 0, 0.6 );
					mesh.rotation.set(  - Math.PI / 2, 0,0 );
					mesh.scale.set( 0.5, 0.5, 0.5 );
                    //mesh.rotateX(90);
					mesh.castShadow = true;
					mesh.receiveShadow = true;

					scene.add( mesh );
                    objects.push( mesh );

				} );
    
    
  
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
  mesh.position.set(0, 0, 0);
  mesh.rotateY(45);
  mesh.position.z=0;
  scene.add( mesh );

    


}


function editor() {

  let add=JSON.parse(localStorage.getItem("add"));

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  
  // material
  var material = new THREE.MeshPhongMaterial( {
    color: 0x00ffff, 
    transparent: true,
    opacity: 0.7,
  });
    
    let item = localStorage.getItem("currentGizmo");
    
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
        }
    }
    var obj = [];
    obj = JSON.stringify(obj); 
    localStorage.setItem("add", obj);

    if(localStorage.hasOwnProperty("stl")==true){
　　    var tmpdata = localStorage.getItem("stl");
        localStorage.removeItem("stl");
        let loader = new STLLoader();
        var geometry = loader.parse( tmpdata);
        console.log(geometry);
        const material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200 } );
					const mesh = new THREE.Mesh( geometry, material );

					mesh.position.set( 0, 2, 0.6 );
					mesh.rotation.set(  - Math.PI / 2, 0,0 );
					mesh.scale.set( 0.5, 0.5, 0.5 );
                    //mesh.rotateX(90);
					mesh.castShadow = true;
					mesh.receiveShadow = true;

					scene.add( mesh );
       
    }

  renderer.render( scene, camera );
  
}

function resize() {
  const container = document.getElementById( 'runresult' );
  renderer.setSize( container.clientWidth, container.clientHeight );
  camera.aspect = ( container.clientWidth/container.clientHeight);
  camera.updateProjectionMatrix();
}


function generateTexture() {

				const canvas = document.createElement( 'canvas' );
				canvas.width = 2;
				canvas.height = 2;

				const context = canvas.getContext( '2d' );
				context.fillStyle = 'white';
				context.fillRect( 0, 1, 2, 1 );

				return canvas;

			}

export default {resize}


