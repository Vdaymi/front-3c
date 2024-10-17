const controlButton = document.querySelector('#download-controls');
const contentDiv = document.querySelector('#content');
const downloadStatus = document.querySelector('#status');

controlButton.addEventListener('click', e => getPersonsData(e));

function getPersonsData(e) {
    if (e.target && e.target.id === 'download-button') {
        downloadStatus.innerHTML = '';

        fetch('https://randomuser.me/api/?results=4')
        .then(result => result.json())
        .then(data => {
            downloadStatus.textContent = 'Success!';

            const persons = document.createElement('div');
            persons.classList.add('persons');
            data.results.map(personData => {
                const {
                    picture: { large },
                    email,
                    name: { title, first, last},
                    phone,
                    location: { city }
                } = personData;
                const person = document.createElement('div');
                person.classList.add('person');
                person.innerHTML = `
                    <img src="${large}" alt="Person photo" class="avatar">
                    <p class="email">Email: ${email}</p>
                    <p class="name">Name: ${title} ${first} ${last}</p>
                    <p class="phone">Phone number: ${phone}</p>
                    <p class="city">City: ${city}</p>
                `;
                persons.append(person);
            });
            contentDiv.innerHTML = persons.outerHTML;
        })
        .catch(error => {
            downloadStatus.innerHTML = `Error: ${error}`;
        });
    }
}
