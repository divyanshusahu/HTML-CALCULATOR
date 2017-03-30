document.getElementById("btn1").addEventListener("click", function(){
   var abc = document.getElementById("btn1").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn2").addEventListener("click", function(){
   var abc = document.getElementById("btn2").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn3").addEventListener("click", function(){
   var abc = document.getElementById("btn3").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn4").addEventListener("click", function(){
   var abc = document.getElementById("btn4").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn5").addEventListener("click", function(){
   var abc = document.getElementById("btn5").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn6").addEventListener("click", function(){
   var abc = document.getElementById("btn6").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn7").addEventListener("click", function(){
   var abc = document.getElementById("btn7").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn8").addEventListener("click", function(){
   var abc = document.getElementById("btn8").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn9").addEventListener("click", function(){
   var abc = document.getElementById("btn9").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btn0").addEventListener("click", function(){
   var abc = document.getElementById("btn0").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btndot").addEventListener("click", function(){
   var abc = document.getElementById("btndot").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btnadd").addEventListener("click", function(){
   var abc = document.getElementById("btnadd").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btnsub").addEventListener("click", function(){
   var abc = document.getElementById("btnsub").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btnmul").addEventListener("click", function(){
   var abc = document.getElementById("btnmul").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btndiv").addEventListener("click", function(){
   var abc = document.getElementById("btndiv").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btnmod").addEventListener("click", function(){
   var abc = document.getElementById("btnmod").value;
   document.getElementById("display").value+=abc;
   
});

document.getElementById("btneq").addEventListener("click", function(){
   document.getElementById("display").value=eval(document.getElementById("display").value);
});

document.getElementById("btnc").addEventListener("click", function(){
   var abc = document.getElementById("display").value;
   abc=abc.slice(0,-1);
   document.getElementById("display").value=abc;
   
});

document.getElementById("btnac").addEventListener("click", function(){
   document.getElementById("display").value="";
});