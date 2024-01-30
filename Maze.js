//start
async function startProgram() {
	await speak("START", true);
	await scrollMatrixText('start', {r: 50, g: 50, b: 50}, 30, true)

	
//blue checpoint
	await delay(1)
	await roll(0,145,1)
	await delay (1)
	await setMainLed({r:0,g:0,b:255})
// first sound
	await delay (1)
	await roll(90,52,2)
	await Sound.Effects.Explosion.play(true)
//red checkpoint
	await roll(180,50,1.5)
	await delay(1)
	await roll(220,47,1.5)
	await setMainLed({r:225,g:0,b:0})
//sound two
	await delay(1)
	await roll(850,25,3)
	await delay(1)
	await roll(400,42,1.5)
	await Sound.Animal.Eagle.play(true)
// green checkpoint
	await delay(1)
	await roll (140,40,1.5)
	await delay(1)
	await roll (180,25,1.5)
	await delay(1)
	await roll (90,55,1)
	await setMainLed({r:0,g:255,b:0})
	
}

