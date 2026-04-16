const fs_module=require('fs');

setInterval(() => {
  fs_module.appendFile('ayushi.txt','Hello Good Morning..!\\n',(err)=>{
    if(err)
    {
      console.log("Error while writing file..!", err);
    }
    else{
      console.log("Data added into file..!");
    }
  })
},5000)
