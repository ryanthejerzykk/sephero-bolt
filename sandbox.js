//Programer:Ryan the Jerzyk
//Date: 1.10.2024
//Program: Sphero Bolt Testing
//Bolt ID: CF6D

async function startProgram() {
	await speak("Hello World", true);
	setMainLed({r:0, g: 0, b: 255 });
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}


//Square w/ diffrent colors for each line
async function startprogram(){
for (var _i1 = 0; _i1 < 4; _i1++) 
	setMainLed(getRandomColor())
	await delay(1)
	await spin (90, 2)
	

}






//Square w/ diffrent colors and sound for each line





//Figure 8 