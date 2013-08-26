/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage2 = tm.createClass(
/** @lends {gls2.Stage1.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq.add(  0, function() {
            gls2.playBgm("bgm2"),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 1;
        });

        this.seq.add(200, "tankRD-center");

    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(130,50%,20%)" },
            { offset:1, color:"hsl(130,50%,10%)" },
        ]).toStyle();
    },

});

})();
