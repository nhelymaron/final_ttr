var setTimer = 0;
function clock(){
	let timer = <h1>
				{new Date().toLocaleTimeString()}
			</h1>;
	ReactDOM.render(timer,document.getElementById('timer'));	

	setTimer = setTimeout(function(){ 
		clock();
	},1000);
};
function save(){
	localStorage.setItem('note',document.getElementById("note").value);
	localStorage.setItem('note1',document.getElementById("note1").value);
	localStorage.setItem('note2',document.getElementById("note2").value);
	localStorage.setItem('note3',document.getElementById("note3").value);
	localStorage.setItem('note4',document.getElementById("note4").value);
	}
function history(){
var one=localStorage.getItem('note');
var two=localStorage.getItem('note1');
var three=localStorage.getItem('note2');
var four=localStorage.getItem('note3');
var five=localStorage.getItem('note4');
	
	document.getElementById("note").value=one;
	document.getElementById("note1").value=two;
	document.getElementById("note2").value=three;
	document.getElementById("note3").value=four;	
	document.getElementById("note4").value=five;

}

function del(){
	localStorage.removeItem('note');}
function del1(){
	localStorage.removeItem('note1');}
function del2(){
	localStorage.removeItem('note2');}
function del3(){
	localStorage.removeItem('note3');}
function del4(){
	localStorage.removeItem('note4');}

function play(){
	document.getElementById('myTune').play();
	}
function pause(){
	document.getElementById('myTune').pause();
	}
function stop(){
document.getElementById('myTune').pause(); 
document.getElementById('myTune').currentTime = 0;
}
let btn = <div>
 				<textarea id="note" class="txt"></textarea>			
				
				<button onClick={del}>Delete</button>
			
			<div/>
				<textarea id="note1"></textarea>
				
				<button onClick={del1}>Delete</button>				
			<div/>
				<textarea id="note2"></textarea>
				
				<button onClick={del2}>Delete</button>
			<div/>
				<textarea id="note3"></textarea>
				
				<button onClick={del3}>Delete</button>
			<div/>
				<textarea id="note4"></textarea>
					
				<button onClick={del4}>Delete</button>

			<div/>				
				<button onClick={history} class="bot">Last saved</button>
				<button onClick={clock} class="bot">Show Time</button>
  				<button onClick={save} class="bot">Save</button>
			<div id='timer' className='text'></div>

  <div></div>
   				 <audio id="myTune" src="sounds/bm.mp3"></audio>
    
  				<button onClick={play} class="bot">Play free music</button>
   				<button onClick={pause} class="bot">Pause the music</button>
		<center><button onClick={stop} class="bot">Stop the music</button></center>

		</div>

ReactDOM.render(btn,document.getElementById('root'));