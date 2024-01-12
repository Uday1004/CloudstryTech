
    function validateform() {
      var inputname = document.getElementById('name')
      var inputemail = document.getElementById('email')
       
      var errorname = document.getElementById('error-name')
      var erroremail = document.getElementById('error-email')
       
       
       

      if (inputname.value == '') {
        errorname.innerHTML='please fill required field'
      } else {
        errorname.innerHTML=''
        showStyledAlert();
      }

      if (inputemail.value == '') {
        erroremail.innerHTML='please fill required field'
      } else {
        erroremail.innerHTML=''
        showStyledAlert();
      }

    //   alert('Form submitted successfully');

    //  // Reset the form
    
    
     

    setTimeout(function() {
      closeAlert();
    }, 2500);
  

    
    
    function showStyledAlert() {
      document.getElementById('styledAlert').classList.remove('hidden');
    }
    
    function closeAlert() {
      document.getElementById('styledAlert').classList.add('hidden');
    }
    
    document.getElementById('yourFormId').reset();
  }



       

  //   function validateform() {
  //     var submsg = document.getElementById('submit');
  //     submsg.innerHTML='form is submitted'
  // }
    
