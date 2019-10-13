module.exports = function zeros(expression) {
  let arr = expression.replace(/\*/g, " ").split(' ');
  console.log(arr);
  let result = 1;
  
   let numberTwos = 0;
   let numberFives = 0; 
  
  for(let i = 0; i < arr.length; i++){
     
   arr[i].includes("!!") ?  number2(arr[i]) :  number(arr[i]);
    
  }
  
 
 
  
 function Counter (number) {
     for ( ; ; ) {
          if (number % 5 == 0) {
              numberFives++;
              number /= 5;
          } else if (number % 2 == 0) {
              numberTwos++;
              number /= 2;;
          } else break;
     }
  }
  
    function number2(num){
   let result = 1;
     let i;
    
     for(i = parseInt(num, 10); i > 1; i -= 2){
           Counter(i);
     }     
 }
 function number(num){
   let result = 1;
     let i;
     for(i = parseInt(num, 10); i > 1; i --){
           Counter(i);
     } 
 }
  
return Math.min(numberTwos, numberFives);
    
}
