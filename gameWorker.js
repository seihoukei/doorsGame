let lastTime = performance.now()

function nextFrame() {
	let timeSince = performance.now() - lastTime

	if (timeSince > 5000){
		lastTime = performance.now()
		postMessage({
			name : "offline",
			time : timeSince
		})
		return
	}
	setTimeout(() => {
		lastTime = performance.now()
		postMessage({
			name : "next", 
		})
	}, Math.max(1, 16.66 - timeSince))
}

onmessage = function(event) {
	let {name = "", data} = event.data
	switch (name) {
		case "start":
			lastTime = performance.now()
			nextFrame()
			
			break
			
		case "ready":
			nextFrame()	

			break
	}
}