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

        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'

    ];

    IMAGES_ALERT = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png'
    ];

    IMAGES_ATTACK = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png'
    ];

    IMAGES_HURT = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2600;
        this.animate();
    };

    animate() {
        this.bossmoving = setInterval(() => this.bossMoveing(), 200)
        this.bossanimate = setInterval(() => this.bossFighting(), 200);
    }

    bossMoveing() {
        if (this.firstContact()) {
            this.bossMove(2300);
            boss_beep_sound.play();
            if (!this.isbossDied())
                world.statusBarBoss.y = 0;
        }
        if (this.x > 2300)
            this.playAnimation(this.IMAGES_WALKING);
        else
            this.playAnimation(this.IMAGES_ALERT);
    }

    firstContact() {
        return world.character.x > 1700 && world.character.y < 500;
    }

    bossHit() {
        this.playAnimation(this.IMAGES_HURT);
        this.bottle_hit = false;
        this.addEnemy();
        boss_beep_sound.pause();
        boss_hit_sound.play();
        boss_beep_sound.currentTime = 0;
    }

    bossFighting() {
        if (this.bottle_hit && this.energy > 0)
            this.bossHit();
        if (this.energy < 22)
            this.bossFirstAttack();
        if (this.energy < 12)
            this.bossSecondAttack()
        if (!this.isbossDied() && this.x < 2001)
            this.playAnimation(this.IMAGES_ALERT);
        if (this.isbossDied())
            this.bossDead();
    }

    isbossDied() {
        return this.energy <= 0;
    }

    bossFirstAttack() {
        this.bossMove(2100);
        this.playAnimation(this.IMAGES_ATTACK);
    }

    bossSecondAttack() {
        this.bossMove(2000);
        this.playAnimation(this.IMAGES_ATTACK);
    }

    bossDead() {
        setInterval(() => this.playAnimation(this.IMAGES_DEAD), 200)
        this.showEndscreen();
        boss_beep_sound.pause();
    }

    showEndscreen() {
        clearInterval(this.bossanimate);
        clearInterval(this.bossmoving);
        game_music.pause();
        game_music.currentTime = 0;
        game_over_win_sound.play();
        level1.enemies.length = 0;
        this.hideStatusBars();
        setTimeout(this.gameOver, 2000);
    }

    hideStatusBars() {
        world.statusBarBoss.y = -70;
        world.statusBarBottles.y = -70;
        world.statusBarCoins.y = -70;
        world.statusBar.y = -70;
        world.statusBarBottlesQuantity.y = -70;
    }

    gameOver() {
        world.character.gameOverDead("win");
    }

    bossMove(move) {
        this.moving = setInterval(() => {
            if (this.x > move) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    addEnemy() {
        this.end_enemies = new Chicken_small(2250);
        level1.enemies.push(this.end_enemies);
    }
}