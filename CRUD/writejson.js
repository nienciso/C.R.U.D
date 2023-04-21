const fs = require("fs");

function  write (array){
    const dataParsed = JSON.stringify(array)
    fs.writeFileSync("./data.json", dataParsed);
     
};

module.exports= {write};