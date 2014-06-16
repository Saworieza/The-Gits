

div.menudropdown {
	width: 130px;
	margin: 0;
	position: absolute;
	left: -500px;
	top: 38px;
	background-color: #ededed;
	padding-top: 9px;
	border-left: 1px solid #5e5e5e; 
	border-right: 1px solid #5e5e5e; 
	border-top: 1px solid #5e5e5e;
	border-bottom: 1px solid #5e5e5e; 
	z-index: 5;
}
 
div.menudropdown ul {
	margin: 0; 
	padding: 0;
	list-style-type: none;
	font-family: verdana, arial, helvetica;
	font-size: 10px;
	line-height: 24px;
	border: 0;
}

div.menudropdown li {
	margin: 0;
	border: 0;
}

div.menudropdown div.notalink {
	margin: 0;
	display: block;
	height: auto;
	min-height: 24px;
	padding-left: 8px;
	padding-top: 1px;
	padding-bottom: 1px;
	color: #000000;
	text-decoration: none;
	vertical-align: middle;
	background-color: #ededed;
	border: 0;
}

div.menudropdown a {
	margin: 0;
	display: block;
	height: auto;
	min-height: 24px;
	padding-left: 8px;
	padding-top: 1px;
	padding-bottom: 1px;
	color: #000000;
	text-decoration: none;
	vertical-align: middle;
	background-color: #ededed;
	border: 0;
}

div.menudropdown a:active, div.menudropdown a:visited {
	color: #000000;
	border: 0;
}

div.menudropdown a:hover {
	color: #000000;
	background-color: #ccddd5;
	text-decoration: underline;
	border: 0;
}

/* these are for dropdown menus created using the createSubmenu function */
div.popmenu {
	position: absolute;
	left: -500px;
	top: 38px;
	background-color: #ededed;
	padding: 0;
	border-left: 1px solid #5e5e5e; 
	border-right: 1px solid #5e5e5e; 
	border-top: 1px solid #5e5e5e;
	border-bottom: 1px solid #5e5e5e; 
	z-index: 5;
}

div.popmenusubitemwrapper {
	margin-left: 8px;
	margin-right: 8px;
	border-bottom: 1px solid #ffffff;	
}

div.popmenulastsubitemwrapper {
	margin-left: 8px;
	margin-right: 8px;
}

div.popmenusubitem {
	color: #000000; 
	font-family: verdana, arial, helvetica;
	font-size: 10px;
	line-height: 24px;
	font-weight: normal;
	text-decoration: none; 
	text-align: left;
	vertical-align: middle;
	margin-left: 8px;
	margin-right: 8px;
	background-color: #ededed;
	border: 0;
}
	
div.popmenusubitem a, div.popmenusubitem a:visited {
	color: #000000; 
	font-weight: normal;
	text-decoration: none; 
}
	
div.popmenusubitem a:hover, div.popmenusubitem a:active { 
	background-color: #ccddd5;
	color: #810000; 
	border: 0; 
}
