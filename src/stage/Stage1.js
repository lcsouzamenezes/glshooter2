/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage1 = tm.createClass(
/** @lends {gls2.Stage1.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq.add(  0, function() {
            gls2.playBgm("bgm1"),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 1;
        });

        this.seq.add(200, function() {
            this.gameScene.showBossLife();
        });

        this.seq.add(200, function() {
            this.gameScene.hideBossLife();
        });

        this.seq.add(200, "tankRD-center");
        this.seq.add(200, "tankRD-left");
        this.seq.add( 20, "heri1-right");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 10, "cannon-0");
        this.seq.add( 60, "heri1-left");
        this.seq.add( 10, "cannon-1");
        this.seq.add( 60, "tankL-top");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 20, "tankRD-center");
        this.seq.add( 80, "heri1-center");
        this.seq.add(150, "komachi-1");
        this.seq.add(500, "heri1-right");
        this.seq.add( 20, "heri1-center");
        this.seq.add( 20, "heri1-left");
        this.seq.add( 20, "tankL-top");
        this.seq.add( 20, "tankRD-left");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 20, "tankRD-center");
        this.seq.add( 20, "tankRD-left");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 10, "cannon-7");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 50, "heri1-left");
        this.seq.add( 20, "tankL-top");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 50, "fighter-m-1");
        this.seq.add( 50, "fighter-m-5");
        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({speed:5}, 5000, "easeInOutQuad");
        });

        this.seq.add(150, "yukishiro", true);

        this.seq.add( 50, "heri2-left");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 50, "heri2-left");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "fighter-m-0");
        this.seq.add( 50, "fighter-m-2");
        this.seq.add( 50, "fighter-m-4");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "heri2-left");
        this.seq.add( 10, "cannon-6");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "fighter-m-6");
        this.seq.add( 50, "fighter-m-4");
        this.seq.add( 50, "fighter-m-2");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "heri2-left");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "fighter-m-0");
        this.seq.add( 50, "fighter-m-1");
        this.seq.add( 50, "fighter-m-2");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 10, "cannon-1");
        this.seq.add( 50, "heri2-left");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "fighter-m-6");
        this.seq.add( 50, "fighter-m-5");
        this.seq.add( 50, "fighter-m-4");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 50, "heri2-left");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 50, "heri2-center");
        this.seq.add( 50, "heri2-right");
        this.seq.add( 60, "heri1-center");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({speed:1}, 2000, "easeInOutQuad");
        });
        this.seq.add(100, "komachi-0");
        this.seq.add(100, "komachi-1");

        if (DEBUG) {
            this.seq.add(600, function() {
                this.gameScene.ground.speed = 1;
                this.frame = 0;
            });
        }

    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(230,50%,30%)" },
            { offset:1, color:"hsl(230,50%,15%)" },
        ]).toStyle();
    },

});

})();
