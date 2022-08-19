class StatusBarBottles extends DrawableObject{
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
        this.x = 20;
        this.y = 100;
        this.width = 250;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage( percentage ) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

        resolveImageIndex() {
            if (this.percentage == 10) {
                return 5;
            } else if (this.percentage > 8) {
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