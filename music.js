const brain=require('brain.js')
const fileData=require('./fileReader')()
const midiManager= require('midi-file');
const fs=require('fs');

const config = {
    hiddenLayers: [300], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    log:false,
    errorThresh: 0.1

  };
  
  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);
 async function  generateTrainData(){
      const midi =  fileData;
    //   fs.writeFileSync('converted.json',JSON.stringify( midi))


  }
  generateTrainData();
