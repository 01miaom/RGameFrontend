const node = [
{nodeClass: "scene", id: "scene1", name: "main scene"},
{nodeClass: "cube", id: "cube1", name: "cube1"},
{nodeClass: "cube", id: "cube2", name: "newcube"},
{nodeClass: "light", id: "light1", name: "light1"},

];

class SearchBar extends React.Component {
    render() {
        return (
            <div >
                <div id="searchplace">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
               <input id="search" type="text" name="input"/>
                </div>
                <div id="tree">
                     <ul id="limitlist">
                         {node.map((file,index) => <NodeTree i={index} key={index}/>)}
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
    document.getElementById(node[i].id).onmousedown = function(e){
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
        for(let j=0; j<node.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        }
    }
    render() {
    let i = this.props.i; 
        return (
            <div>
                <li class= {node[i].nodeClass} ><button class="node" id={node[i].id} onMouseOver={(e)=>this.submenu(i)} onMouseOut={this.coversubmenu(i)} onClick={(e)=>this.clickbutton(i)}>{node[i].name}</button>
                </li>
                <NodeMenu i={i}/>
            </div>
            );
        }
}

class NodeMenu extends React.Component {
    print(i){
        for(let j=0; j<node.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        console.log(i,"delete");
    }
    copy(i){
        for(let j=0; j<node.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        console.log(i,"copy");
    }
    rename(i){
        for(let j=0; j<node.length;j++ ){
            document.getElementById('nodemenu'+j).style.visibility = 'hidden';
        }
        console.log(i,"rename");
    }
    render() {
        let i = this.props.i;
        return (
             <div id="container">
                <div id={"nodemenu"+i} style={{ width : '60px',padding: '10px',visibility : 'hidden',position : 'absolute',backgroundColor: '#222',color: 'aliceblue',fontSize: '10px',display: 'grid'}}>
	               <a onClick={(e)=>this.print(i)} id="nodesubmenu">delete</a>
	               <a onClick={(e)=>this.copy(i)} id="nodesubmenu">copy</a>
                   <a onClick={(e)=>this.rename(i)} id="nodesubmenu">rename</a>
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




