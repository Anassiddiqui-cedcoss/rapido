var arr1 = ['option1', 'option2', 'option3', 'option4'];
      var s1 = document.getElementById('sel1');
      var s2 = document.getElementById('sel2');
      var arr2 = [];
      arr3=[];

      for ( i = 0; i < arr1.length; i++) {
        var opt = document.createElement('option')
        opt.textContent = arr1[i]
        s1.appendChild(opt)
        
        
      }
      function shift() {
        for (i=0; i< arr1.length; i++) {
          if ( s1.options[i].selected) {
            var opt=s1.options[i];
            var index=s1.options[i].index;
            arr2 = arr1.splice(index,1);
            arr3.push(arr2[0]);
            sel1.remove(index);
            i--;
            
          }
        }
        console.log(arr2);
        
        for (var i = 0; i < arr3.length; i++) {
          var opt1 = document.createElement('option')
          opt1.textContent = arr3[i]
          s2.appendChild(opt1)
        }
    }