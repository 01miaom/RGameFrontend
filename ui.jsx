let codePage = ["codepage1"];//use for test

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
  constructor(props) {
        super(props);
        this.state={ 
        ref:1
    };
  }
    
  deleteCodePage =()=>{
        codePage.splice(0,1);
        
        this.setState({ref:2})//force react update
    }
   
    addCodePage =()=>{
        codePage.push("newCodePage");
        this.setState({ref:2})//force react update
    }
    render() {
        return (
            <div class="wrapper"> 
                    <HeadBar/> 
                    <TopBar deleteCodePage={this.deleteCodePage}/>
                    <LeftBar addCodePage={this.addCodePage}/>
                    <MainCanvas />
                    {codePage.map((codePage) => {
                    return <CodeEditor id={codePage}/>
                    })}
                    <Texture />
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
                    <Bar deleteCodePage={this.props.deleteCodePage}/>
            </div>
        );
    }
}

class MainCanvas extends React.Component {
    render() {
        return (
             <div id= "mainCanvas">
                    <iframe src="workspace.html" width='100%' height='100%'></iframe>
                </div>    
        );
    }
}

class CodeEditor extends React.Component {
    render() {
        return (
             <div id= {this.props.id} class="codeEditor">
                <iframe src="codeEditor.html" width='100%' height='100%' id="codeFrame"></iframe>
            </div>
            
        );
    }
}

class LeftBar extends React.Component {
    render() {
        return (
            <div id="leftBar">
                    <Shape addCodePage={this.props.addCodePage}/>
            </div>
        );
    }
}

class RightBar extends React.Component {
    drag(e) {
        let elementLeft = document.getElementById("rightBar").offsetLeft;
        let windowWidth = window.innerWidth;
        let mouseX, delta, middleRate, rightRate;
       

            mouseX = e.clientX;
            delta = Math.abs(elementLeft-mouseX);
            if(delta<10){
                document.onmousemove = function(e){
                    mouseX = event.clientX;
                    elementLeft = document.getElementById("rightBar").offsetLeft;
                    
                    
                    //delete event, if mouse leave the element
                    if(mouseX<elementLeft){
                        document.onmousemove=null;
                        console.log("leave")
                    }
                    
                    
                    middleRate = 100*(mouseX-40)/windowWidth;
                    rightRate = 100-3-middleRate;
                    
                    
                    document.getElementsByClassName('wrapper')[0].style.gridTemplateColumns="minmax(40px, 3vw)minmax(100px,"+ middleRate+"vw)minmax(30px, "+rightRate+"vw)";
                }     
            }
                
            document.onmouseup = function(){
                document.onmousemove=null;
            }
 
    }
    render() {
        return (
            <div id="rightBar" onMouseDown={this.drag}>
                <SearchBar />
            </div>
        );
    }
}

class Texture extends React.Component {
    render() {
        return (
            <div id="texture">
                <iframe loading="lazy" src="texture_demo.html" width='100%' height='100%'></iframe>
            </div>
        );
    }
}

ReactDOM.render(
<App name="rgame"/>, document.querySelector("#app"));






