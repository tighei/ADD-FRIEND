const addBtn = document.querySelector('.btn-add');
const form = document.querySelector('.form-card');
const fname = document.querySelector('#name');
const lname = document.querySelector('#last-name');
const OwnerLocation = document.querySelector('#place-owner');
const SubmitBtn = document.querySelector('#submit');
const myFriends = [];
const cardContainer = document.querySelector('.card-container');

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
    diva.innerHTML = `<img src="IMG_20221031_142636_805.jpg" alt="profile-pic" />
    <h2>${myFriends[i].n} ${myFriends[i].l}</h2>
    <div id="place-d">
      <i class="fa-solid fa-location-dot"></i>
      <p>${myFriends[i].lo}</p>
    </div>
    <input type="button" name="act-button" id="btn-act" value="Add Friend" />
        `;
    diva.classList.add('card');
    cardContainer.appendChild(diva);
    myFriends.splice(i, 1);
  }
}

function addfriend() {
  const addfr = new Friend(fname.value, lname.value, OwnerLocation.value);
  myFriends.push(addfr);
  render();
}

SubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addfriend();
  form.style.display = 'none';
  fname.value = '';
  lname.value = '';
  OwnerLocation.value = '';
});
