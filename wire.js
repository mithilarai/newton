class Wire
{
constructor(body1,body2,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;
    var Coption = {
        bodyA:body1,
        bodyB:body2,
       };
    this.wire = Constraint.create(Coption);
	World.add(world,this.wire);


}
display(){

var pointA = this.wire.bodyA.position;
var pointB = this.wire.bodyB.position;

var anchor1X = pointA.x+this.offsetX;
var anchor1Y = pointA.y+this.offsetY;
var anchor2X = pointB.x;
var anchor2Y = pointB.y;




strokeWeight(2);
line(anchor1X,anchor1Y,anchor2X,anchor2Y);

}




}