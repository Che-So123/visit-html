document.addEventListener('DOMContetLoaded', function() {
    fetch('example.json')
    .then(response => response.json())
    .then(example => {
        const Name = document.getElementById('name')
        example.forEarch(item => {
            const exampleItem = document.createElement('div')
            exampleItem.className = 'crah'

            const idItem = document.createElement('h1')
            idItem.textContent = item.idItem
        }
    })
})