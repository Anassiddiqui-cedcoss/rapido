$(document).ready(function(){
  
$arr1=[
{UniqueID:"1",Name:"anas",Email:"abc@gmail.com",password:"abc123",city:"lucknow",role:"admin"},
{UniqueID:"2",Name:"aman",Email:"def@gmail.com",password:"abc456",city:"agra",role:"guest"},
{UniqueID:"3",Name:"ajay",Email:"ghi@gmail.com",password:"abc789",city:"delhi",role:"guest"}
];
$user=$("#username").val();
$pass=$("#password").val();
let username=$arr1.Email; 
let password=$arr1.password;

$("#btnSubmit").click(function(){

    
    if(username == "def@gmail.com" || username=="ghi@gmail.com"){
        $("#display").innerhtml("welcome");
    }
    
    else{
        $array={id:$arr1.UniqueID,name:$arr1.Name,City:$arr1.city,Role:$arr1.role};
        $text="";
        $text+="<table><tr><th>ID</th><th>Name</th><th>Email</th><th>city</th><th>Role</th></tr>";
        for(i=0;i<$array.length;i++){
            $text+="<tr><td>"+$array[i].id+"</td><td>"+$array[i].name+"</td><td>"+$array[i].City+"</td><td>"+$array[i].Role+"</td></tr>";
            $text+="</table>";
        }
        $("#tbl").text($text);
    }

        


})





})
