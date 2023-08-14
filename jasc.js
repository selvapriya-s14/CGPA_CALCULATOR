        let d=0;
let fl=0;
var btn=document.querySelector("#btn");
document.getElementById("best").style.visibility = "hidden";
document.getElementById("myForm").style.visibility="hidden";
btn.onclick=function() {
        div=document.createElement("div");
        div.innerHTML=generateit();
        document.getElementById("box").appendChild(div)
}
function generateit(){
     return "<label for='her'>Grade points  </label><input type='text' class='txt'><label for='her'> Credit points </label><input type='text' class='jxt'><br><br>";
  }
  var res=document.querySelector("#btnResult");
  res.onclick=function(){   
    var x=document.querySelectorAll(".txt");
    var y=document.querySelectorAll(".jxt");
    var t=0;
    var s=0;
    var fl=0;
    for(i=0;i<x.length;i++){
      if(Number(x[i].value)===0||Number(y[i].value)===0){
        fl=1;
        alert("Some details missing please enter that")
        break
      }
      else{
      t+=(Number(x[i].value)*Number(y[i].value));
      s+=Number(y[i].value)
      }
    }
    if(fl==0){
    let num=t/s;
    if(t===0||s===0){
      alert("Enter the details");
    }
    else{
    document.getElementById("typ").value =num.toPrecision(3);
    document.getElementById("best").style.visibility = "visible";

    document.getElementById("myForm").style.visibility = "visible";
    }
  }
  
  }   