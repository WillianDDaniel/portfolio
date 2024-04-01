document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById('recaptcha').style.display = 'flex'

    Array.from(document.getElementsByClassName('form-group')).forEach((element) => {
        element.style.display = 'none'
    })
    document.getElementById('button-submit').style.display = 'none'
})