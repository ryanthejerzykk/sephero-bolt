//start
async function startProgram() {
	await speak("START", true);
	await scrollMatrixText('start', {r: 50, g: 50, b: 50}, 30, true)

	
//blue checpoint
	await delay(1)
	await roll(0,140,1)
	await delay (1)
	await setMainLed({r:0,g:0,b:255})
// first sound
	await delay (1)
	await roll(90,50,2)
	await Sound.Effects.Explosion.play(true)
//red checkpoint
	await roll(180,44,1.5)
	await delay(1)
	await roll(220,44,1.5)
	await setMainLed({r:225,g:0,b:0})
//sound two
	await delay(1)
	await roll(850,42,1.5)
	await delay(1)
	await roll(400,40,1.5)
	await Sound.Animal.Eagle.play(true)
// green checkpoint
	await delay(1)
	await roll (140,40,1.5)
	await delay(1)
	await roll (180,40,1.5)
	await delay(1)
	await roll (90,50,1)
	await setMainLed({r:0,g:255,b:0})
	
}

