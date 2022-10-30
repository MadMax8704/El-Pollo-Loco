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
    };

    drawFrame(ctx) {
        if (this.canDrawFrame()) {
            ctx.beginPath();
            ctx.lineWidth = "0";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    };

    canDrawFrame() {
        return this instanceof Character ||
            this instanceof Chicken ||
            this instanceof Chicken_small ||
            this instanceof Coins ||
            this instanceof Bottles ||
            this instanceof Endboss
    };

    drawFrameRed(ctx) {
        if (this.canDrawFrameRed()) {
            ctx.beginPath();
            ctx.lineWidth = "0";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + this.offset.right,
                this.y + this.offset.top,
                this.width - this.offset.left,
                this.height - this.offset.bottom);
            ctx.stroke();
        }
    };

    canDrawFrameRed() {
        return this instanceof Character ||
            this instanceof Chicken ||
            this instanceof Chicken_small ||
            this instanceof Coins ||
            this instanceof Bottles ||
            this instanceof Endboss
    };

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };
}