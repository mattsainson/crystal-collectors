
var game = {
    wins: 0,
    losses: 0,
    targetNum: 0,
    crystalVals: [],
    score: 0,

    start: function() { //refresh page
        wins = 0;
        losses = 0;
        this.newGame(); 
    },

    newGame: function () { //new targetNum
        this.score = 0;
        this.crystalVals = [];
        //get random target 19-120
        this.targetNum = this.getRndInteger(19,120);
        //get four random nums 1-12
        for(var i=0;i<4;i++) {
            this.crystalVals.push(this.getRndInteger(1,12));
        }
        console.log(this.crystalVals);
        this.showPage(); //show page
    },

    doCrystal: function (idx) {
        console.log(idx);
        this.score += this.crystalVals[idx];
        if(this.score === this.targetNum) { //win, add wins, start new
            this.wins++;
            this.newGame();
        } else if (this.score > this.targetNum) { //lose, add losses, start new
            this.losses++;
            this.newGame();
        } else {
            //keep going
            this.showPage();
        }
    },

    showPage: function () {
        //do jQuery preso stuff
        $('#targetNum').html(this.targetNum);
        $('#wins').html('Wins: '+this.wins);
        $('#losses').html('Losses: '+this.losses);
        $('#score').html(this.score);
    },

    getRndInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },

};

//start the game
game.start();

//click a crystal
$('.crystalimg').click(function(){game.doCrystal(this.id);});