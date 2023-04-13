document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(document.querySelector('#new-task-description').value)
    form.reset()
  })
});

function buildTask(newTask){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${newTask} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}