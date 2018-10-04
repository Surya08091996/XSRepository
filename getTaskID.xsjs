var get_stmt;
var get_res;

var destination_name;
var destination_package;

destination_package = 'Test_Project';
destination_name = 'workflow';
var dest;
var client;

try {
	dest = $.net.http.readDestination(destination_package, destination_name);
	client = new $.net.http.Client();
    var req = $.net.http.Request($.net.http.GET, "/workflow-instances");
    client.request(req, dest);
    var response = client.getResponse();
    $.response.setBody(response);
}
catch(e){
	 $.response.contentType = "text/plain";
     $.response.setBody(e.message);
}