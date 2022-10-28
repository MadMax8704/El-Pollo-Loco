class Cloud extends MovableObject {

    y = 30;
    width = 500;
    height = 200;
 
    

    constructor() {
        super().loadImage('./img/5_background/layers/4_clouds/1.png');
    
        this.x = Math.random()* 2000 + Math.random() * 500;
        this.y = Math.random() * 50;
        this.animate();

        
    }

    animate(){
        this.moveLeft();
        
    }

    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000/60)
    }

}