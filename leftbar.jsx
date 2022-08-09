class Shape extends React.Component {
    createCube(){
        var obj = [{nodeClass: "cube", id: "scene1", name: "main scene",no: '0',positionx:0,positiony:6,positionz:0,scalex:1,scaley:1,scalez:1,rotationx:0,rotationy:0,rotationz:0},];
       obj = JSON.stringify(obj);
　　    localStorage.setItem("add", obj);
    }
    createSphere(){
        var obj = [{nodeClass: "sphere", id: "scene1", name: "main scene",no: '0',positionx:4,positiony:6,positionz:0,scalex:1,scaley:1,scalez:1,rotationx:0,rotationy:0,rotationz:0},];
       obj = JSON.stringify(obj);
　　    localStorage.setItem("add", obj);
    }
    createCylinder(){
        var obj = [{nodeClass: "cylinder", id: "scene1", name: "main scene",no: '0',positionx:4,positiony:6,positionz:2,scalex:1,scaley:1,scalez:1,rotationx:0,rotationy:0,rotationz:0},];
       obj = JSON.stringify(obj);
　　    localStorage.setItem("add", obj);
    }
    createCone(){
        var obj = [{nodeClass: "cone", id: "scene1", name: "main scene",no: '0',positionx:6,positiony:6,positionz:2,scalex:1,scaley:1,scalez:1,rotationx:0,rotationy:0,rotationz:0},];
       obj = JSON.stringify(obj);
　　    localStorage.setItem("add", obj);
    }
    createCapsule(){
        var obj = [{nodeClass: "capsule", id: "scene1", name: "main scene",no: '0',positionx:6,positiony:6,positionz:6,scalex:1,scaley:1,scalez:1,rotationx:0,rotationy:0,rotationz:0},];
       obj = JSON.stringify(obj);
　　    localStorage.setItem("add", obj);
    }
    createPlane(){
        var obj = [{nodeClass: "plane", id: "scene1", name: "main scene",no: '0',positionx:6,positiony:0,positionz:6,scalex:1,scaley:1,scalez:1,rotationx:-1.5708,rotationy:0,rotationz:0},];
       obj = JSON.stringify(obj);
　　    localStorage.setItem("add", obj);
    }
    render() {
        return (
              <div class="header">
			<ul class="left_ul">
				<li class="left_ul_cube">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
                    
					<ul class="left_ul_ul">
						<li class="subcat" onClick={this.createCube}>cube</li>
						<li class="subcat" onClick={this.createSphere}>sphere</li>
						<li class="subcat" onClick={this.createCylinder}>cylinder</li>
                        <li class="subcat" onClick={this.createCone}>cone</li>
                        <li class="subcat" onClick={this.createPlane}>plane</li>
                        <li class="subcat">text</li>
					</ul>
				</li>

				<li class="left_ul_script">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg>
                    
	
				</li>
				<li class="left_ul_light">
                    
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg>
                    
					<ul class="left_ul_ul">
						<li class="subcat">Point</li>
						<li class="subcat">Ambient</li>
                        <li class="subcat">envir</li>
					</ul>
				</li>
                <li class="left_ul_physical">
                    
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bounding-box-circles" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>    
                    
                <ul class="left_ul_ul">
						<li class="subcat">cube</li>
						<li class="subcat">sphere</li>
						<li class="subcat">cylinder</li>
                        <li class="subcat">plane</li>
					</ul>
				</li>
                <li class="left_ul_camera">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
                    
                <ul class="left_ul_ul">
						<li class="subcat">ortho</li>
						<li class="subcat">Perspe</li>
					</ul>
				</li>
                <li class="left_ul_sprite">
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
</svg>
                    
                      <ul class="left_ul_ul">
						<li class="subcat">sprite</li>
						<li class="subcat">audio</li>
					</ul>
				</li>
                <li class="left_ul_control">
                    
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dpad" viewBox="0 0 16 16">
  <path d="m7.788 2.34-.799 1.278A.25.25 0 0 0 7.201 4h1.598a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12h1.598a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0ZM3.617 9.01 2.34 8.213a.25.25 0 0 1 0-.424l1.278-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.383.212Zm10.043-.798-1.277.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0h-3ZM6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 11.5 6h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 4.5 10h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 6 4.5v-3Z"/>
</svg>   
                    
                <ul class="left_ul_ul">
						<li class="subcat">orbit</li>
						<li class="subcat">FPC</li>
					</ul>
				</li>
			</ul>
		</div>
        );
    }
}
