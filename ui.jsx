
<!DOCTYPE html>
<html>
  <head>
    <title>RGame UI</title>
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/history@5/umd/history.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-router@6/umd/react-router.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-router-dom@6/umd/react-router-dom.development.js" crossorigin></script>
      <script src="./three.js"></script>
      <link href="./boostrap.css" rel="stylesheet">
      <script type="text/babel" src="./topbar.jsx"></script>
      <script type="text/babel" src="./headbar.jsx"></script>
      <script type="text/babel" src="./leftbar.jsx"></script>
    <script type="text/babel" src="./ui.jsx"></script>
        <style type="text/css">

div {
    display: inherit;
}

.wrapper {
  display: grid;
  grid-template-columns:
    minmax(20px, 40px)
    minmax(150px, 10fr)
    minmax(150px, 4fr);/*use react to dynamic modified https://letsbuildui.dev/articles/resizable-tables-with-react-and-css-grid*/
  /*grid-template-columns: 5% 65% 30%;*/
  gap: 1px;
  /*grid-auto-rows: minmax(15px, auto);*/
   grid-template-rows:
    minmax(20px, 1fr)
    minmax(20px, 1fr)
    minmax(200px, 20fr)
    minmax(20px, 1fr)
    minmax(150px, 10fr);
}
            body {
                display: block;
                margin: 0px;
                background-color: #333;
            }
            #leftBar {
                grid-column: 1;
                grid-row: 3/4;
                background-color: #333;
            }
            #mainCanvas {
                grid-column: 2;
                grid-row: 3;
                background-color: aqua;
                /*resize: both;
                overflow:hidden;*/
            }
            #headBar {
                grid-column: 1/4;
                grid-row: 1;
                display: inline;
                background-color: #333;
            }
            #topBarOut {
                grid-column: 1/3;
                grid-row: 2;
                display: inline;
                background-color: #333;
                overflow: scroll;
                scrollbar-width:none;
            }
            ::-webkit-scrollbar { /*hidden bar*/
                display: none;
            }
            #rightBar {
                grid-column: 3/4;
                grid-row: 2/4;
                background-color: rosybrown;
            }
            #centreBar {
                grid-column: 1/3;
                grid-row: 4;
                background-color: green;
            }
            #detailBar {
                grid-column: 3/4;
                grid-row: 4/6;
                background-color: olive;
            }
            #buttonBar {
                grid-column: 1/3;
                grid-row: 5;
                background-color: gray;
            }
 
  
            .header_ul {
	list-style: none;
                margin: 0;
                    font-size: 14px;
	font-family: 'Economica', sans-serif;
                padding-left: 0;
                
}
            .header_ul li {
	            padding-right: 80px;
                margin-left: 20px;
	            float: left;
                color: #fff;
                text-align: center;
}
            .header_ul li:hover {
	color: burlywood;
   }
            .header_ul_ul {
	width: 80px;
	text-align: center;
	position: absolute;
	list-style: none;
	background: #333;
	color: #fff;
    transform: translate(-20px,0)
}

.header_ul_ul li {
	margin: 10px 1px 10px -15px;
	float: none;
    text-align: left;
    font-size: 12px;
	font-family: 'Economica', sans-serif;
}
.header_ul_file .header_ul_ul {
	display: none;
}

.header_ul_edit .header_ul_ul {
	display: none;
}

.header_ul_project .header_ul_ul {
	display: none;
}

.header_ul_file:hover .header_ul_ul {
	display: block;
}

.header_ul_edit:hover .header_ul_ul {
	display: block;
}

.header_ul_project:hover .header_ul_ul {
	display: block;
}
            /*
.header_ul_file:hover {
	background-color: gray;
}

.header_ul_edit:hover {
	background-color: gray;
}

.header_ul_project:hover {
	background-color: gray;
}
            */
            .floatwindow {
                display: none;
                width:500px;
                height:400px;
                background-color: #333;
                position: absolute;
                top: 20%;
                left:20%;
                z-index: 1001;
            }
            #closeWindow {
                margin: 0px;
                margin-right: 5px;
                text-align: end;
            }
            #closeWindow:hover{
                color: aqua;
            }
            .cover {
				display: none;
				position: absolute;
				top: 0%;
				left: 0%;
				width: 100%;
				height: 100%;
				background-color: #bbbbbb;
				z-index: 1000;
				opacity: 40%;
			}
            .bar {
                background: gray;
                border-radius: 2px;
                padding-inline:25px;
                font-size: 12px;
	            font-family: 'Economica', sans-serif;
                color:#fff;
                margin: 0.5px;
            }
            .bar:hover {
                background-color: darkgray;
            }
            #barclose:hover {
                opacity: 0.7;
            }
            #topBar {
                grid-column: 1/3;
                grid-row: 2;
                display: inline;
                background-color: #333;
                white-space: nowrap;
            }
            .left_ul {
	list-style: none;
                margin: 0;
                    font-size: 14px;
	font-family: 'Economica', sans-serif;
                padding-left: 0;
                
}
            .left_ul li {
    padding-right: 80px;
    float: left;
    color: #fff;
    text-align: center;
    padding: 12px;
}
            .subcat{
                 width: 34px;
                 height: 21px;
            }
             .left_ul_ul {
	width: 60px;
	text-align: center;
	position: absolute;
	list-style: none;
	background: #333;
	color: #fff;
    transform: translate(29px,-33px);
    font-size: 12px;
	font-family: 'Economica', sans-serif;
                 padding:0;
}
            .left_ul li:hover {
                background-color: gray;
            }
            .left_ul_cube .left_ul_ul {
	           display: none;
            }
            .left_ul_cube:hover .left_ul_ul {
	           display: block;
            }
            .left_ul_light .left_ul_ul {
	           display: none;
            }
            .left_ul_light:hover .left_ul_ul {
	           display: block;
            }
            .left_ul_physical .left_ul_ul {
	           display: none;
            }
            .left_ul_physical:hover .left_ul_ul {
	           display: block;
            }
            .left_ul_camera .left_ul_ul {
	           display: none;
            }
            .left_ul_camera:hover .left_ul_ul {
	           display: block;
            }
            .left_ul_sprite .left_ul_ul {
	           display: none;
            }
            .left_ul_sprite:hover .left_ul_ul {
	           display: block;
            }
            .left_ul_control .left_ul_ul {
	           display: none;
            }
            .left_ul_control:hover .left_ul_ul {
	           display: block;
            }
    </style>
  </head>
  <body>
    <div id="app">Rendering...</div>
      <script>
      
      </script>
  </body>
</html>
