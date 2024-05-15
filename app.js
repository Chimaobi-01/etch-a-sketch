const app = document.querySelector('#root')

const button = document.createElement('button')
button.textContent = "customize squares"
app.appendChild(button)

const container = document.createElement('div')
container.setAttribute('id', 'container')
app.appendChild(container)

const ROWS = 16
const COLUMNS = 16
for (let i = 0; i < ROWS; i++) {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', `row${i}`)
    rowElement.classList.add('box')
    for (let j = 0; j < COLUMNS; j++) {
        const columnElement = document.createElement('div')
        columnElement.setAttribute('id', `row${i}-col${j}`)
        rowElement.appendChild(columnElement)

    }
    container.appendChild(rowElement)
}

container.addEventListener('mouseover', e => {
    const target = e.target
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            if (target.id === `row${i}-col${j}`) {
                target.classList.toggle('blue')
            }
        }

    }
})

container.addEventListener('mouseout', e => {
    const target = e.target
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            if (target.id === `row${i}-col${j}`) {
                target.classList.toggle('blue')
            }
        }

    }
})

button.addEventListener('click', (e) => {
    const gridContainer = e.target.nextElementSibling
    const num = prompt('Enter your desired number of grid. Maximum of 100')
    if(!num){
        alert('Opration cancelled!')
        return
    }
    if (isNaN(num)) {
        alert("Failed. Enter a number!");
        return
    }
    if (Number(num) > 100) {
        alert('Cancelled. Maximun number allowed is 100')
        return
    }
    app.removeChild(gridContainer)
    const customContainer = document.createElement('div')
    customContainer.setAttribute('id', 'container')
    const numToInt = Number(num)

    for (let i = 0; i < numToInt; i++) {
        const rowElement = document.createElement('div')
        rowElement.setAttribute('id', `row${i}`)
        rowElement.classList.add('box')
        for (let j = 0; j < numToInt; j++) {
            const columnElement = document.createElement('div')
            columnElement.setAttribute('id', `row${i}-col${j}`)
            rowElement.appendChild(columnElement)
    
        }
        customContainer.appendChild(rowElement)
    }

    customContainer.addEventListener('mouseover', e => {
        const target = e.target
        for (let i = 0; i < numToInt; i++) {
            for (let j = 0; j < numToInt; j++) {
                if (target.id === `row${i}-col${j}`) {
                    target.classList.toggle('blue')
                }
            }
    
        }
    })
    
    customContainer.addEventListener('mouseout', e => {
        const target = e.target
        for (let i = 0; i < numToInt; i++) {
            for (let j = 0; j < numToInt; j++) {
                if (target.id === `row${i}-col${j}`) {
                    target.classList.toggle('blue')
                }
            }
    
        }
    })

    app.appendChild(customContainer)

})

