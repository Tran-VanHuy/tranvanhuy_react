let array =  [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(array.length);

console.log('EX1: Thu tu giam dan cua mang la: ' + array.sort(

    function(a,b){

        return (a - b);
    }
))

// Bt1
var last =  function(arr, n) {
    if (arr == null) 
      return void 0;
    if (n == null) 
       return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - n, 0));  
    };
  console.log('Ex2: Write a JavaScript function to get the last element of an array. Passing a parameter "n" will return the last "n" elements of the array. Go to the editor')
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));