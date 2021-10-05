const teamContainer = document.querySelector('#team');
const team = [
    {
        name: 'Uziel Meliton Hernandez',
        email: 'uzielmelitonh@gmail.com'
    },
    {
        name: 'Jacob medina cruz',
        email: 'jacob@gmail.com'
    },
        name: 'Ejemplo',
        email: 'ejemplo@gmail.com'
    }
]


const render = () => {
    let content = '';
    team.forEach(item => {
        content += `<li>${item.name} - ${item.email}</li>`
    })

    teamContainer.innerHTML = content;
}

render();