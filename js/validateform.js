
    function validateform() {
      var inputname = document.getElementById('name')
      var inputemail = document.getElementById('email')
      var inputmsg = document.getElementById('message')
      var errorname = document.getElementById('error-name')
      var erroremail = document.getElementById('error-email')
      var errormsg = document.getElementById('error-msg')
      alert('Form submitted successfully!')
       

      if (inputname.value == '') {
        errorname.innerHTML='please fill required field'
      } else {
        errorname.innerHTML=''
      }

      if (inputemail.value == '') {
        erroremail.innerHTML='please fill required field'
      } else {
        erroremail.innerHTML=''
      }

      if (inputmsg.value == '') {
        errormsg.innerHTML='please fill required field'
      } else {
        erroremail.innerHTML=''
      }
    }

  //   function validateform() {
  //     var submsg = document.getElementById('submit');
  //     submsg.innerHTML='form is submitted'
  // }
    
