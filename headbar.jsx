class File extends React.Component {
    render() {
        return (
        <div class="header">
			<ul class="header_ul">
				<li class="header_ul_file">File
					<ul class="header_ul_ul">
						<li>New</li>
						<li>Save</li>
						<li>Import</li>
                        <li>Export</li>
                        <li>Setting</li>
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
