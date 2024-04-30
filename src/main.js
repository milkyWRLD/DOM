// Создание игрового поля
const gameField = document.createElement('div')
gameField.style.width = '400px'
gameField.style.height = '400px'
gameField.style.display = 'grid'
gameField.style.gridTemplateColumns = 'repeat(4, 1fr)'
gameField.style.gridTemplateRows = 'repeat(4, 1fr)'
document.getElementById('game').appendChild(gameField)

// Создание персонажа
const characterImg = document.createElement('img')
characterImg.src = './img/goblin.png'
characterImg.style.width = '100px'
characterImg.style.height = '100px'
characterImg.style.gridRowStart = '1'
characterImg.style.gridColumnStart = '1'
gameField.appendChild(characterImg)

// Функция для генерации случайного числа от 1 до 4
function getRandomPosition() {
	return Math.floor(Math.random() * 4) + 1
}

// Перемещение персонажа
setInterval(() => {
	characterImg.style.gridRowStart = getRandomPosition()
	characterImg.style.gridColumnStart = getRandomPosition()
}, 1000)
