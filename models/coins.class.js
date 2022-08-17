class Coins extends MovableObject {

    offset =  {
        top: 30,
        left: 30,
        right: 60,
        bottom: 60
    }
    
    coin_sound = new Audio ('./audio/coin_take.mp3');
    height = 100;
    width = 100;
    IMAGES_COINS = [
        
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor(x, y){
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COINS);

        this.x = x;
        this.y = y;
        this.speed = 0
        this.animate();

    }

    animate() {
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 200);

    }
    

}