//Programer:Tate Keck
//Date: 1.10.2024
//Program: Sphero Bolt Testing
//Bolt ID: CF6D

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({r:0, g: 0, b: 255 });
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/

//Square w/ diffrent colors for each line
async function startProgram(){
	setMainLed(getRandomColor());
	await roll(90, 50, 1);
	

}






//Square w/ diffrent colors and sound for each line





//Figure 8 