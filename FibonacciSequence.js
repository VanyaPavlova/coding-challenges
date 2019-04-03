/*
Use recursion to log a fibonacci sequence of n length.
    F(n) = F(n-1) + F(n-2)
 */

function Fibonacci(n){
  if (n === 1) { return [0, 1]; } 
   else {
    var arr = Fibonacci(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
   }
}

 console.log(Fibonacci(5));