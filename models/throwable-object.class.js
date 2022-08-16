class ThrowableObject extends MovableObject {

    IMAGE_FLYING_BOTTLES = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    
    constructor(x, y){
        super().loadImage('./img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGE_FLYING_BOTTLES);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();

    }


throw() {

    setInterval(() => {
        this.playAnimation(this.IMAGE_FLYING_BOTTLES);
    }, 100);

    this.speedY = 18;
    this.applyGravity();
    setInterval(() => { this.x += 5;} ,25);
    }
}