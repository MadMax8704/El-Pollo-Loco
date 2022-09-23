class StatusBarBottlesQuantity extends DrawableObject{
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'

    ];

    percentage = 10;
    

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 35;
        this.y = 103;
        this.width = 80;
        this.height = 30;
        this.setPercentage(0);
        
    }

    bottleTimer () {
        
        this.timer = setInterval(() => {this.percentage ++ ;
        console.log(this.percentage);
        
        if (this.percentage == 5 ) {
            clearInterval(this.timer);
            this.percentage = 0;
        }
        } ,800);

    }

    setPercentage( percentage ) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

    resolveImageIndex() {
        if (this.percentage == 0) {
            return 5;
        } else if (this.percentage > 1) {
            return 4;
        } else if (this.percentage > 6) {
            return 3;
        } else if (this.percentage > 3) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    

}