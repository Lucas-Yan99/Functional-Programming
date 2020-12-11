//console.log(process.argv);
const fs=require("fs");
/*
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p >`);
dom.window.document.querySelector("p").textContent; // 'Hello world
*/

const{exec} = require("child_process");
const { stderr } = require("process");
const { error } = require("console");
const execor = function(cmd){
    return function(resolve,reject){
        exec(cmd, (error, stdout, stderr)=>{
            if(error){
                reject(Error( 'error:${error.message'));
            }
            if(stderr){
                reject(Error("Error "+stderr));
            }
            resolve('stdout:${stdout}');
        })
    }
}
//let promise = new Promise(execor("ls -la"));



var filePath=process.argv[2];
const svg = fs.readFileSync(filePath).toString();
var res = svg.split("\n");
//console.log(svg);
//console.log(path2gcode(svg))
var b = res.slice(5,-2)
//console.log(path2gcode((b).join("\n").replace(/\n/g,"")).join("\n"))
var out =path2gcode((b).join("\n").replace(/\n/g,"")).join("\n");
console.log(storetime);
fs.writeFile("results/solarSystem.gcode",out,(err)=>{
    if(err)throw err;
});
fs.writeFile(f, timebag, (err)=>{
    if(err) throw err;
});


// const execSync = require("child_process").execSync;
// const execGo = (val,cmd) => execSync(cmd).toString().trim();
// //let buildSvg = (to,from) => r =>execGo(r,"openscad -o "+to+" "+from);
// let ss="solarSystem";
// let fromCSV=ss+".csv";
// let toSVG=ss+".svg";
// let planet="planetarium.scad";
// let toScad="solarSystem.scad";

// let buildScad=(from,to) =>  execor("escript main.erl "+from+" > "+to);
// let buildSvg = (to,from) => r=> execGo(r,"openscad -o "+to+" "+from);
// let promise = new Promise(buildScad(fromCSV,"results/"+toScad))
// .then(buildSvg("results/"+toSVG,"results/"+planet),buildSvg("results/"+toSVG,planet))
// .then(r=>execGo(r,"cp planetarium.scad resuluts"))
// .catch(out=>console.log(out))


var mti;
var cti;
var t=0;
var timebag = new int[0];
var f = "results/solarSystem.data";
function storetime(tm){
    timebag.push(tm + "\n");
    // timebag[t]=tm;
    // t++;
    return timebag;
    
}

function writeTextFile(name, out){
    var txtFile = new File(name);
    txtFile.writeln(out)
    txtFile.close();
}

function xyDistance(from,to){
    var s=from.split(",");
    var a=to.split(",");
    var x1=parseFloat(s[0]);
    var x2=parseFloat(a[0]);
     var y1=parseFloat(s[1]);
     var y2=parseFloat(a[1]);
    
    
     var dt = Math.sqrt( (x2-x1)**2+(y2-y1)**2);
     return dt;
    }

function path2gcode(source){
    var j=0
    var sd = new Array();
    var s1=processPathLettersIntoArray(source)
    com(s1.length)
    source=sd
    return source;
function com(num){
    if(j<num){

            sd[j]=mapGroup(s1[j])
               j++
               com(num)
               return num;
    }
    else
    return 0;
    
}
}
function processPathLettersIntoArray(source){
    
    var i=0
    source=source.replace(/M /g,"M-")
    source=source.replace(/L /g,"L-")
    //source=source.replace(/z /g,"z-")
    source=source.split(" ")
    re(source.length)



function re(number){
    if(i<number&&i!=number-1){
        source[i]=source[i].replace(/M-/g,"M ")
        source[i]=source[i].replace(/L-/g,"L ")
        //source[i]=source[i].replace(/z-/g,"z ")
    source[i]=source[i]+" "
        i++
        re(number)
        return number;
    }else if(i==number-1){
        source[i]=source[i].replace(/M-/g,"M ")
        source[i]=source[i].replace(/L-/g,"L ")
        //source[i]=source[i].replace(/z-/g,"z ")
        i++
        re(number)
        return number;
    }else
    return 0;
    
}
return source;
}


function gcodeXY(source){

    if(source!="z"){

    let td=source.split(",")
    source="X"+td[0]+" "+"Y"+td[1]

    return source
    }
    else
    source="X0 Y0"
    return source;
}

function mapGroup(grp){
    let last="0,0";//side effect , 
    //should really use a reducer with an accumulator object having last, start and times properties
    let start="X0 Y0"; //another side effect :-(
    let s=grp.split(" ");
    if (s[0]=="M"){
        start=gcodeXY(s[1]);
        mti=(xyDistance(last,s[1])/2000);
        storetime(mti);
        lasts=s[1];
        return "G0 F200 "+start;
    }
    else if (s[0]=="L"){
    start=gcodeXY(s[1]);
    cti=(xyDistance(last,s[1])/200);
    storetime(cti);  
    last=s[1];
    return "G1 F100 "+start;
    }
    else if (s[0]=="z"){
    //start=gcodeXY(s[0]);
    //last=s[0];
    return "G1 F100 X0 Y0";
    }
    else{
    return ;
    }
    //now deal with L and v
}