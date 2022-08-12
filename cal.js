

for(var i=0;i<15;i++){
    document.getElementsByClassName('buttons')[i].addEventListener('click',cal)
    
    }
    function cal(e){
        document.getElementById('inputwindow').value +=e.target.value;
    }
    document.getElementById('clear').addEventListener('click',clearInput)
    function clearInput() {
        document.getElementById('inputwindow').value ="";
    }
    document.getElementById('equal').addEventListener("click",calculateResult);
    function calculateResult() {
        var result = eval(document.getElementById('inputwindow').value);
        document.getElementById('inputwindow').value = result;
        localStorage.setItem('storage',result);
    }
  /*let btns = document.getElementsByClassName("buttons");
   for (var i=0 ; i <15; i++) {
    if(i==0){
       btns[i].addEventListener("click", function () {
        document.getElementById('inputwindow').value +=1;
       
       });
    }
    if(i==1){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +=2;
        
        });
    }
        if(i==2){
            btns[i].addEventListener("click", function () {
             document.getElementById('inputwindow').value +=3;
            
            });
            
     }
     if(i==3){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="+";
        
        });
    } if(i==4){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="4";
        
        });
    }
    if(i==5){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="5";
        
        });
    }
  
    if(i==6){
        btns[i].addEventListener("click", function () {
        document.getElementById('inputwindow').value +=6;
        
        });
    } if(i==7){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="-";
        
        });
    }

    if(i==8){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="7";
        
        });
    }
    if(i==9){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="8";
        
        });
    }
    if(i==10){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="9";
        
        });
    }
    if(i==11){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="*";
        
        });
    }
    if(i==12){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="0";
        
        });
    }
    if(i==13){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +=".";
        
        });
    }
    if(i==14){
        btns[i].addEventListener("click", function () {
         document.getElementById('inputwindow').value +="/";
        
        });
    }   
    if(i==15){
        btns[i].addEventListener("click", function () {
        document.getElementById('inputwindow').value +=".";
        
        });
    }
    }


/*
function cal(x){
    document.getElementById('inputwindow').value+=x;
}



}
function cal(e){
   
    let previous=null;
     document.getElementById('inputwindow').value +=e.target.value;
for(var i=0;i<5;i++){
   
 if (previous==null){
    hi=e.target.value;
 }else 
 next=e.target.value;
 previous=previous+1;
}
}*/








       
