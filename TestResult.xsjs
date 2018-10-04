$.response.setBody(JSON.stringify(20));
$.response.contentType = 'application/json';
$.response.status = $.net.http.OK; 
// comment 2
// comment

//$.response.setBody(JSON.stringify(10));

// test the pull functionality


var scnd = "Second Commit";
$.response.setBody(scnd);
