class Chicken_small extends MovableObject {

    offset =  {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    acceleration =1;
    speedY = 0;
    y = 380;
    height = 40;
    width = 40;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = Math.random()* 2000 + Math.random() * 500;
        this.speed = 0.25 + Math.random() * 0.25;
        
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();   
            }, 1000 / 60);
            
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);

        setInterval (() => {
            this.jumpChicken();
        },300)

    }

    jumpChicken() {
        
            
    }
    


}