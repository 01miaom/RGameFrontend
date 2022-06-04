
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
                    <CenterBar />
                    <DetailBar />
                    <BottonBarAssets />
                    <BottonBarAnimation />
                    <BottonBarConsole />
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
                    <Shape />
            </div>
        );
    }
}

class RightBar extends React.Component {
    render() {
        return (
            <div id="rightBar">
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(
<App name="rgame"/>, document.querySelector("#app"));






