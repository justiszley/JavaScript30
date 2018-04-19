const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('yos')

// Interpolated
console.log('hello! i\'m a %s', 'developer') // may be replaces with ES6-brackets

// Styled
console.log('%chello! i\'m a%s', 'font-size: 20px; background: pink; padding: 10px; color: white', 'developer')
console.log('%chello! i\'m a developer', 'font-size: 20px; background: pink; padding: 10px; color: white; text-shadow: 5px 3px 0 blue') // different spans defore 'developer'

// warning!
console.warn('a problem occured')

// Error :|
console.error('you should check it!')

// Info
console.info('you should prepere for exams ._.')

// Testing
const p = document.querySelector('p');
const className = 'green';
console.assert(p.classList.contains(className), p, `doesn't contain class ${className}`)

// clearing
// console.clear()

// Viewing DOM Elements
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(dog.name)
        console.log(`This good boy is called ${dog.name}`)
        console.log(`He is ${dog.age} years old`)
    console.groupEnd(dog.name)
})

// counting
// console.count('yos')
// console.count(p)
// console.count('yos')
// console.count(p)
// console.count(p)
// console.count('yos')
// console.count('yos')

// timing
console.time('fetching')
fetch('https://api.github.com/users/justiszley')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching')
        console.log(data)
    })

console.table(dogs)