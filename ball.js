class ball {constructor(x,y)
    {
var options={isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2}
this.ball=Bodies.circle(x,y,25,options)
World.add(world,this.ball)
}
display(){
var pos=this.ball.position
fill("aqua")
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,25)
}
}
