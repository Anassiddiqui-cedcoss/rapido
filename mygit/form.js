function fun() {
    age = parseInt(document.getElementById('age').value);
    weight = parseInt(document.getElementById('weight').value);
    if ((age < 5) || (age > 20)) {
      document.getElementById('result').innerHTML = 'result invalid';
    }
    
    if ((age >= 5 && age <= 7)) 
    {
      if (weight >= 15 && weight <= 20) {
        document.getElementById('result').innerHTML = 'keep it up';
        document.getElementById.style.color = 'green';
      }
      if (weight<15) {
        document.getElementById('result').innerHTML = 'underweight';
        document.getElementById('result').style.color = 'red';
      }
      if (weight>20) {
        document.getElementById('result').innerHTML = 'overweight';
        document.getElementById('result').style.color = 'red';
      }
    }
    if ((age >= 8 && age <= 10))
     {
      if (weight >= 21 && weight <= 25) {
        document.getElementById('result').innerHTML = 'keep it up';
        document.getElementById.style.color = 'green';
      }
      if (weight<21) {
        document.getElementById('result').innerHTML = 'underweight';
        document.getElementById('result').style.color = 'red';
      }
      if (weight>25) {
        document.getElementById('result').innerHTML = 'overweight';
        document.getElementById('result').style.color = 'red';
      }
    }
    if ((age >= 11 && age <= 15))
     {
      if (weight >= 26 && weight <= 30) {
        document.getElementById('result').innerHTML = 'keep it up';
        document.getElementById.style.color = 'green';
      }
      if (weight<26) {
        document.getElementById('result').innerHTML = 'underweight';
        document.getElementById('result').style.color = 'red';
      }
      if (weight>30) {
        document.getElementById('result').innerHTML = 'overweight';
        document.getElementById('result').style.color = 'red';
      }
    }
    
    if (age >= 16 && age <= 20) {
      if (weight >= 31 && weight <= 40) {
        document.getElementById('result').innerHTML = 'keep it up';
        document.getElementById('result').style.color = 'green';
      }
      if (weight<31) {
        document.getElementById('result').innerHTML = 'underweight';
        document.getElementById('result').style.color = 'red';
      }
      if (weight>40) {
        document.getElementById('result').innerHTML = 'overweight';
        document.getElementById('result').style.color = 'red';
      }
    }
}
