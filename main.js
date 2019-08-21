new Vue({
    el: '#app',
    data: {
        monsterlLife: 80,
        myLife: 80,
        monsterMessage: 'MONSTER HITS PLAYER FOR ',
        myMessage: 'PLAYER HITS MONSTER FOR ',
        HealMessage: 'PLAYER HEALS FOR ',
        messages: [

        ],
        show: true,
    },
    methods: {
        startGame: function () {
            this.monsterlLife = 100;
            this.myLife = 100;
            this.messages = [];
            this.show = !this.show;
        },
        heal: function(){
            let playerHeal = 10;
            let monsterHit = parseInt(Math.random() * 7) + 5;

            this.myLife += playerHeal - monsterHit;


            if(this.myLife >95)
                this.myLife = 95;
            
            this.messages.push(this.HealMessage+ playerHeal);
            this.messages.push(this.monsterMessage+ monsterHit);
         
        },
        giveUp: function () {
            this.monsterlLife = 80;
            this.myLife = 80;
            this.messages = [];
            this.show = !this.show;
        },
        regAttack: function () {
            let monsterHit = parseInt(Math.random() * 12) + 1;
            this.myLife -= monsterHit;
            this.messages.push(this.monsterMessage + monsterHit)

            let playerHit = parseInt(Math.random() * 10) + 1;
            this.monsterlLife -= playerHit;
            this.messages.push(this.myMessage + playerHit)

            this.funishTheGame();
        },
        specAttac: function() {
            let monsterHit = parseInt(Math.random() * 12) + 1;
            this.myLife -= monsterHit;
            this.messages.push(this.monsterMessage + monsterHit)

            let playerHit = parseInt(Math.random() * 20) + 1;
            this.monsterlLife -= playerHit;
            this.messages.push(this.myMessage + playerHit)

            this.funishTheGame();
            

        },
        funishTheGame: function(){
            if (this.monsterlLife < 0) {
                if (window.confirm('You Won! start again?')) {
                    this.startGame();
                }
                else {
                    alert('cancel')
                }
            }
            else if (this.myLife < 0) {
                if (window.confirm('You Lost! start again?')) {
                    this.startGame();
                }
                else {
                    this.show = !this.show;
                }
            }
        },
        getFirstWord: function (str) {
            let spacePosition = str.indexOf(' ');
            if (spacePosition === -1)
                return str;
            else
                return str.substr(0, spacePosition);
        }
    },
    computed: {

    }
})