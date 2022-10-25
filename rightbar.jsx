const node = [
{nodeClass: "scene", id: "scene1", name: "main scene",no: '0',positionx:'0',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube1", name: "cube1",no: '1',positionx:'0',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "cube", id: "cube2", name: "newcube",no: '2',positionx:'0',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
{nodeClass: "light", id: "light1", name: "light1",no: '3',positionx:'0',positiony:'0',positionz:'0',scalex:'1',scaley:'1',scalez:'1',rotationx:'0',rotationy:'0',rotationz:'0'},
];

function searchLite (object, keyWord) {
  return object.filter(function(obj) {
    return Object.keys(obj).some(function(key) {
      return obj[key].includes(keyWord);
    })
  });
}
var result = node;

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            content:'',
        }
    }
    inputChange = (e) => {
        const {name, value} = e.target;
        result=searchLite(node,value);
        console.log(result);
        this.setState({
            content:value
        })
    };
    render() {
        return (
            <div >
		<button id="drag"></button>
                <div id="searchplace">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
               <input id="search" type="text"
                                autoComplete="off" 
                                spellCheck="false" 
                                role="combobox" 
                                aria-live="polite" 
                                placeholder="search: object" 
                                useRef="search" 
                                name='content'
                                value = {this.state.content} 
                                onChange={this.inputChange}
                            />
                </div>
                <div id="tree">
                     <ul id="limitlist">
                         {
                        result.map((file,index) => <NodeTree i={index} value={index}/>)              
                        }
                         
                    </ul>
                </div>
            </div>
        );
    }
}

class NodeTree extends React.Component {
    clickbutton(i){
        console.log(i);
    }
    submenu(i){
    //window.oncontextmenu=function(e){
    //e.preventDefault();
    //console.log(i);
    for(let j=0; j<node.length;j++ ){
        if(document.getElementById('nodemenu'+j)!=null){
        document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
    }
    document.oncontextmenu = function(e){
        e.preventDefault();
    };
    document.getElementById(result[i].id).onmousedown = function(e){
    if(e.button==2){
    var evt = window.event || arguments[0];
    var menu=document.getElementById('nodemenu'+i);
    var container = document.getElementById('container');
    var rightedge =container.clientWidth-evt.clientX;
    var bottomedge =container.clientHeight-evt.clientY;          
    menu.style.left = container.scrollLeft + evt.clientX + "px";            
    menu.style.top = container.scrollTop + evt.clientY+ "px";
    menu.style.visibility = "visible";
        //}
            }
        }
    }
    coversubmenu(i){
    //this.setState({id: -1})
    window.onclick=function(e){
        for(let j=0; j<result.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        }
    }
    render() {
    let i = this.props.i; 
        return (
            <div>
                <li class= {result[i].nodeClass} ><button class="node" id={result[i].id} onMouseOver={(e)=>this.submenu(i)} onMouseOut={this.coversubmenu(i)} onClick={(e)=>this.clickbutton(i)}>{result[i].name}</button>
                </li>
                <NodeMenu i={i}/>
            </div>
            );
        }
}

class NodeMenu extends React.Component {
    print(i){
        for(let j=0; j<result.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        console.log(result[i].no,"delete");
    }
    copy(i){
        for(let j=0; j<result.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        console.log(result[i].no,"copy");
    }
    rename(i){
        for(let j=0; j<result.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        console.log(result[i].no,"rename");
    }
    render() {
        let i = this.props.i;
        return (
             <div id="container">
                <div id={"nodemenu"+i} style={{ width : '60px',padding: '10px',visibility : 'hidden',position : 'absolute',backgroundColor: '#222',color: 'aliceblue',fontSize: '10px',display: 'grid'}}>
	               <a onClick={(e)=>this.print(i)} id="nodesubmenu">
                       <svg id="operate" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                       delete</a>
	               <a onClick={(e)=>this.copy(i)} id="nodesubmenu">
                       <svg id="operate" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>
                       copy</a>
                   <a onClick={(e)=>this.rename(i)} id="nodesubmenu">
                       <svg id="operate" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                       rename</a>
                </div>
            </div>
        );
    }
}


/*
var  mousePlace = window.document.body; 
window.document.body.onmouseover =  function (event){
let mousePlace = event.target; 
let target = document.getElementById("scene");
    
if(target==mousePlace){
    mousePlace=0;
    console.log("t:",target)
    console.log("m",mousePlace);
    
window.oncontextmenu=function(e){
    e.preventDefault();
    var evt = window.event || arguments[0];
    var menu=document.getElementById('nodemenu');
    var container = document.getElementById('container');
    var rightedge =container.clientWidth-evt.clientX;
    var bottomedge =container.clientHeight-evt.clientY;          
    menu.style.left = container.scrollLeft + evt.clientX + "px";            
    menu.style.top = container.scrollTop + evt.clientY+ "px";
    menu.style.visibility = "visible";
    
}

window.onclick=function(e){
 	document.getElementById('nodemenu').style.visibility = 'hidden';
    }
}
}
*/
/*
window.onclick=function(e){
 	document.getElementById('nodemenu').style.visibility = 'hidden';
    }
    */




