var fs = require('fs');
fs.watch('target.txt',function(event,filename){
setTimeout(function(){
  console.log("Event:"+event + 'For File:' +filename);
},2000);
});
console.log("Now Watching for Change in target file ");