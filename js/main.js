window.alert = function(message, timeout = null) {
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    
    alertButton.innerText = 'OK';
    alert.classList.add('alert');
    alert.setAttribute('style', `
        position: fixed;
        top: 300px; /* Atur posisi lebih ke bawah */
        left: 50%;
        padding: 20px;
        background: #b6895b; /* Warna coklat */
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 5px 0px #00000022;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #333;
        transform: translateX(-50%);
    `);

    alertButton.setAttribute('style', `
        border: 1px solid #333;
        background: white;
        color: black;
        border-radius: 5px;
        padding: 5px 10px;
        margin-top: 10px;
        cursor: pointer;
    `);

    alert.innerHTML = `<span style="padding: 10px">${message}</span>`;
    alert.appendChild(alertButton);

    alertButton.addEventListener('click', () => {
        alert.remove();
    });

    if (timeout != null) {
        setTimeout(() => {
            alert.remove();
        }, Number(timeout));
    }

    document.body.appendChild(alert);
};