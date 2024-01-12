const scriptURL = 'https://script.google.com/macros/s/AKfycbzcs0PE4nkx1nPXAOIwG4-z8rCAI5-apuVMrtUkx61IxkH9AdlhClOLQI18yCgdo_xiCw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    const subs = document.getElementById('subs')


    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          // msg.innerHTML = "thankyou for subscribing"
          newsletter.innerHTML = "Thank you! Your submission has been received!"
          form.reset()
          newsletter.style.fontSize = "18px"
          newsletter.style.lineHeight = "30px"
          newsletter.style.fontWeight = 300;
          newsletter.style.color = 'white'


        })
        .catch(error => console.error('Error!', error.message))
    })

    const handleclick = () => {
      subs.innerHTML = 'wait a sec..'
    }
    const btn = document.getElementById('subs');
    btn.onclick = handleclick