var numsquares =6;
var colors = genraterandomcolors(numsquares);
var pickedcolor = pickcolo();
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("display");
colordisplay.textContent=pickedcolor;
var result=document.querySelector("#result");
var back=document.querySelector("h1");
var resetbutton=document.getElementById("new");
var modebuttons=document.querySelectorAll(".mode");

for (var i=0;i<modebuttons.length;i++){
    modebuttons[i].addEventListener("click",function(){
        modebuttons[1].classList.remove("selected");
        modebuttons[0].classList.remove("selected");
        this.classList.add("selected"); 
        this.textContent == "Easy" ?	numsquares = 3 : numsquares = 6;
        reset();
    });
}

function reset(){
    colors=genraterandomcolors(numsquares);
    pickedcolor=pickcolo();
    result.textContent="";
    resetbutton.textContent="New Colors";
    colordisplay.textContent=pickedcolor;
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
        }
    back.style.background="steelblue";    

};
resetbutton.addEventListener("click",function(){
    reset();

});
for (var i=0; i<squares.length; i++){
    squares[i].style.background=colors[i];
    

    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.background;
        if(clickedcolor === pickedcolor) {
            result.textContent="Correct!";
            changecolor(clickedcolor);
            back.style.background=clickedcolor;
            resetbutton.textContent="Play Again!!";
		} else {
            result.textContent="try again!";
            this.style.background= "#232323";
		}
    });
};

function changecolor(color){
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
};

function pickcolo(){
   var ranin=Math.floor(Math.random()* colors.length);
   return colors[Number(ranin)];
};
function genraterandomcolors(num){
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
};

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};