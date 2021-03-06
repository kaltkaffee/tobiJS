
export default class Debug {
  
  constructor(game, drawer) {

    this.game = game;
    this.draw = drawer;
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context = drawer.context;
    this.x = 8;
    this.y = 12;
    this.lineHeight = 14;
    this.column = 100;
    this.font ="10px Verdana";
    this.textColor = 'white';
    this.bgcolor = '#000';
    this.textShadow = '#000';

  }

  test() {

    this.draw.disablePointTransform = true;
    this.x = 4;
    this.y = 12;
    this.context.strokeStyle = this.bgcolor;
    this.context.font = this.font;
    this.context.textAlign = 'left';
    this.draw.alpha = 0.5;
    this.draw.rect(0,0,this.game.width,(14 * 3)+ 4,this.bgcolor);
    this.draw.alpha = 1;
   
    this.drawLine("FPS: " + Math.round(this.game.time.fps) + " / " + this.game.time.desiredFps);
    //this.drawLine("Instances in view: " + this.game.camera.instancesInView);
    this.drawLine("Instances: " + this.game.system.entityList.length);
    this.drawLine("Draw Calls: " + this.game.system.render.drawCalls);/*this.game.physics.length);*/
    this.x += this.game.width / 2;
    //this.y = 12+8;
    //this.drawLine("Sounds count " + this.game.sound.length);
    
    //this.y = 12+8;

    this.draw.disablePointTransform = false;

  }

  drawLine(textLine) {

    var xx = this.x;

            this.context.fillStyle = this.textShadow;
            this.context.fillText(textLine, xx + 2, this.y + 1);
            this.context.fillStyle = this.textColor;

        this.context.fillText(textLine, xx, this.y);

    this.y += this.lineHeight;

  }



}
