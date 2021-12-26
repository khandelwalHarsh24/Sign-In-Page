const btn = document.getElementsByClassName('btn1');
const formAlertDOM = document.querySelector('.form-alert')
const nameinput = document.getElementsByClassName('userdata');
const emailinput = document.getElementsByClassName('emaildata');




btn[0].addEventListener('click', async (e) => {
  e.preventDefault();
  const username = nameinput[0].value;
  const email = emailinput[0].value;
  const obj = { username, email };
  let options = {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  }
  try {
    const tasks = await fetch('/api/data', options)
    if (username == '' || email == '') {
      alert("Please provide all details")
    }
    else {
      nameinput[0].value = ''
      emailinput[0].value = ''
      formAlertDOM.style.display = 'block'
      formAlertDOM.textContent = `Welcome ${username} You are Succesfully signed in`
      formAlertDOM.classList.add('text-success')

    }
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)

})
