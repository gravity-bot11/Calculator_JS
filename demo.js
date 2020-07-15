function input(){
  
  return document.getElementById("inputs_value").innerText;

}

function input_1(num){
  document.getElementById("inputs_value").innerText = num;

}

function output(){

return   document.getElementById("outputs_value").innerText;

}

function output_1(num){
   
    
   if(num==""){
  
    document.getElementById("outputs_value").innerHTML = num;

   }
   else{

    document.getElementById("outputs_value").innerText = getformattednumber(num);
 
   }
  
    

}


function getformattednumber(num){
var n = Number(num);
var value = n.toLocaleString("en");
return value;

}


function reversenumberformat(num){

 return Number(num.replace(/,/g,''));
}


var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length;i++){

  operator[i].addEventListener('click', function(){
   
    if(this.id=="AC") {
      input_1("");
      output_1("");
    }
     
    else if(this.id == "C"){
     
      var out = reversenumberformat(output()).toString();
      if(out){
        out = out.substr(0,out.length-1);
        output_1(out);
      } 

    }


    else{
			var output2=output();
			var history=input();
			if(output2==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output2!="" || history!=""){
				output2= output2==""?output2:reversenumberformat(output2);
				history=history+output2;
				if(this.id=="="){
					var result=eval(history);
					output_1(result);
					input_1("");
				}
				else{
					history=history+this.id;
					input_1(history);
					output_1("");
				}

    

      }


    }

  });



}


var number = document.getElementsByClassName("number");

for(var i=0;i<number.length;i++){

 number[i].addEventListener('click',function(){
   var ab = reversenumberformat(output());
   if(ab!=NaN){
     ab = ab+this.id;
     output_1(ab);
   }
 }) 
}