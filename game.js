window.onload = (event) => {
	let game = new Game({
		elements : [{
			name : "gui",
			class : Gui,
			data : {
			}
		}]
	})
	
	if (!game.load("autoSave"))
		game.reset()
	
	let worker = new Worker ("gameWorker.js")
	
	let readyMessage = {
		name : "ready"
	}
	
	worker.onmessage = (event) => {
		let data = event.data
		if (data.name == "next") {
			processGame()
			worker.postMessage(readyMessage)
		}
		if (data.name == "offline") {
			game.generator.offlineProgress(data.time)
			processGame()
			worker.postMessage(readyMessage)
		}
	}

	worker.postMessage(["start", 0])
}