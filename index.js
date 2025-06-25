//string Manipulation Functions:
function reverse(str){
    return str.split("").revers().jooin("")
}
function count_char(str,c){
    var result=0
    for(var i=0;i<str.length;i++){
        if(str[i]==c){
            result++
        }
    }
    return result
}
function capitalize (str){
    var arr=str.split("")
    for(i in arr){
        arr[i]=arr[i]=arr[i][0].touppercase()+arr[i].slice(1)
    }
    return arr.join(" ")
}
//array functions:
function maxmin(arr){
    var max= arr[0]
    var min =arr[0]
    for(value of arr){
        if(value>max){
            max=value
        }
        if(valu<max)
            min=value
    }
    return "the maximum is: "+max + "and the minimum is: "+min
}
function sum(arr){
var result=0
for(var of arr){
   console.long(value)
   result=result+value
}
return result
}
function evennumber(arr){
    for(var i=0;i<arr.length;i++){
if(arr[i]%2 !==0){
    arr.splice(i,1)
    i--
  }
{
    return arr
}
//mathematical functions
 function factoriel(n){
      var i=1
     var total=1
   
   while(i<=n){
total=total*i
i++
   }
   return total
  }
  function prime(n){
    var=count=0
    var i=2
    while(i<n){
        if(n%i==0){
            count++
        }
        i++
    }
    return count==0 TRUE:false
  }
   //fib(n)=fib(n-1)+fib(n-2)
   //fib(0)=1
   //fib(1)=1
   function fib(n){
    var result=[1,1]
    result.push[result[i-1]+result[i-2]]
    for(var i=2;i<=n;i++){

    }
    return result[n]
   }

   