const fs=require("fs");
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
var filePath=process.argv[2];
const svg = fs.readFileSync(filePath).toString();
var res = svg.split("\n");
var b = res.slice(5,-2)
var out =path2gcode((b).join("\n").replace(/\n/g,"")).join("\n");
console.log(storetime);
fs.writeFile("results/solarSystem.gcode",out,(err)=>{
    if(err)throw err;
});
fs.writeFile(f, timebag, (err)=>{
    if(err) throw err;
});

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
    source[i]=source[i]+" "
        i++
        re(number)
        return number;
    }else if(i==number-1){
        source[i]=source[i].replace(/M-/g,"M ")
        source[i]=source[i].replace(/L-/g,"L ")
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

    return "G1 F100 X0 Y0";
    }
    else{
    return ;
    }
}
