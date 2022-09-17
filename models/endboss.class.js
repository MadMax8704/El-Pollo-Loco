class Endboss extends MovableObject {

    height = 300;
    width = 200;
    y = 140;
    energy = 50;
    bottle_hit = false;

    offset = {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
    };

    IMAGES_WALKING = [

        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'

    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2600;
        this.animate();


    };

    animate() {
        
        setInterval(() => {
        if (world.character.x > 1800) {
                world.statusBarBoss.y = 0;               
                this.bossMove();
             }
        },200)
        
        setInterval(() => {
            if (this.x > 2300) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_ALERT);
            } 
            if (this.bottle_hit && this.energy > 0)
            {
                this.playAnimation(this.IMAGES_HURT);
                this.bottle_hit = false;
                
            };

            if (this.energy < 0) {
                this.playAnimation(this.IMAGES_DEAD)
                this.showEndscreen();
                
            }
        }, 200);       
    } 
    
    showEndscreen() {
    console.log('THE END');
    world.statusBarBoss.y = -70;
    world.statusBarBottles.y = -70;
    world.statusBarCoins.y = -70;
    world.statusBar.y = -70;
    setTimeout(this.gameOver, 2000);
    }

    gameOver() {
        console.log('THE END');
    }


    bossMove() {   
        this.moving = setInterval(() => {
            if (this.x > 2300) {
                this.moveLeft();
            }
        }, 1000 / 60);        
    }





}