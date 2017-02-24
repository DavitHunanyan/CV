    var user= document.getElementById("user");
	var data=window.name;
	var json=JSON.parse(data);
	//console.log(json);

	document.write("<p> Firstname:"+" "+json.userfname+"</p>"+
					"<p>Lastname:"+" "+json.userlname+"</p>"+
					"<p>Age:"+" "+json.userage+"</p>"+
					"<p>City:"+" "+json.usercity+"</p>");

	var title=document.getElementById("title");
	var text= document.createTextNode(json.userfname +"  " +json.userlname);
	title.appendChild(text);