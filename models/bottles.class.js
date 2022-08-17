class Bottles extends MovableObject {

    offset =  {
        top: 15,
        left: 25,
        right: 35,
        bottom: 30
    }
    
    bottle_take_sound = new Audio ('./audio/bottle_take.mp3');
    height = 80;
    width = 80;
    IMAGES_BOTTLES = [
        
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];


    constructor(x, y){
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_BOTTLES);

        this.x = x;
        this.y = y;
        this.speed = 0;

        this.animate();
    }

    animate() {
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES);
        }, 200);

    }

}