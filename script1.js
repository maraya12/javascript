function sum(){
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;

        if(isNaN(x) || isNaN(y)){
            alert('Please input a number.'); 
        }
    
        else if(x=='' || y==''){
            alert('Field is empty.'); 
        }

        else(var sum = Number(x)+Number(y)){
            alert('Sum is: '+ sum);
        }
            
}

function difference(){
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;

    if(isNaN(x) || isNaN(y)){
        alert('Please input a number.'); 
    }

    else if(x=='' || y==''){
        alert('Field is empty.'); 
    }

    else(var difference = Number(x)-Number(y)){
        alert('Difference is: '+ difference);
    }
}

function product(){
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;

    if(isNaN(x) || isNaN(y)){
        alert('Please input a number.'); 
    }

    else if(x=='' || y==''){
        alert('Field is empty.'); 
    }

    else(var product = Number(x)*Number(y)){
        alert('Product is: '+ product);
    }
}

function quotient(){
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;  

    if(isNaN(x) || isNaN(y)){
        alert('Please input a number.'); 
    }

    else if(x=='' || y==''){
        alert('Field is empty.'); 
    }

    else(var quotient = Number(x)/Number(y)){
        alert('Quotient is: '+ quotient);
    }
}