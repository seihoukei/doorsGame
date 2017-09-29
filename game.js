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
}