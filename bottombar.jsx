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



class BottonBarAssets extends React.Component {
    render() {
        return (
            <div id="assetsPage">
                <div id="line">
                <Material />
                <Material />
                <Image />
                <Material />
                <Audio />
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

