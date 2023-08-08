const addBtn = document.querySelector('.btn-add');
const form = document.querySelector('.form-card');
const fname = document.querySelector('#name');
const lname = document.querySelector('#last-name');
const OwnerLocation = document.querySelector('#place-owner');
const SubmitBtn = document.querySelector('#submit');
const myFriends = [];

addBtn.addEventListener('click', () => {
  form.style.display = 'flex';
});

class Friend {
  constructor(name, lastna, locc) {
    this.n = name;
    this.l = lastna;
    this.lo = locc;
  }
}
function render() {
  for (let i = 0; i < myFriends.length; i++) {
    const diva = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', 'IMG_20221031_142636_805.jpg');
    const fullName = document.createElement('h2');
    fullName.innerHTML = `${Friend.n} `;

    diva.append(image, fullName);

    diva.classList.add('card');
    document.body.append(diva);
    myFriends.splice(i, 1);
  }
}

function addfriend() {
  const addfr = new Friend(fname.value, lname.value, OwnerLocation.value);
  myFriends.push(addfr);
  console.log(myFriends);
  console.log(lname.value);
  render();
}

SubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addfriend();
});
