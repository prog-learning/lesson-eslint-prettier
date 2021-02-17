// console.log("double")
console.log('double');

type Name = string

const hello = (name: Name) => {
  document.body.textContent = 'Hello, ' + name + '!!';
};

hello('eslint typescript');
