let arr = [1,2,3,4,5,6,7,8,9]

console.log("Break statement") //break statement
for(var i=0; i<arr.length; i++)
{
    if(i==5)
       {
        break; //loop ends
       }
    console.log(arr[i])
}

console.log("Continue statement") //continue statement
for(var i=0; i<arr.length; i++)
{
    if(i==5)
       {
        continue //don't execute for i=5 and then continue loop
       }
    console.log(arr[i])
}
