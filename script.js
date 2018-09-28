//FENCINGJS
//By Nick Farrell
//2018
//Foil > Epee 
//Epee > Sabre
//Sabre > Foil
async function welcomeMessage() {
    document.getElementById("playerInput").style.display = "none";
    addToMatchLog("Good luck!");
    addToMatchLog("First fencer to reach five points wins.");
    addToMatchLog("Foil defeats Epee.");
    addToMatchLog("Epee defeats Sabre.");
    addToMatchLog("Sabre defeats Foil.");
    addToMatchLog("To begin, select a weapon.");
    addToMatchLog("Welcome to FencingJS.");
    document.getElementById("playerInput").style.display = "";

}

welcomeMessage();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//give a point to wht winning fencer

//prompt for the next round

const bout = {
    fencer1Score: 0,
    fencer2Score: 0,
    fencer1Point: async function() {
        console.log("Fencer 1 scored a touch!");
        addToMatchLog("Player, touch!", "green")
        this.logScore();
        blinkGreenFlag();
        this.fencer1Score++;
        fencer1ScoreDisplay.innerText++;
        if (this.fencer1Score > 4) {
            console.log("You won!");
            window.alert("You won!");
            this.resetScore();
            clearMatchLog();
        }
    },
    fencer2Point: async function() {
        this.fencer2Score++;
        console.log("Your opponent scored a touch!");
        addToMatchLog("Computer, touch!", "red");
        this.logScore();
        blinkRedFlag();
        fencer2ScoreDisplay.innerText++;
        if (this.fencer2Score > 4) {
            console.log("You lost.");
            window.alert("You lost.");
            this.resetScore();
            clearMatchLog();
        }
    },

    //Select Epee
    selectEpee: async function() {
        document.getElementById("playerInput").style.visibility = "hidden";
        addToMatchLog(" >  ");
        let fencer1Selection = "Epee";
        addToMatchLog("Ready?");
        await sleep(1000);
        addToMatchLog("Fence!");
        await sleep(700);
        console.log("Player selected Epee.");
        addToMatchLog("You selected Epee.");
        await sleep(700);

        let fencer2Selection = this.fencer2Selection();
        console.log("Computer selected " + fencer2Selection + ".");
        addToMatchLog("Computer selected " + fencer2Selection + ".");
        await sleep(700);
        if (fencer2Selection === "Sabre") {
            this.fencer1Point();
        }

        if (fencer2Selection === "Foil") {
            this.fencer2Point();
        }

        if (fencer2Selection === "Epee") {
            let y = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            if (y > 50) {
                this.fencer2Point();
            } else {
                this.fencer1Point();
            }
        }
        await sleep(1500);
        document.getElementById("playerInput").style.visibility = "";
    }, // /function, select epee

    //Select Foil
    selectFoil: async function() {
        document.getElementById("playerInput").style.visibility = "hidden";
        addToMatchLog(">");
        let fencer1Selection = "Foil";
        addToMatchLog("Ready?");
        await sleep(1000);
        addToMatchLog("Fence!");
        await sleep(700);
        console.log("Player selected Foil.");
        addToMatchLog("You selected Foil.");
        await sleep(700);

        let fencer2Selection = this.fencer2Selection();
        console.log("Computer selected " + fencer2Selection + ".");
        addToMatchLog("Computer selected " + fencer2Selection + ".");
        await sleep(700);

        if (fencer2Selection === "Sabre") {
            this.fencer2Point();
        }

        if (fencer2Selection === "Epee") {
            this.fencer1Point();
        }

        if (fencer2Selection === "Foil") {
            let y = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            if (y > 50) {
                this.fencer2Point();
            } else {
                this.fencer1Point();
            }
        }
        await sleep(1500);
        document.getElementById("playerInput").style.visibility = "";
    }, // /Funciton, Select Foil

    //Complete!
    //Select Sabre
    selectSabre: async function() {
        document.getElementById("playerInput").style.visibility = "hidden";
        addToMatchLog(">");
        let fencer1Selection = "Sabre";

        addToMatchLog("Ready?");
        await sleep(1000);
        addToMatchLog("Fence!");
        await sleep(700);

        console.log("Player selected Sabre.");
        addToMatchLog("You selected Sabre.");
        await sleep(700);

        let fencer2Selection = this.fencer2Selection();
        console.log("Computer selected " + fencer2Selection + ".");
        addToMatchLog("Computer selected " + fencer2Selection + ".");
        await sleep(700);

        if (fencer2Selection === "Epee") {
            this.fencer2Point();
        } // /if

        if (fencer2Selection === "Foil") {
            this.fencer1Point();
        } // /if

        if (fencer2Selection === "Sabre") {
            let y = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            if (y > 50) {
                this.fencer2Point();
            } // /if
            else {
                this.fencer1Point();
            } // /else
        }
        await sleep(1500);
        document.getElementById("playerInput").style.visibility = "";
    }, // /Function, Select Sabre

    resetScore: function() {
        this.fencer1Score = 0;
        fencer1ScoreDisplay.innerHTML = 0;
        this.fencer2Score = 0;
        fencer2ScoreDisplay.innerHTML = 0;
        this.logScore();
    },

    fencer2Selection: function() {
        let x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (x === 1) {
            return "Foil";
        }
        if (x === 2) {
            return "Epee";
        }
        if (x === 3) {
            return "Sabre";
        }
    },

    logScore: function() {
        console.log("Fencer 1 Score: " + this.fencer1Score);
        //addToMatchLog("Fencer 1 Score: " + this.fencer1Score);
        console.log("Fencer 2 Score: " + this.fencer2Score);
        //addToMatchLog("Fencer 2 Score: " + this.fencer2Score);
    }
};


const fencer1ScoreDisplay = document.getElementById('fencer1ScoreDisplay');

let handlers = {
    selectFoilButton: function() {
        bout.selectFoil();
    },
    selectEpeeButton: function() {
        bout.selectEpee();
    },
    selectSabreButton: function() {
        bout.selectSabre();
    },
};

function addToMatchLog(message, color) {
    const matchLog = document.getElementById("log");
    let newItem = document.createElement("li");
    newItem.style.color = color;
    newItem.innerHTML = message;
    matchLog.insertBefore(newItem, matchLog.childNodes[0]);
}

function clearMatchLog() {
    let matchLog = document.getElementById("log");
    matchLog.innerHTML = "";
}

async function blinkRedFlag() {


}

async function blinkGreenFlag() {
    document.getElementById("greenFlag").style.background = "#04ff00"
    await sleep(1500);
    document.getElementById("greenFlag").style.background = "#2c592a"
}

async function blinkRedFlag() {
    document.getElementById("redFlag").style.background = "#ff0000"
    await sleep(1500);
    document.getElementById("redFlag").style.background = "#820000"
}