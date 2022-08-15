const level1 = new Level(

    
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken_small(),
        new Chicken_small(),
        new Chicken_small(),
        new Chicken_small(),
        new Chicken_small(),
        new Chicken_small(),
        new Endboss()
    ],

    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
    ],


    [
        new BackgroundObject('img/5_background/layers/air.png', -719) ,
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719) ,
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719) ,
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719) ,

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0) ,
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0) ,

        new BackgroundObject('img/5_background/layers/air.png', 719) ,
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719) ,
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719) ,
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719) ,

        new BackgroundObject('img/5_background/layers/air.png', 719 *2) ,
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2) ,
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2) ,
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2) ,

        new BackgroundObject('img/5_background/layers/air.png', 719*3) ,
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3) ,
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3) ,
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3)

    ],

    [
        new Coins(420,180),
        new Coins(480,140),
        new Coins(560,120),
        new Coins(640,140),
        new Coins(700,180),

        new Coins(1220,180),
        new Coins(1280,140),
        new Coins(1360,120),
        new Coins(1440,140),
        new Coins(1500,180),

    ],

        [
            new Bottles(560,340),
            new Bottles(1360,340),
            new Bottles( 800 * (Math.random() * 2000),340),
            new Bottles( 800 * (Math.random() * 2000),340),
            new Bottles( 800 * (Math.random() * 2000),340),
            new Bottles( 800 * (Math.random() * 2000),340),
            new Bottles( 800 * (Math.random() * 2000),340),
            new Bottles( 800 * (Math.random() * 2000),340)
        ]
    

);