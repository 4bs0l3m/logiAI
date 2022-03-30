
module.exports= require('fs').readFile('./data/midi.mid', (err, data) => {
    // var bulking=''
    // data.forEach(item=>{
    //     bulking+=String.fromCharCode(item).replace(' ','')
    // })
    console.log( data.byteLength);
    
  });
