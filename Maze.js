//start
async function startProgram() {
	await speak("START", true);
	await scrollMatrixText('start', {r: 50, g: 50, b: 50}, 30, true)

	
//blue checpoint
	await delay(1)
	await roll(0,142,1)
	await delay (1)
	await setMainLed({r:0,g:0,b:255})
// first sound
	await delay (1)
	await roll(90,53,2)
	await Sound.Effects.Explosion.play(true)
//red checkpoint
	await roll(180,40,2)
	await delay(1)
	await roll(220,41,2)
	await setMainLed({r:225,g:0,b:0})
}

