class Chain {
    constructor(body1,body2){
       var options={
           bodyA: body1,
           bodyB: body2,
           stiffness: 0.9,
           length:20
       }

       this.chain=Constraint.create(options);
       World.add(world, this.chain);
    }

    display(){
        var pos=this.chain.bodyA.position;
        var pos2=this.chain.bodyB.position;
        strokeWeight(4);
        line(pos.x,pos.y,pos2.x,pos2.y);
    }

}