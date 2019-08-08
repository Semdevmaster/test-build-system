import summ from './modules/summ.js'

const name = 'Hello Sem'
console.log(name)
summ(2, 7)

document.addEventListener('click', ({ target }) => {
  console.log(target)
})
