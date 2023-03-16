let currentDocumentTree = [
    {father: ".", name:"texture", type:"Folder", id:"1", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"2", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Material", id:"3", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"4", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Video", id:"5", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"6", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Model", id:"7", color:"#333",line:1},
    {father: ".", name:"test.jpg", type:"Image", id:"8", color:"#333",line:1},
    {father: "1", name:"test2.jpg", type:"Image", id:"9", color:"#333",line:1}
];



class BottonBarAssets extends React.Component {
    render() {
        return (
            <div id="assetsPage">
            <div id="line">
                {currentDocumentTree.map((currentDocumentTree)=>{
                        switch(currentDocumentTree.type){
                            case "Folder":
                                return<Folder key={currentDocumentTree.id} />;
                            case "Material":
                                return<Material key={currentDocumentTree.id } />;
                            case "Image":
                                return<Image key={currentDocumentTree.id } />;
                            case "Model":
                                return<Model key={currentDocumentTree.id } />;
                            case "Video":
                                return<Video key={currentDocumentTree.id } />;
                            case "Audio":
                                return<Audio key={currentDocumentTree.id } />;
                            default:
                                return null;
                        }
                    })}
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

