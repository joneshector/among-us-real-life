/**
 * Socket and game start behaviour
 */
const socket = io({
	query: {
		role: 'ADMIN'
	}
});

const startGame$ = document.querySelector('#start-game');

startGame$.addEventListener('click', () => {
	socket.emit('start-game-probe');
	socket.on('game-started', function () {
		socket.emit('start-game');
		let startButton = document.getElementById("start-game");
		startButton.style.color = "darkgray";
		startButton.style.background = "gray";
		startButton.innerText = "Game Started";
		let taskSection = document.getElementById("task-management");
		taskSection.style.display = "none";
	})
});

/**
 * Adding tasks
 */

const inputBox = document.getElementById("task-input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (inputBox.value === '') {
		console.log('no task added');
	}
	else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		li.id = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		span.style.color = "red";
		li.appendChild(span);
		socket.emit('add-task', { task: inputBox.value});
		console.log('new task added: ' + inputBox.value);
	}
	inputBox.value = "";
	// saveData();
}

listContainer.addEventListener("click", function(e) {
	if (e.target.tagName === "SPAN") {
		let taskToRemove = e.target.parentElement.id;
		e.target.parentElement.remove();
		socket.emit('remove-task', {task: taskToRemove})
		console.log('task removed: ' + taskToRemove);
		// saveData();
	}
}, false);

// // to remove
// function saveData() {
// 	localStorage.setItem("data", listContainer.innerHTML);
// }

// // to remove
// function showTasks() {
// 	listContainer.innerHTML = localStorage.getItem("data");
// }

// showTasks();

/**
 * Sounds
 */

async function wait(milliseconds) {
	await new Promise(resolve => {
		setTimeout(() => resolve(), milliseconds);
	});
}

const SOUNDS = {
	meeting: new Audio('/sounds/meeting.mp3'),
	sabotage: new Audio('/sounds/sabotage.mp3'),
	start: new Audio('/sounds/start.mp3'),
	sussyBoy: new Audio('/sounds/sussy-boy.mp3'),
	voteResult: new Audio('/sounds/vote-result.mp3'),
	youLose: new Audio('/sounds/you-lose.mp3'),
	youWin: new Audio('/sounds/you-win.mp3')
};

socket.on('play-meeting', async () => {
	await SOUNDS.meeting.play();
	await wait(2000);
	await SOUNDS.sussyBoy.play();
});

socket.on('play-win', async () => {
	await SOUNDS.youWin.play();
});
