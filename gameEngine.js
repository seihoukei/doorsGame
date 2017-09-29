class Game {
	constructor(data) {
		for (let element of data.elements) {
			if (!element.name || this[element.name]) 
				continue
			
			this[element.name] = new element.class (element.data)
		}
		
	}
	
	reset(data) {
		
	}
	
	load (slot) {
		let saveData = localStorage[slot]
		
		if (!saveData)
			return false
		
		saveData = JSON.parse(saveData)
		
		this.reset(data)
		
		return true
	}
	
	save (slot) {
		let saveData = {}
		
		localStorage[slot] = JSON.stringify(saveData)
	}
}