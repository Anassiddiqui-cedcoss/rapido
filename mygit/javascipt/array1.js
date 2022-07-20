const phone = [
    {
      name: 'Iphone12',
      modelno: 'A2172',
      price: '59999',
      availability: 'yes',
    },
    {
      name: 'Lumia650',
      modelno: 'RM1154',
      price: '15000',
      availability: 'yes',
    },
    {
      name: 'Nokiax200',
      modelno: 'A2152',
      price: '20000',
      availability: 'yes',
    },
    {
      name: 'prime10',
      modelno: 'm2101k7ai',
      price: '11000',
      availability: 'yes',
    },
  ];
  
  function result(args) 
  {
     var text="<table id='tab1'><tr><th>product name</th><th>model no</th><th>price</th><th>availability</th><tr>";
 
    if (args == "iphone") 
    {
        text+="<tr><td>"+phone[0].name+"</td>"+"<td>"+phone[0].modelno+"</td>"+"<td>"+phone[0].price+"</td>"+"<td>"+phone[0].availability+"</td></tr>";}

    if (args == "windows") 
    {text+="<tr><td>"+phone[1].name+"</td>"+"<td>"+phone[1].modelno+"</td>"+"<td>"+phone[1].price+"</td>"+"<td>"+phone[1].availability+"</td></tr>";}

    if (args == "nokia") 
    {text+="<tr><td>"+phone[2].name+"</td>"+"<td>"+phone[2].modelno+"</td>"+"<td>"+phone[2].price+"</td>"+"<td>"+phone[2].availability+"</td></tr>";}
    
    if (args == "redmi") 
    {text+="<tr><td>"+phone[3].name+"</td>"+"<td>"+phone[3].modelno+"</td>"+"<td>"+phone[3].price+"</td>"+"<td>"+phone[3].availability+"</td></tr>";}
    
    text+="</table>";
    
    document.getElementById('details').innerHTML=text;
    
  }