# Functional Assigment
 
Lockdown.... time to do the things you only ever read about....   first quick build ... a v-plotter for my white board to entertain the troops through those boring teams meetings... https://www.youtube.com/watch?v=T0jwdrgVBBc&vl=it or even https://www.youtube.com/watch?v=heicyEEYcoM (youv'e got to watch this all the way to the end to hear the cringiest statement ever!)
 
Next project... It's time to do some laser cutting....  I then built an A0 laser cutter... yes A0 is a bit extreme, but now i can burn my pdfs into wood for poster presentations! or turn the power down and etch onto rolls of wall paper....  sorry, i digress slightly...
 
PLEASE NOTE: Lasers are dangerous.... they can blind you before you have time to blink!
 
Making a laser cutter: https://www.youtube.com/watch?v=DqslZKvznvQ 
My biggest problem was having to lay a new flat floor in my cellar big enough for the laser cutter!
 
I have been inspired by your work in the first 5 weeks, and thought that i could put my piece of tech to some better use.... cutting out solar systems (or other things made of circles and squares.... )
 
To that end i want to utilise the skills that you will gain from a bit of functional programming.
 
## Part 1
 
Edit the ERLANG module to add a function which takes a parsed csv file and creates a system which can be displayed by the planetarium.scad file.
 
The marking algorithm will load in a csv file call your module and generate a solarSystem.scad file
The algorithm will then run openscad from the command line using the planetarium.scad file and output an svg file
 
## Part 2
 
You should write a javascript file which takes an svg file and produce gcode for a laser cutter.
For reference:                  https://en.wikipedia.org/wiki/G-code 
    And for visualising gcode:  https://ncviewer.com/ 
 
The feed rate for the laser cutter is 200mm/min when cutting and 2000mm/min when moving from one cut to another.
The gcode should assume the cutter is at 0,0 at the start and your code should ensure that the laser cutter is returned to 0,0 at the end.
NB At the end the laser must have been turned off when the last gcode instruction has completed.
You can assume the laser is turned off at the start (turning off the laser as the very first instruction will make things a LOT safer).
The power of the laser should be set to 1000.
gcode M4 should be used to turn the laser on and M5 should be used to turn the laser off (assume grbl laser mode has been enabled https://github.com/gnea/grbl/wiki/Grbl-v1.1-Laser-Mode ).
 
## Part 3
 
Your javascript should estimate the TOTAL time taken to execute the gcode generated (ignoring accelration and deelarion of the laser head).  It should also generate a data file (using csv format) containing the anticipated timings of each line drawn.
 
## Part 4

You should write an R script which reads a file which could have been generated by Part 3.  The R code should output a table with two columns, the first is the range of time and the second is the number of instances found in the data withing that range.  The table should have 10 ranges.  For a bonus point, a second table should be produced which has the following columns: the ranges, the number of lines in that range, the mean, the standard deviation.
 
## Resources
You will be provided with:
    planatarium.scad  % an openscad file which draws a solarSystem
    solarSystem.csv   % an example csv containing details of the celestial bodies to be modelled
    csv.erl           % a csv parsing module
    solarSystem.erl   % elang file to be modified for Part 1
    solarSystem.scad  % an example output from Part 1 based on solarSystem.csv
    solarSystem.js    % javascript file to be modified for Parts 2 and 3
    solarSystem.svg   % an example svg file drawn by openscad of a solar system based on system.csv
    solarSystem.gcode % an example gcode file for a laser cutter which would cut out a solar system
    solarSystem.data  % a data file which contains the timings of aggregated lines from solarSystem.gcode
    solarSystem.R     % a framework file for your R script to be modified for part 4
    solarSystem.tab   % an example file produced by an R script which has analysed a solarSystem.data file and put things into 10 ranges.
 
    solarSystem.sh    % my workflow to generate the appropriate files and store them in a folder called results

NB, some files may be pushed to your repository after week 6.
 
## Restrictions
 
No non recursive loops (for, while or goto ) allowed in YOUR code
You must use the git server provided
Dumping all of your code in the last week will not count.  You need to commit some code each week or you WILL get a 1 grade reduction or an F4.
The workflow has been tested on the scc ubuntu vdi (https://mylab.lancaster.ac.uk) and lab machines.  Your code must work on these systems.
You must not change the names of the files.
You can't use any other libraries apart from the ones I have already used in csv.erl and 'jsdom' for your javascript.
Your code should work on other system.csv files.
If any part of your workflow fails, i will use the files in the resources instead.  That way if you can't get the erlang to work, you won't be penalised.


## Marking Scheme

1/3 Erlang compiles
1   Erlang creates a scad output which is parsable when presented with a simple csv file
1   Erlang creates a scad output from a complex csv file (one with lists of subsystems)
1   Erlang deals with a corner case where a line of csv starts with a variable which is not subsequently used (except the last line)

1/3 Java script compiles (runs without error)
1   Javascript can parse an svg file with one simple path and produce valid gcode
1   Javascript can parse an svg file with multiple paths and produce valid gcode
1   Javascript produces a tab file with the lengths of each line drawn
1   Javascript identifies the aprox runtime of the gcode when executed with the parameters provided
1/2 The gcode returns the laser to 0,0
1/2 The gcode makes sure the laser is of at the end of the gcode using M5

1/3 The R script runs without error
1   The R script can open the csv file generated by a javascript program which executes correctly
1   The R script tabulates the frequency of lines in different ranges
1   The Rscript can produce the extended table with statistical analysis

1   Work is commited which adds a mark on a seperate week. (1/3 per week) i.e. if you commit work which gains a mark in week 6 you get a bonus 1/3mark. 

0   An Rnw file will which produces a nice report using your R script ;-). The pdf could be turned into svg (pdf2svg) and your code could then analyse that and produce GCODE! Is there a stopping condition?

The marks will be totalled and multiplied by 8 to get a %  Partial marks may be awarded at the markers discretion.

## HINTS
Keep it simple.... think of a state machine when doing erlang
List processing is just using a stack
Ask a TA to review your code.

Work 9->5, constant pace, keep a professional work pattern.

Keep it simple, seriously, most of this will require less than 60 lines of code per program!
I estimate it should take between 9 and 12 hours if you have no experience in any of the languages... so 180/9-> ~ 20 lines per hour, commercial programmers may get paid £50/hour so that would be £450 for 180 lines of code!!!  Don't worry, I won't be paying you for your code this time ;-)
