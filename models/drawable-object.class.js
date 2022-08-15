class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Chicken_small || this instanceof Coins || this instanceof Bottles|| this instanceof Endboss) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        
    }
    }
    drawFrameRed(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Chicken_small || this instanceof Coins || this instanceof Bottles|| this instanceof Endboss) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "red";
        ctx.rect(this.x-this.offset_x, this.y-this.offset_y, this.width-this.offset_width, this.height-this.offset_height);
        ctx.stroke();

    }    
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;


        });
    }
}