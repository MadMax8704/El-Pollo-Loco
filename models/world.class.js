class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoins = new StatusBarCoins();
    statusBarBottles = new StatusBarBottles();
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
        }, 200);
    }

    checkThrowobjects(){
        if(this.keyboard.SPACE) {
            if (this.character.bottles > 0) {
                
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.character.bottles--;

            }
        }
    }

    checkCollosions () {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });

        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });

        this.level.coins.forEach((coins, i) => {
            if (this.character.isColliding(coins)) {
                this.character.takeCoin();
                this.level.coins.splice(i, 1);
                coins.coin_sound.play();
                this.statusBarCoins.setPercentage(this.character.coins);
            }
        });

        this.level.bottles.forEach((bottles, i) => {
            if (this.character.isColliding(bottles)) {
                this.character.takeBottle();
                this.level.bottles.splice(i, 1);
                bottles.bottle_take_sound.play();
                this.statusBarBottles.setPercentage(this.character.bottles);
            }
        });
  }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x , 0);
        this.addObjectsToMap(this.level.backgroundObjects);



        this.ctx.translate(-this.camera_x , 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottles);
        this.ctx.translate(this.camera_x , 0);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
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
        mo.drawFrame(this.ctx);
        mo.drawFrameRed(this.ctx);
        
     
        
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



