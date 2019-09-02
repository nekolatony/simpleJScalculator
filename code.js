const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const res = calculator.querySelector('.result')
var num='',flag=0
var number1,number2

const result = (number1,operand,number2)=>{
  let v
 if(operand == 1)
     v = (number1 + number2)
 if(operand == 2)
   v = (number1 - number2)
 if(operand == 3)
   v = (number1 * number2)
 if(operand == 4)
   v = (number1 / number2)

   return v;

}

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   var key = e.target;
   var action = key.dataset.action;
   if(action ==="num")
   {
     num += key.textContent
     res.textContent = num 
     console.log(key.textContent);
   }
  if(action !== 'num'){
    if(flag==0)
      number1 = parseInt(num)
      else
      number2 = parseInt(num)

      
    if(action==='add'){
       flag=1
       num=''
      
    }
    if(action==='sub'){
      flag=2
      num=''
     
   }
    if(action==='mul'){
      flag=3
      num=''
   
 }
    if(action==='div'){
      flag=4
      num=''
 
  }

  if(action === "clear"){
    num=''
    number1=number2=0;
    flag=0
  }
    if(action === 'equal')
    {
      res.textContent=result(number1,flag,number2);
      number1 = result(number1,flag,number2);  
    }
  
  
  }
  }
    
  
  }
  
  
  
    


)