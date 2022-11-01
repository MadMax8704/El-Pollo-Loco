class Character extends MovableObject {


    offset = {
        top: 100,
        bottom: 10,
        left: 40,
        right: 30
    }

    x = 150;
    height = 280;
    y = 20;
    speed = 3;
    coins = 0;
    bottles = 0;
    world;
    isOverEnemy = false;


    IMAGES_IDLE = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];



    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        './img/2_character_pepe/5_dead/D-51.png',
        './img/2_character_pepe/5_dead/D-52.png',
        './img/2_character_pepe/5_dead/D-53.png',
        './img/2_character_pepe/5_dead/D-54.png',
        './img/2_character_pepe/5_dead/D-55.png',
        './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png',
    ];

    IMAGES_HURT = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ];

    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }
    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.playCharacter(), 72);
    }
    
    /**
     * animating the chracter behavior
     * the character left, right, jump moves
     */
    moveCharacter() {
        walking_sound.pause();
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveLeft())
            this.moveLeft();
        if (this.canJump())
            this.jump();
        this.world.camera_x = -this.x + 100;
    }

    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        walking_sound.play();
    }

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }

    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        walking_sound.play();
    }

    canJump() {
        return this.world.keyboard.UP && !this.isAboveGround();
    }

    jump() {
        super.jump();
        setTimeout(() => {
            this.isOverEnemy = true;
        }, 1000);
        setTimeout(() => {
            this.isOverEnemy = false;
        }, 1300);
        jump_sound.play();
    }

    /**
     * animates the character 
     * hurt and dead images
     */
    playCharacter() {
        if (this.isDead())
            this.dead();
        else if (this.isHurt())
            this.hurt();
        else if (this.isAboveGround())
            this.playAnimation(this.IMAGES_JUMPING);
        else
            if (this.canWalk())
                this.playAnimation(this.IMAGES_WALKING);
            else
                this.playAnimation(this.IMAGES_IDLE);
    }

    dead() {
        this.playAnimation(this.IMAGES_DEAD);
        setInterval(() => {
            this.y++;
        }, 200);
    }

    hurt() {
        this.playAnimation(this.IMAGES_HURT);
        hit_sound.play();
    }

    canWalk() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    takeCoin() {
        return this.coins++;
    }

    takeBottle() {
        return this.bottles++;
    }

    pepeDies() {
        game_music.pause();
        game_music.currentTime = 0;
        boss_beep_sound.pause();
        game_over_loose_sound.play();
        level1.enemies.length = 0;
        world.statusBarBottles.y = -70;
        world.statusBarCoins.y = -70;
        world.statusBar.y = -70;
        world.statusBarBottlesQuantity.y = -70;
        setTimeout(this.gameOverDead(), 2000);
    }

    gameOverDead(x) {
        document.getElementById('gameover').classList.remove('d-none');
        if (x == "win")
            document.getElementById('gameover_img').innerHTML = `<h1 class="game_over_messege">You Win!</h1>`;
        clearInterval(this.pepe_dies);
        this.checkCoins();
        this.checkFullScreen();
        this.makeGameOverScreen();
    }

    checkCoins() {
        this.cons = level1.coins.length;
        this.consty = 10 - this.cons;
        document.getElementById('coin_loose').innerHTML += this.consty;
    }

    checkFullScreen() {
        if (fullscreen) {
            closeFullscreen();
        };
    }

    makeGameOverScreen() {
        setTimeout(() => {
            document.getElementById('gameover_img').innerHTML = ``;
            document.getElementById('gameover_img').innerHTML = `<img src="./img/9_intro_outro_screens/game_over/game over.png" alt="">`;
            document.getElementById('coins_collected').classList.add('d-none');
        }, 3000);
        setTimeout(() => document.getElementById('gameover_buttons').classList.remove('d-none'),5000);
    }
}
