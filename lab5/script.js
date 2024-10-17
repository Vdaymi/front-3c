const form = document.querySelector('.form-input');

form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const outputDiv = document.querySelector('.sent-data');
        outputDiv.innerHTML = ` `;

        const data = new FormData(form).entries();

        const jsonData = data.reduce((acc, [key, val]) => {
            acc[key] = val;
            return acc;
        }, {});

        const isFormValid = formValidation(jsonData);

        if (isFormValid) {
            outputDiv.innerHTML = `
                <p>ПІБ: ${jsonData.name}</p>
                <p>Дата народження: ${jsonData.birthdate}</p>
                <p>Адреса: ${jsonData.address}</p>
                <p>Електронна адреса: ${jsonData.email}</p>
                <p>Telegram: ${jsonData.telegram}</p>
            `;
        }
    }
);

function formValidation(data) {
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('input-error');
    });
    document.querySelectorAll('.error-message').forEach(span => {
        span.innerHTML = `&nbsp;`;
    });

    let isValid = true;

    if (!(/\p{Alpha}{2,}\s\p{Alpha}\.\p{Alpha}\./u.test(data.name))) {
        document.getElementById('name-error').textContent = 'Некоректний запис. Приклад: "Шевченко Т.Г."';
        document.getElementById('name').classList.add('input-error');
        isValid = false;
    }

    if (!(/\b\d{2}\.\d{2}\.\d{4}\b/.test(data.birthdate))) {
        document.getElementById('birthdate-error').textContent = 'Некоректний запис. Приклад: 01.01.2000';
        document.getElementById('birthdate').classList.add('input-error');
        isValid = false;
    }

    if (!data.address || !(/м\.\s\p{Alpha}{3,}/u.test(data.address))) {
        document.getElementById('address-error').textContent = 'Некоректний запис. Приклад: "м. Київ"';
        document.getElementById('address').classList.add('input-error');
        isValid = false;
    }

    if (!(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(data.email))) {
        document.getElementById('email-error').textContent = 'Некоректний запис. Приклад: "example@mail.com"';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    }

    if (!(/^@\p{Alpha}{3,}/u.test(data.telegram))) {
        document.getElementById('telegram-error').textContent = 'Некоректний запис. Приклад: "@T_TTTTT"';
        document.getElementById('telegram').classList.add('input-error');
        isValid = false;
    }

    return isValid;
}


const colorChangeCell = document.getElementById('color-change');
const colorPicker = document.getElementById('colorPicker');

colorChangeCell.addEventListener('mouseover', (e) => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
     
    e.target.style.backgroundColor = color;
});

colorChangeCell.addEventListener('click', () => {
    colorPicker.click();
});

colorChangeCell.addEventListener('dblclick', (e) => {
    let selectedColor = colorChangeCell.style.backgroundColor;
    const row = 0; 
    const col = 5; 

    for (let c = 0; c < 6; c++) {
        const cellInRow = document.querySelector(`tr:nth-child(${row + 1}) td:nth-child(${c + 1})`);
        cellInRow.style.backgroundColor = selectedColor;
    }
    for (let r = 0; r < 6; r++) {
        const cellInCol = document.querySelector(`tr:nth-child(${r + 1}) td:nth-child(${col + 1})`);
        cellInCol.style.backgroundColor = selectedColor;
    }
    const lastRowIndex = 6;
    for (let c = 0; c < 6; c++) {
        const lastRowCell = document.querySelector(`tr:nth-child(${lastRowIndex}) td:nth-child(${c + 1})`);
        lastRowCell.style.backgroundColor = selectedColor;
    }
    for (let r = 0; r < 6; r++) {
        const firstColCell = document.querySelector(`tr:nth-child(${r + 1}) td:nth-child(1)`);
        firstColCell.style.backgroundColor = selectedColor;
    }
});

colorPicker.addEventListener('input', (e) => {
    colorChangeCell.style.backgroundColor = e.target.value;
});
