class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.15,
            length: 12
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            
        }
    }
    
}