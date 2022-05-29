class File extends React.Component {
    openwindow(){
        document.getElementById('cover').style.display='block';
        document.getElementById('floatwindow').style.display='block';
    }
    render() {
        return (
        <div class="header">
                <Setting />
                <div id="cover" class="cover"></div>
			<ul class="header_ul">
				<li class="header_ul_file">File
					<ul class="header_ul_ul">
						<li>New</li>
						<li>Save</li>
						<li>Import</li>
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
						<li>Add</li>
					</ul>
				</li>
				<li class="header_ul_run">Run
				</li>
			</ul>
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
                <p id="closeWindow" onClick={this.closewindow}>x</p>
            </div>
        );
    }
}

