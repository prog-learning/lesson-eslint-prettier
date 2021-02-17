// console.log("double")
console.log('double');

type Book = {
  id: number;
  name: string;
};

const book = ({ id, name }: Book) => {
  document.body.textContent = 'ID: ' + id + ', title: ' + name;
};
const myBook = {
  id: 123,
  name: 'programming',
};

book(myBook);
