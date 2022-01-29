var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)

/*for loop*/ console.log("for Loop");
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

/*forEach loop*/ console.log("forEach Loop");
arr.forEach(function(element)
{
    console.log(element)
}
)
/*while loop*/ console.log("While Loop");
let j = 0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}   
/*do-while loop*/ console.log("do-while Loop");
let k = 0;
do
{
    console.log(arr[k]);
    k++;
} 
while(k<arr.length);
