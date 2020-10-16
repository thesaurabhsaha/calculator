function insert(num){
        document.form.textview.value = document.form.textview.value + num;
      }
      
function clean() {
        // clean input area
        document.form.textview.value = "";
      }
      
      function back() {
        var exp = document.form.textview.value
       // remove last character from string
        document.form.textview.value = exp.substring(0,exp.length-1)
    
      }
 
function calculate(){
        // eval calculation
        var exp = document.form.textview.value
        document.form.textview.value = eval(exp)
      }
           
            function equal(){
                var exp=document.form.textview.value;
                document.form.textview.value=eval(exp)
            }
            
            
            
