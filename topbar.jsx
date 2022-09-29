class Bar extends React.Component {
     clickButton1(){
        console.log("change to maincanvas");
        document.getElementById('codeEditor').style.visibility = 'hidden';
        document.getElementById('mainCanvas').style.visibility = 'visible';  
    }
     clickButton2(){
        console.log("change to codeeditor");
        document.getElementById('codeEditor').style.visibility = 'visible';
        document.getElementById('mainCanvas').style.visibility = 'hidden';  
    }
    render() {
        return (
            <div id="topBar">
                <div class="bar"  onClick={this.clickButton1}><div>Scene1</div> <div id="barclose">×</div></div>
                <div class="bar" onClick={this.clickButton2}>code.R <div id="barclose">×</div></div>
            </div>
        );
    }
}
