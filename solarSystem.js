//console.log(process.argv);
const fs=require("fs");
/*
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
dom.window.document.querySelector("p").textContent; // 'Hello world
*/
var filePath=process.argv[2];
const svg = fs.readFileSync(filePath).toString();
