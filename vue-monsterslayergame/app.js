const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logs: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterBarWidth() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'};
        },
        playerBarWidth() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'};
        },
        specialAttackTrack() {
            return this.currentRound % 3;
        }
    },
    methods: {
        attackMonster() {
            this.incrementRound();
            const dmg = getRandomValue(5, 12);
            this.monsterHealth -= dmg;
            this.addLogMsg('player', 'deals damage of', dmg)
            this.attackPlayer();
        },
        attackPlayer() {
            this.incrementRound();
            const dmg = getRandomValue(8, 15);
            this.playerHealth -= dmg;
            this.addLogMsg('monster', 'deals damage of', dmg)
        },
        specialAttack() {
            this.incrementRound();
            const dmg = getRandomValue(10, 25);
            this.monsterHealth -= dmg;
            this.addLogMsg('player', 'deals damage of', dmg)
            this.attackPlayer()
        },
        healPlayer() {
            this.incrementRound();
            const heal = getRandomValue(10, 20);
            if(this.playerHealth + heal > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += heal;
            }
            this.addLogMsg('player', 'heals of', heal)
            this.attackPlayer();
        },
        incrementRound() {
            this.currentRound++;
        },
        surrender() {
            this.winner = 'monster';
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            logs = []
        },
        addLogMsg(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value 
            });
        }
    }
});
app.mount('#game');

getRandomValue = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}