class StatusBarBottlesQuantity extends DrawableObject{
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'

    ];

    indicator = 6;
    percentage;

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
        this.indicator = 0;
        this.timer = setInterval(() => {
            this.indicator ++; 
            this.percentage++;
            console.log('Indicator is '+ this.indicator);
            this.setPercentage( this.percentage );
            
            if (this.indicator == 5 ) {
                clearInterval(this.timer);
                this.indicator = 6;
                this.percentage = 0;
            } 
        } ,800);
        
    }
    
    
    
    setPercentage( percentage ) {
        this.percentage = percentage;
        let path = this.IMAGES[this.percentage];
        this.img = this.imageCache[path];
        console.log('Percentage is ' + this.percentage);
        
    }
    
    resolveImageIndex() {
        
        if (this.percentage == 0) { 
            return 5;
        } else if (this.percentage == 1) {
            return 4;
        } else if (this.percentage == 2) {
            return 3;
        } else if (this.percentage == 3) {
            return 2;
        } else if (this.percentage == 4) {
            return 1;
        } else {
            return 0;
        }
    }

    

}