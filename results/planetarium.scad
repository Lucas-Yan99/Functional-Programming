$fn=50;
speedup=3;
$t=0.0;
translate([10,0,0])rotate([0,0,90]) text("SCC.212");
function empty(vec) = len(vec)==0;
function head(vec)    = vec[0];
function tail(vec)    = empty(vec) ? undef :    len(vec) == 1 ? [] :    [for (i = [1 : len(vec) - 1]) vec[i]];
function reverse(vec) = empty(vec) ? []    :    concat(reverse(tail(vec)), head(vec));
    
function polar2cartesian(distance,theta,thetavelocity) = [distance*sin(theta-thetavelocity*$t*speedup),distance*cos(theta-thetavelocity*$t*speedup),0]; 

IColour=0;IDistance=1;IAngle=2;IAngleVelocity=3;IRadius=4;ISubSystem=5;
//system [colour,distance,angle,angularVelocity,radius,vector of systems ]
//        0        1      2     3               4       5
module drawSystem(system) {
        translate(polar2cartesian(system[IDistance],system[IAngle],system[IAngleVelocity]))
        { 
            color(system[IColour],1.0) circle(system[IRadius]); 
            for (subSystem=system[ISubSystem]) drawSystem(subSystem);
        }
}

include <solarSystem.scad>
translate([5,5,0]) drawSystem(solarSystem);

