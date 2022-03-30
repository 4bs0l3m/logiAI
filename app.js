const brain=require('brain.js')
const fileData=require('./fileReader').sasd
const config = {
    hiddenLayers: [300], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    log:false,
    errorThresh: 0.1

  };
  
  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);

  var generateTrainData=()=>{
    let data=[]
    
    
    for (let i = 0; i < 1000; i++) {
            let inputs=[]
          for (let j = 0; j < 3; j++) {
              inputs.push(1*((Math.random()*10).toFixed(0)))
          }
          let output=0;
          inputs.forEach(item=>{
            output+=item;
            
          })
          let str=`{"${output.toFixed(0)}":1}`;
          data.push({input:inputs,output:JSON.parse(str)})
      }
      return data;
    }
   
for (let index = 0; index < 1000; index++) {
  console.clear();
console.log('index :', (100/1000)*index);
  
  
  const data=generateTrainData()
  net.train(data);
  const output =  net.run([5,2,4]); // 11
  const output1 = net.run([3,1,5]); // 9
  const output2 = net.run([4,4,8]); // 16
  let res=1;
  let res1=1;
  let res2=1;
  let out='';
  let out1='';
  let out2='';
  Object.keys(output).forEach(item=>{
    let sum=1-Math.abs(output[item])
    if(sum<res){
      res=sum;
      out=item;
    }
  })
  Object.keys(output1).forEach(item=>{
    let sum=1-Math.abs(output1[item])
    if(sum<res1){
      res1=sum;
      out1=item;
  }
  })
  Object.keys(output2).forEach(item=>{
    let sum=1-Math.abs(output2[item])
    if(sum<res2){
      res2=sum;
      out2=item;
     }
  })
  console.log('output :',  out);
  console.log('output1 :', out1);
  console.log('output2 :', out2);
}


  // console.log('output :',  res);
  // console.log('output1 :', res1);
  // console.log('output2 :', res2);
