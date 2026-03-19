console.log('test');

let d = hello;
console.log(d);

alert('hello')

function decorator(wrap, func) {
  return (...para) => {
    func(para)
    return wrap(para)
  }
}

const mylog = decorator(window.console.log, (...para)=>{
  const ul = document.querySelector(`ul[class=msg]`)
  const range = document.createRange()
  const frag = range.createContextualFragment(`<li>${para}</li>`)
  ul.append(frag)
})

mylog("Hello world!")
