class World {

    character = new Character();
    endboss = new Endboss();
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

    /**
     * it checks if you have bottle to throw
     * if the bottle statusbar is comletly yellow you have nothing to throw
     */
    checkThrowobjects() {
        if (this.statusBarBottlesQuantity.indicator < 5)
            this.keyboard.SPACE = false;
        else if (this.keyboard.SPACE) {
            if (this.character.bottles > 0) {
                let bottle = new ThrowableObject(this.character.x + 10, this.character.y + 110);
                this.throwableObjects.push(bottle);
                this.character.bottles--;
                this.statusBarBottles.setPercentage(this.character.bottles);
                this.checkFirstBottle();
            }
        }
    }

    checkFirstBottle() {
        if (!this.character.bottles == 0)
            this.statusBarBottlesQuantity.bottleTimer();
        else
            this.statusBarBottlesQuantity.setPercentage(0);
    }

    /**
     * checks the collosions to take items and hit enemies or the boss
     * 
     */
    checkCollosions() {
        this.takeItems();
        this.collosionEnemies();
    }

    takeItems() {
        this.takeCoins();
        this.takeBottles();
    }

    takeCoins() {
        this.level.coins.forEach((coins, i) => {
            if (this.character.isColliding(coins)) {
                this.character.takeCoin();
                this.level.coins.splice(i, 1);
                coin_sound.play();
                this.statusBarCoins.setPercentage(this.character.coins);
            }
        });
    }

    takeBottles() {
        this.level.bottles.forEach((bottles, i) => {
            if (this.character.isColliding(bottles)) {
                this.character.takeBottle();
                this.level.bottles.splice(i, 1);
                bottle_take_sound.play();
                this.throwableObjects.bottle++;
                this.statusBarBottles.setPercentage(this.character.bottles);
                if (this.character.bottles == 1) {
                    this.statusBarBottlesQuantity.bottleTimer();
                }
            }
        });
    }

    collosionEnemies() {
        this.characterEnemyCollosion();
        this.characterEndbossCollosion();
        this.bottleHitEndboss();
    }

    characterEnemyCollosion() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isColliding(enemy)) {
                if (!this.character.isAboveGround() && !enemy.dead && !this.character.isOverEnemy) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                } else if (this.character.isAboveGround() && this.character.isOverEnemy && !enemy.dead) {
                    enemy.dead = true;
                    enemy.enemyIsDead();
                }
            };
            if (this.character.isDead())
                this.character.pepeDies();
        });
    }

    characterEndbossCollosion() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        };
    }

    bottleHitEndboss() {
        this.throwableObjects.forEach(bottle => {
            if (this.endboss.isColliding(bottle)) {
                bottle.bottleHit();
                this.endboss.bottle_hit = true;
                bottle_splash_sound.play();
                this.endboss.energy--;
                //Activate to show the boss energy in Console
                //console.log(this.statusBarBoss.percentage);
                this.statusBarBoss.setPercentage(this.endboss.energy);
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

        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
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
        if (mo.otherDirection)
            this.flipImage(mo);
        mo.draw(this.ctx);
        //To show hitbox activate this two methods
        // mo.drawFrame(this.ctx);
        // mo.drawFrameRed(this.ctx);
        if (mo.otherDirection)
            this.flipImageBack(mo);
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}



