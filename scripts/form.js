    const scriptURL = 'https://script.google.com/macros/s/AKfycbxGd0e3ep0UhTe4UhD0FrwScX-APC9Oi8KO9Kcnj3QOPF_DylWt/exec'
    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
      e.preventDefault();
      swal({
        title: "Your Contact updated to me !!",
        text: "Thank You for sharing Your message !",
        icon: "success",
        button: "OK",
      });
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        document.getElementById('myInput').value ='Full Name';
        document.getElementById('myInput1').value ='Contact Name';
        document.getElementById('myInput2').value ='Email Id';
        document.getElementById('myInput3').value ='Your Message';

    })
