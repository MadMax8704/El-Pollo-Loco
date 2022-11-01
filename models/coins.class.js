class Coins extends MovableObject {

    offset = {
        top: 0,
        bottom: 40,
        left: 0,
        right: 0
    }


    height = 100;
    width = 100;
    
    IMAGES_COINS = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png'
    ];

    constructor(x, y) {
        super().loadImage('./img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = x;
        this.y = y;
        this.speed = 0
        this.animate();
    }

    animate() {
        setInterval(() =>
            this.playAnimation(this.IMAGES_COINS), 200);
    }
}