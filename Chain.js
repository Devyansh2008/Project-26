class chain{
    constructor(bodyA,bodyB,ptx){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:21,
    stiffness:.6
    
}
this.chai=Matter.Constraint.create(options)
this.ptx=ptx
World.add(world,this.chai)
    }
    display(){
        strokeWeight(7)
        stroke("purple")
        line(this.chai.bodyA.position.x,this.chai.bodyA.position.y,this.chai.bodyB.position.x+this.ptx,this.chai.bodyB.position.y)      
    }
}

