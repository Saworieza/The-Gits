/*=================================================================*\
// Thumbs Up? v1.0 by Scandal                                       \\
\*=================================================================*/
var sc_thumbs_handleSuccess = function(o)
{
	if(o.responseText !== undefined)
	{
		if (sc_thumbs_callback.object_name[o.tId] !== undefined)
		{
			fetch_object(sc_thumbs_callback.object_name[o.tId]).innerHTML = o.responseText;
		}
	}
}
var sc_thumbs_handleFailure = function(o)
{
	if(o.responseText !== undefined)
	{
		alert(o.responseText);
	}
}
var sc_thumbs_callback =
{
	success: sc_thumbs_handleSuccess,
	failure: sc_thumbs_handleFailure,
	timeout: vB_Default_Timeout,
	cache: false,
	object_name: new Array()
} 
function sc_thumbs_rate(contentid, contenttype, thumb)
{	
	var sUrl = 'thumbs.php';
	var postData = 'do=add&using_ajax=1&contenttype=' + contenttype + '&contentid=' + contentid + '&thumb=' + thumb + '&securitytoken=' + SECURITYTOKEN;
                     
	var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, sc_thumbs_callback, postData);

	sc_thumbs_callback.object_name[request.tId] = 'sc_thumbs_box_' + contentid;

	return false;
}

function sc_thumbs_remove(contentid, contenttype)
{	
	var sUrl = 'thumbs.php';
	var postData = 'do=remove&using_ajax=1&contenttype=' + contenttype + '&contentid=' + contentid + '&securitytoken=' + SECURITYTOKEN;

	var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, sc_thumbs_callback, postData);

	sc_thumbs_callback.object_name[request.tId] = 'sc_thumbs_box_' + contentid;

	return false;
}
/*=================================================================*\
// end of script                                                    \\
\*=================================================================*/