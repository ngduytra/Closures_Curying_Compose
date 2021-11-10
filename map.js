var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');
const Core = require('@alicloud/pop-core');

let prs = "";


var client = new Core({
  accessKeyId: '',
  accessKeySecret: '',
  endpoint: 'https://resourcemanager.aliyuncs.com',
  apiVersion: '2020-03-31'
});


var requestOption = {
  method: 'POST'
};

// var param = {
//   RegionId: "cn-shanghai",
//   Name: "ddd",
//   DisplayName: "ddd"
// }


exports.handler = (req, resp, context) => {
    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method : req.method,
        requestURI : req.url,
        clientIP : req.clientIP,
    };
    

    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        
        prs = JSON.parse(JSON.stringify(params.body));

        console.log(prs)
        // resp.send(JSON.stringify(params));
    }); 
    
    console.log("test")
    console.log(prs)

    client.request('CreateResourceGroup', prs, requestOption).then((result) => { 
        console.log(JSON.stringify(result));
        }, (ex) => {
        console.log(ex);
        });


}