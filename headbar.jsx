class File extends React.Component {
    openwindow(){
        document.getElementById('cover').style.display='block';
        document.getElementById('floatwindow').style.display='block';
    }
    fileImport(){
        document.getElementById('cover').style.display='block';
        document.getElementById('uploadwindow').style.display='block';
    }
    runProgram(){
        let userCode = document.getElementById('codeFrame').contentWindow.myCodeMirror.getValue();
        
        var script = document.createElement('script');
        script.type = 'module';
        script.appendChild(document.createTextNode(userCode));
        
        document.body.appendChild(script);
        
    }
    render() {
        return (
        <div class="header">
                <Setting />
		<Upload />
                <div id="cover" class="cover"></div>
			<ul class="header_ul">
				<li class="header_ul_file">File
					<ul class="header_ul_ul">
						<li>New</li>
						<li>Save</li>
						<li onClick={this.fileImport}>Import</li>
                        <li>Export</li>
                        <li onClick={this.openwindow}>Setting</li>
					</ul>
				</li>

				<li class="header_ul_edit">Edit
					<ul class="header_ul_ul">
						<li>Undo</li>
						<li>Redo</li>
						<li>Copy</li>
                        <li>Paste</li>
                        <li>Cut</li>
                        <li>Delete</li>
					</ul>
				</li>
				<li class="header_ul_project">Project
					<ul class="header_ul_ul">
						<li>Open</li>
						<li>New</li>
                        <li>Example</li>
					</ul>
				</li>
                <li class="header_ul_project">Help
                </li>
				<li class="header_ul_run" onClick={this.runProgram}>
		<svg id="run" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
                    Run
				</li>
			</ul>
                <img id="ico" src="./cat.png"/>
		</div>
        );
    }
}


class Setting extends React.Component {
    closewindow(){
        document.getElementById('cover').style.display='none';
        document.getElementById('floatwindow').style.display='none';       
    }
    render() {
        return (
            <div class="floatwindow" draggable="true" id="floatwindow">
                <div id="closeBar"><p id="closeWindow" onClick={this.closewindow}>×</p></div>
                <div id="floatPage">
                <div id="settingClass">General</div>
                <div id="settingPage">
                    <div id="settingElement">Dark Mode </div>
                    <hr class="breakLine"/>
                    <div id="settingElement">Language </div>
                    <hr class="breakLine"/>
                    <div id="settingElement">About </div>
                </div> 
                <div id="settingClass">Advanced</div>
                <div id="settingPage">
                    <div id="settingElement">Plugins </div>
                    <hr class="breakLine"/>
                    <div id="settingElement">Angle </div>
                    <hr class="breakLine"/>
                    <div id="settingElement">Unit </div>
                </div>
                <div id="settingClass">Code Page</div>
                <div id="settingPage">
                    <div id="settingElement">Font Size </div>
                    <hr class="breakLine"/>
                    <div id="settingElement">Heightlight Color</div>
                </div>
                </div>
            </div>
        );
    }
}

class Upload extends React.Component {
    closewindow(){
        document.getElementById('cover').style.display='none';
        document.getElementById('uploadwindow').style.display='none';       
    }
    changepic(){
        const content = document.querySelector('.content');
        const [file] = document.querySelector('input[type=file]').files;
        const reader = new FileReader();

        reader.addEventListener("load", () => {

            localStorage.setItem("stl", reader.result)
        }, false);

        if (file) {
            reader.readAsText(file);
        }
        
    }
    render() {
        return (
            <div class="floatwindow" draggable="true" id="uploadwindow">
                <div id="closeBar"><p id="closeWindow" onClick={this.closewindow}>×</p></div>
                <div id="floatPage">
                    <form id="upload-form" action="upload.php" method="post" enctype="multipart/form-data" >
                        <p id="hint">STL model:</p>
　　　                 <input type="file" id="file" onChange={this.changepic} />
                        <label for="file" id="uploadbutton">Click me</label>
                        <br />
                        <p class="content"></p>
                    </form>
                </div>
            </div>
        );
    }
}

