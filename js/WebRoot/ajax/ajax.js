function getXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
	 // Firefox, Opera 8.0+, Safari
	 xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}


function getAjaxContent(eleId,action, paparams)
{
	
	var xmlHttp = getXmlHttpObject();
	
	var url = action+ "?" + paparams;
	
	//alert(url);
	
    xmlHttp.open("GET",url,true);
    
	//attache function
	xmlHttp.onreadystatechange=function()
	{
	if(xmlHttp.readyState==4 && xmlHttp.status == 200)
	  {
	    var cont = xmlHttp.responseText;
	    //alert('***' + cont+ '***');
	    document.getElementById(eleId).innerHTML = cont;
	  }
	}
    
    xmlHttp.send(null);
}
