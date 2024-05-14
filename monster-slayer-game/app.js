function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function healthEnd(e) {
    if(e < 0) {
        return {width: '0%'};
    } else {
        return {width: e + '%'};
    }
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            surrender: false,
            winner: null,
            logMessages: [],
        };
    },
    computed:{
        monsterBarStyles() {
            return healthEnd(this.monsterHealth);
        },
        playerBarStyles() {
            return healthEnd(this.playerHealth);
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        gameEnded() {
            return this.winner !== null;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'player';
        }
        }
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.surrender = false;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
        },
        attackPlayer() {
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player', 'special-attack', attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(10,20);
            if(this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else{
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.addLogMessage('player', 'heal', healValue);
        },
        surrenderGame() {
            this.surrender = true;
            if(this.surrender===true) {
                this.winner = 'monster';
            }
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});


app.mount('#game');
