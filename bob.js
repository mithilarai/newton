class Bob {
    constructor(x, y, radius) {
        var options = { restitution: 1, friction: 0.8, density: 0.8 };
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;

        fill("pink");
        push();
        ellipse(pos.x,pos.y, this.radius, this.radius);
        pop();
    }

}
