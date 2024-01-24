//start
async function startProgram() {
	await speak("START", true);
	await scrollMatrixText('start', {r: 50, g: 50, b: 50}, 30, true)

	
//blue checpoint
	await delay(1)
	await roll(0,130,1)
	await delay (1)
	await setMainLed({r:0,g:0,b:255})
}


//blue checkpoint

