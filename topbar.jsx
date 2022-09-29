class Bar extends React.Component {
     clickButton1(){
        console.log("change to maincanvas");
        document.getElementById('codeEditor').style.visibility = 'hidden';
        document.getElementById('mainCanvas').style.visibility = 'visible';
        document.getElementById('Scene1').style.boxShadow = '0 0 4px white';
         document.getElementById('code1').style.boxShadow = '0 0 0 0 white';
    }
     clickButton2(){
        console.log("change to codeeditor");
        document.getElementById('codeEditor').style.visibility = 'visible';
        document.getElementById('mainCanvas').style.visibility = 'hidden';
        document.getElementById('code1').style.boxShadow = '0 0 4px white';
         document.getElementById('Scene1').style.boxShadow = '0 0 0 0 white';
    }
    //<!-- this id name must use unique key-->
    render() {
        return (
            <div id="topBar">
                <div class="bar"  onClick={this.clickButton1} id="Scene1"><div>Scene1</div> <div id="barclose">×</div></div>
                <div class="bar" onClick={this.clickButton2} id="code1"><div>code1.R</div> <div id="barclose">×</div></div>
            </div>
        );
    }
}
