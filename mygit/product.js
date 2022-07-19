const arr=[]
function myresult()
{
arr.push(


    {
        id:document.getElementById("pid").value,
        Name:document.getElementById("pname").value,
        price:document.getElementById("pprice").value,
        
    }
)
console.log(arr);
for(i=0; i<arr.length; i++){

    // document.getElementById("pid").innerHTML="value";
    // document.getElementById("pname").innerHTML="value";
    // document.getElementById("pprice").innerHTML="value";

    text=
    "<tr><td>" + arr[i].id +"</td><td>"
    + arr[i].Name +"</td><td>"
    + arr[i].price +"</td></tr>"
}
console.log(arr);
    document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+text;

}