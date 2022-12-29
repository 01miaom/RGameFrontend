
class Bar extends React.Component {
     clickButton1(){
        console.log("change to maincanvas");
        document.getElementsByClassName('codeEditor')[0].style.visibility = 'hidden';
         document.getElementById('runResult0').style.visibility = 'hidden';
        document.getElementById('texture').style.visibility = 'hidden';
        document.getElementById('mainCanvas').style.visibility = 'visible';
        document.getElementById('Scene1').style.boxShadow = '0 0 4px white';
         document.getElementById('code1').style.boxShadow = '0 0 0 0 white';
         document.getElementById('texture1').style.boxShadow = '0 0 0 0 white';
    }
     clickButton2(){
        console.log("change to codeeditor");
        document.getElementsByClassName('codeEditor')[0].style.visibility = 'visible';
         document.getElementById('runResult0').style.visibility = 'hidden';
        document.getElementById('texture').style.visibility = 'hidden';
        document.getElementById('mainCanvas').style.visibility = 'hidden';
        document.getElementById('code1').style.boxShadow = '0 0 4px white';
         document.getElementById('Scene1').style.boxShadow = '0 0 0 0 white';
         document.getElementById('texture1').style.boxShadow = '0 0 0 0 white';
    }
    clickButton3(){
        console.log("change to texture");
        document.getElementById('texture').style.visibility = 'visible';
        document.getElementById('runResult0').style.visibility = 'hidden';
        document.getElementById('codeEditor').style.visibility = 'hidden';
        document.getElementById('mainCanvas').style.visibility = 'hidden';
        document.getElementById('code1').style.boxShadow = '0 0 0 0 white';
         document.getElementById('Scene1').style.boxShadow = '0 0 0 0 white';
        document.getElementById('texture1').style.boxShadow = '0 0 4px white';
    }
    clickButton4(){
        console.log("change to texture");
        document.getElementById('texture').style.visibility = 'hidden';
        document.getElementById('runResult0').style.visibility = 'visible';
        document.getElementById('codeEditor').style.visibility = 'hidden';
        document.getElementById('mainCanvas').style.visibility = 'hidden';
        document.getElementById('code1').style.boxShadow = '0 0 0 0 white';
         document.getElementById('Scene1').style.boxShadow = '0 0 0 0 white';
        document.getElementById('texture1').style.boxShadow = '0 0 4px white';
    }
    //<!-- this id name must use unique key-->
    render() {
        return (
            <div id="topBar">
                <div class="bar"  onClick={this.clickButton1} id="Scene1"><div>Scene1</div> <div id="barclose">×</div></div>

                {codePage.map(codePage => {
                    return <div class="bar" onClick={this.clickButton2} id="code1"><div>code1.R</div> <div id="barclose" onClick={this.props.deleteCodePage}>×</div></div>
                })}

                <div class="bar" onClick={this.clickButton3} id="texture1"><div>texture</div> <div id="barclose">×</div></div>

               <div class="bar" onClick={this.clickButton4} id="run"><div>run</div> <div id="barclose">×</div></div>
            </div>
        );
    }
}
