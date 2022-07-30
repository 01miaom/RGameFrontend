let currentDocumentTree = [
    {father: ".", name:"texture", type:"Folder", id:"1", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"2", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Material", id:"3", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"2", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Video", id:"3", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"2", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Model", id:"3", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"2", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Image", id:"3", color:"#333",line:1}
];


function type2element(type){
    return "<"+type+" />"
}

function gen(){
let documentView = "";

for(let i=0;i<currentDocumentTree.length;i++){
    if(i%8==0) documentView+='<div id="line">'
    documentView+=type2element(currentDocumentTree[i].type);
    if(i%8==7) documentView+="</div>"
}

documentView+="</div>"
    console.log(1);
    if(document.getElementById("assetsPage")){
        console.log(2);
     document.getElementById("assetsPage").innerHTML=documentView;
    }
}




class BottonBarAssets extends React.Component {
    render() {
        return (
            <div id="assetsPage">
                <div id="line">
                <Material />
                <Material />
                <Image />
                <Material />
                <Movie />
                <Folder />
                <Material />
                <Video />
                <Material />
                <Material />
                <Model />
                <Material /> 
                    </div>
                <div id="line">
                <Material />
                <Material />
                <Video />
                </div>
            </div>
        );
    }
}



class BottonBarAnimation extends React.Component {
    render() {
        return (
            <div id="animationPage">
            </div>
        );
    }
}

class BottonBarConsole extends React.Component {
    render() {
        return (
            <div id="consolePage">
            </div>
        );
    }
}

