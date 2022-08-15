class MovableObject extends DrawableObject{

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    coins = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        }
        else {
        return this.y < 145;
        }
    }




    isColliding(mo) {
        return this.x +this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x + mo. width &&
        this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }

        
    }

    take() {
        this.coins += 5;
        delete Coins();
        console.log(coins);
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {

        return this.energy == 0;
        
    }

    moveRight() {
        this.x += this.speed;


    }

    moveLeft() {
        this.x -= this.speed;
        
        
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 15;
    }

}

