class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoins = new StatusBarCoins();
    statusBarBottlesQuantity = new StatusBarBottlesQuantity();
    statusBarBottles = new StatusBarBottles();
    statusBarBoss = new StatusBarBoss();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollosions();
            this.checkThrowobjects();
        }, 100);
    }

    checkThrowobjects(){
        if (this.statusBarBottlesQuantity.indicator < 5) {
            this.keyboard.SPACE = false;
        }
        else if(this.keyboard.SPACE) {
            if (this.character.bottles > 0) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.character.bottles--;
                this.statusBarBottles.setPercentage(this.character.bottles);
                this.statusBarBottlesQuantity.bottleTimer();
            }
 
        }
    }

    checkCollosions () {
        
        //Bottle Endboss Collosion (hit)

        this.throwableObjects.forEach(bottle => {
            if (this.level.endboss[0].isColliding(bottle)) {
                bottle.bottleHit();
                this.level.endboss[0].bottle_hit = true;
                bottle_splash_sound.play();
                this.level.endboss[0].energy--;
                //Activate to show the boss energy in Console
                    //console.log(this.statusBarBoss.percentage);
                this.statusBarBoss.setPercentage(this.level.endboss[0].energy);
            }
        });

        //Enemy Character Collosion (hit)

        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isColliding(enemy) ) {
                if (!this.character.isAboveGround() && !enemy.dead && !this.character.isOverEnemy){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);

            }else if(this.character.isAboveGround() && this.character.isOverEnemy && !enemy.dead){
                    enemy.dead = true;
                    enemy.enemyIsDead();
                    
            }};
            
            if(this.character.isDead()) {
                //Game Over
                this.character.pepeDies();
            }
        });

        //Endboss Character Collosion (hit)

        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            };

        });

        //Coin Character Collosion (take)

        this.level.coins.forEach((coins, i) => {
            if (this.character.isColliding(coins)) {
                this.character.takeCoin();
                this.level.coins.splice(i, 1);
                coin_sound.play();
                this.statusBarCoins.setPercentage(this.character.coins);
            }
        });

        //Bottle Character Collosion (take)

        this.level.bottles.forEach((bottles, i) => {
            if (this.character.isColliding(bottles)) {
                this.character.takeBottle();
                this.level.bottles.splice(i, 1);
                bottle_take_sound.play();
                this.throwableObjects.bottle ++;
                this.statusBarBottles.setPercentage(this.character.bottles);
            }
        });


  }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);        
        this.addObjectsToMap(this.level.backgroundObjects);      
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottlesQuantity);
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.statusBarBoss);

        this.ctx.translate(this.camera_x , 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => {
            this.draw();
        });

    }
    
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        //To show hitbox activate this two methods

        // mo.drawFrame(this.ctx);
        // mo.drawFrameRed(this.ctx);
        
     
        
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack (mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}



