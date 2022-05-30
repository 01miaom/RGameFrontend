
const {useMatch, useParams, useLocation} = ReactRouterDOM;
const {BrowserRouter, Routes, Route, Link} = ReactRouterDOM;

class App extends React.Component {
render() {
return (
<> 
    <React.StrictMode>
  <BrowserRouter>
      <div>
      <Routes>
      	<Route path="/RGameFrontend/" element={<Ui/>} />//fix
      </Routes>
      </div>
    </BrowserRouter>
    </React.StrictMode>
</>
        );
    }
}

//export
class Ui extends React.Component {
    render() {
        return (
            <div class="wrapper"> 
                    <HeadBar/> 
                    <TopBar />
                    <LeftBar/>
                    <MainCanvas />
                    <RightBar />
                    <CentreBar />
                    <DetailBar />
                    <ButtonBar />
            </div>
        );
    }
}

class HeadBar extends React.Component {
    render() {
        return (
            <div id="headBar">
                    <File />
            </div>
        );
    }
}

class TopBar extends React.Component {
    render() {
        return (
            <div id="topBarOut">
                    <Bar />
            </div>
        );
    }
}

class MainCanvas extends React.Component {
    render() {
        return (
             <div id= "mainCanvas">
            </div>
            
        );
    }
}

class LeftBar extends React.Component {
    render() {
        return (
            <div id="leftBar">
                    <button>Edit</button>
                <br/>
                    <button>cube</button>
                <br/>
                    <button>Run</button>  
            </div>
        );
    }
}

class RightBar extends React.Component {
    render() {
        return (
            <div id="rightBar">
            </div>
        );
    }
}

class DetailBar extends React.Component {
    render() {
        return (
            <div id="detailBar">
            </div>
        );
    }
}

class CentreBar extends React.Component {
    render() {
        return (
            <div id="centreBar">
            </div>
        );
    }
}


class ButtonBar extends React.Component {
    render() {
        return (
            <div id="buttonBar">
            </div>
        );
    }
}



ReactDOM.render(
<App name="rgame"/>, document.querySelector("#app"));

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
            const container = document.getElementById( 'mainCanvas' );
			renderer.setSize( container.clientWidth, container.clientHeight);
          
          //const stats = new Stats();
			//container.appendChild( stats.dom );
            container.appendChild( renderer.domElement );
            //document.body.appendChild( renderer.domElement );
			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

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
