#!/bin/bash
# An example marking script

rm marks
rm -rf results
mkdir results

#PART I
scad="results/solarSystem.scad"
erlc solarSystem.erl
erlc csv.erl
escript main.erl solarSystem.csv > "$scad"
cp planetarium.scad results/.

if [ -f "$scad" ]; then
    	echo "scad created" >> marks	
    else
	cp solarSystem.scad results/.
fi

svg="results/solarSystem.svg"
rm "$svg"
openscad -o "$svg" results/planetarium.scad 

if [ -f "$svg" ]; then
	echo "svg created" >> marks
    else
	cp solarSytem.svg > results
fi

#PART II
node solarSystem.js results/solarSystem.svg results/solarSystem.gcode results/solarSystem.data

#PART III

#PART IV
Rscript results/solarSystem.R 
# program should save it > results/solarSystem.tab

#R CMD Sweave solarSystem.Rnw
