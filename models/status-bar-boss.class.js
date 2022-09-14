class StatusBarBoss extends DrawableObject{
    IMAGES = [
        'img/7_statusbars/Statusbar_boss/vekt/1-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/2-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/3-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/4-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/5-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/6-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/7-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/8-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/9-removebg-preview.png',
        'img/7_statusbars/Statusbar_boss/vekt/0-removebg-preview.png'       
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 450;
        this.y = -70;
        this.width = 250;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

        resolveImageIndex() {
            
            if (this.percentage == 100) {
                return 0;
            } else if (this.percentage > 90) {
                return 1;
            } else if (this.percentage > 80) {
                return 2;
            } else if (this.percentage > 70) {
                return 3;
            } else if (this.percentage > 60) {
                return 4;
            } else if (this.percentage > 50) {
                return 5;
            } else if (this.percentage > 40) {
                return 6;
            } else if (this.percentage > 30) {
                return 7;
            } else if (this.percentage > 20) {
                return 8;
            } else if (this.percentage > 10) {
                return 9;
            } else {
                return 0;
            }
        }



    

}