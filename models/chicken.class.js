class Chicken extends MovableObject {

    offset =  {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    y = 360;
    height = 60;
    width = 60;
    energy = 1;
    dead = false;

    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor(){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = Math.random() * 2000 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.energy = 1;
        this.animate();
    }

    animate() {
        if(!this.dead) {
            this.move = setInterval(() => {
            this.moveLeft();   
            }, 1000 / 60);
            this.walking = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }};
    
    enemyIsDead() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);    
        }, 200);
        clearInterval(this.walking);
        clearInterval(this.move);
        chicken_dead_sound_2.play();       
    }

}