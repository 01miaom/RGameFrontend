
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
            <div id="topBar">
                    <button>Edit</button>
                    <button>Project</button>
                    <button>Run</button>
            </div>
        );
    }
}

class MainCanvas extends React.Component {
    render() {
        return (
            
             <div  id= "mainCanvas">
                <canvas></canvas>
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

