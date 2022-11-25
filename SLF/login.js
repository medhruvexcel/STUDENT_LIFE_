const name = document.getElementById('name')
const email =  document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  if (email.value.length <= 6) {
    messages.push('email must be longer than 6 characters')
  }
  if (email.value.length >= 25) {
    messages.push('email must be less than 25 characters')
  }
  if (email.value === 'email') {
    messages.push('email cannot be email')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})