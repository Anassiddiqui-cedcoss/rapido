const array=[];
value="";

function addToHistory(){

    var usertext=document.getElementById("text").Value;
    var useramount=document.getElementById("amount").value;
    
    
    if (usertext=="")  
    {
      document.getElementById("text").innerHTML="please add text";
    }  
    if (useramount.value=="")  
    {
          document.getElementById("amount").innerHTML="please add amount";
        } 
        else{
            var usertext=document.getElementById("text").Value;
            var useramount=document.getElementById("amount").value;
            array.push(value);
            populate(array);
            console.log(array)
            
        } 
        document.getElementById("text").value="";
        document.getElementById("amount").value="";


    }
function populate(){
    t1="";
    for(i=0; i<array.length;i++)
    {
        t1+="<li><label>"+array[i]+"</label></li>";
    }
    document.getElementById('list').innerHTML=t1;
    
}

    