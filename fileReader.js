const midiManager= require('midi-file');
const   notes=['C','C#','D', 'D#','E', 'F','F#', 'G','G#','A','A#','B'];
function getNote(index){
  // console.log('index :', index);

    let count=notes.length;
    let mode=index % count;
    let octave= (index-mode)/count 
    return notes[mode]+octave
  }
module.exports= ()=>{ let data= require('fs').readFileSync('./data/midi.mid', (err, data) => {
  //data map
  })
  let midiData=midiManager.parseMidi(data);
  let tickTime=midiData.header.ticksPerBeat;
  let tick=0;
  
  console.log('midiData.tracks.length :', midiData.tracks.length);
  setInterval(()=>{
    let onNotes=midiData.tracks[0].filter(x=>x.deltaTime==tick && x.type=='noteOn').map(item=>{return getNote(item.noteNumber)});
    let offNotes=midiData.tracks[0].filter(x=>x.deltaTime==tick && x.type=='noteOff').map(item=>{getNote(item.noteNumber)});
    console.log(onNotes)
    tick++;
  },tickTime)
  return midiData.tracks[0].filter(x=>x.type==='noteOn' || x.type==='noteOff');
};
