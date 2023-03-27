//subarray code solution in javascript

var arr=[1,2,3,7,5];
var n=arr.length;
var s=12;
const a=subarraySum(arr,n,s);
console.log(a);
subarraySum(arr, n, s)
    {
       if(s == 0 || n == 0 || arr.length == 0)
       {
           return [-1];
       }
       
       var startIndex = 0;
       var endIndex = -1;
       var sum = 0;
       
       for (var i=0; i < n; i++)
       {
          sum = sum + arr[i];
         
          while (sum > s){
              sum = sum - arr[startIndex];
              startIndex = startIndex + 1;
          }
          
          if(sum == s){
              endIndex = i+1;
              break;
          }
       }

       return (endIndex == -1) ? [endIndex] :  [startIndex + 1, endIndex];
    }


