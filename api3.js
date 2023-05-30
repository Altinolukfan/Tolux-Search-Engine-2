var express = require("express");
var app = express();
var fs = require("fs");
var json=require("./crawler-data.json")

var arr=[];

var arr2=[];

const str=JSON.parse(JSON.stringify(json));

console.log(str.sites);

for (var i = 0; i < str.sites.length; i++) {
    var counter = str.sites[i];
    arr.push(counter.site);
    arr2.push(counter.data);
}
console.log(arr2.length);
console.log(arr2);


 app.get('/',(req,res)=>{
  res.send("saaaa");
 });

 app.get('/:query',(req,res)=>{
    query=req.params["query"];
    var data=[];
    let i=-1;
    arr.forEach(element => {
        i++;
        var variable=arr2[i];
        if(element.includes(query)){
            data.push(element+"&&"+variable); 
        }
        else{
            
        }
        
      });
             res.send(data);
             res.end();
   });



   app.get('/posts/adr',(req,res)=>{
    let adr=req.query.link;
axios({
    method: "POST",
    url: "https://detect.roboflow.com/face-and-object-detection/1",
    params: {
        api_key: "KjBkuLDgo3lwwoqTBsYj",
        image: adr
    
    }
})
.then(function(response) {
    res.send(response.data);
    //res.end();
})
.catch(function(error) {
    //console.log(error.message);
    res.send("error");
});


    
   });




   app.listen(3000);
