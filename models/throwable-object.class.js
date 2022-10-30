class ThrowableObject extends MovableObject {


    bottle = 0;

    IMAGE_FLYING_BOTTLES = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGE_SPLASH_BOTTLES = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGE_FLYING_BOTTLES);
        this.loadImages(this.IMAGE_SPLASH_BOTTLES);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();
    }

    flyingBottles;

    throw() {
        this.flyingBottles = setInterval(() => {
            this.playAnimation(this.IMAGE_FLYING_BOTTLES);
        }, 100);
        this.speedY = 18;
        this.applyGravity();
        setInterval(() => { this.x += 5; }, 25);
    }

    bottleHit() {
        bottle_splash_sound.play();
        clearInterval(this.flyingBottles);
        setInterval(() => this.playAnimation(this.IMAGE_SPLASH_BOTTLES), 100);
    }

}

