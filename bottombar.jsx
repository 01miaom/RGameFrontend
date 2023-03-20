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

function BottonBarConsole() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  useEffect(() => {
    const oldLog = console.log;
    console.log = function (...args) {
      setOutput((prevOutput) => [...prevOutput, args.join(' ')]);
      oldLog(...args);
    };

    const oldError = console.error;
    console.error = function (...args) {
      setOutput((prevOutput) => [...prevOutput, args.join(' ')]);
      oldError(...args);
    };

    const oldWarn = console.warn;
    console.warn = function (...args) {
      setOutput((prevOutput) => [...prevOutput, args.join(' ')]);
      oldWarn(...args);
    };

    return () => {
      console.log = oldLog;
      console.error = oldError;
      console.warn = oldWarn;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let result = eval(input);
      if (typeof result === 'undefined') {
        //result = 'undefined';
      }
      setOutput((prevOutput) => [...prevOutput, result]);
    } catch (error) {
      console.error(error.message);
    }
    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
        return (
            <div id="consolePage">
                {output.map((item, index) => (
                    <div key={index} id="consoleOutput">{item}</div>
                ))}
            <form onSubmit={handleSubmit}>
                <div id="consoleTag">(base) user@RGame ~ % 
                <input type="text" id="consoleInput" value={input} onChange={handleChange} /></div>
                <button type="submit" id="consoleButton"></button>
            </form>
            </div>
        );
}

