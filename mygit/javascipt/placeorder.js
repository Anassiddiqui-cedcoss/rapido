function myorder(){
    var name=document.getElementById('nameid').value;
    var mail=document.getElementById('mailid').value;
    var phone=document.getElementById('phoneid').value;
    var address=document.getElementById('addressid').value;
    var city=document.getElementById('cityid').value;
    var postcode=document.getElementById('pcodeid').value;
    var province=document.getElementById('select').value;
    var product01=document.getElementById('p1id').value; 
    var price1=product01*10;
    var product02=document.getElementById('p2id').value;
    var price2=product02*20;
    var product03=document.getElementById('p3id').value;
    var price3=product03*30;
    var delivery=document.getElementById('deliveryid').value;
    var stotal=price1+price2+price3+20;
    var tax=(stotal*13)/100;
    var total=stotal+tax;
    
    if (name==""){
        document.getElementById("username").innerHTML="** please fill the name**";
        return false;
    }

if (mail==""){
    document.getElementById("spanmail").innerHTML="** please enter mail**";
    return false;
  }

if (phone==""){
    document.getElementById("spanphone").innerHTML="** please enter Mobile No**";
    return false;
    }
    if (phone.length !=10){
        document.getElementById("spanphone").innerHTML="* must be 10 digits";
        return false;
    }

if (address==""){
    document.getElementById("spanaddress").innerHTML="** please enter your Address**";
    return false;
}
if (city==""){
    document.getElementById("spancity").innerHTML="** please enter your city**";
    return false;
}
if (postcode==""){
    document.getElementById("spanpostcode").innerHTML="** please enter post code**";
    return false;
}
if (province==""){
    document.getElementById("spanprovince").innerHTML="** please select**";
    return false;
}
if (product01==""){
    document.getElementById("spanproduct01").innerHTML="** please enter product number**";
    return false;
}
if (product02==""){
    document.getElementById("spanproduct02").innerHTML="** please enter product Number**";
    return false;
}
if (product03==""){
    document.getElementById("spanproduct03").innerHTML="** please enter Product Number**";
    return false;
}
if (delivery==""){
    document.getElementById("spandelivery").innerHTML="** please enter delivery Time**";
    return false;
}
var arr01=[{name:name, mail:mail,phone:phone, address:address,city:city, postcode:postcode, province:province, product01:product01, product02:product02, product03:product03, delivery:delivery, total:total, taxprice:tax, subtotal:stotal }] ;

document.getElementById("invoicename").innerHTML=arr01[0].name;
document.getElementById("invoicemail").innerHTML=arr01[0].mail;
document.getElementById("invoicephone").innerHTML=arr01[0].phone;
document.getElementById("invoiceaddress").innerHTML=arr01[0].address;
document.getElementById("quantity1").innerHTML=arr01[0].product01;
document.getElementById("invoicep1").innerHTML=arr01[0].product01*10;
document.getElementById("quantity2").innerHTML=arr01[0].product02;
document.getElementById("invoicep2").innerHTML=arr01[0].product02*20;
document.getElementById("quantity3").innerHTML=arr01[0].product03;
document.getElementById("invoicep3").innerHTML=arr01[0].product03*30;
document.getElementById("invoicecharge").innerHTML=20;
document.getElementById("invoicesubtotal").innerHTML=arr01[0].subtotal;
document.getElementById("invoicetax").innerHTML=arr01[0].taxprice;
document.getElementById("invoicetotal").innerHTML=arr01[0].total;

 console.log(arr01);
 document.getElementById("myForm").reset();
}