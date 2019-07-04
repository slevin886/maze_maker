# Maze Maker
## Overview
Mazemaker is a stand-alone Flask page that lets you follow how three search algorithms (a*, depth-first, breadth-first) search
for a path through a maze and see the solution they return (when a solution exists). The page also lets you generate new mazes 
by randomizing the finish location and wall locations. Beneath the Maze, you can find the statistical performance of each algorithm 
from a 100,000 trial runs of the maze (with both a fixed finish location and a variable finish location). 

The page looks like this (w/o the fixed finish location graphs (which would be below) for visibility here): 
  
  <kbd><img src="https://github.com/slevin886/maze_maker/blob/master/static/page_layout_for_markdown.png" 
       height="700" width="600" ><kbd>
       
## How to Run
Clone this repo to machine and pip install the requirements.txt (into a virtual environment). The project was built with 
Python 3.7.1, but should be fine with any Python 3 version. The maze visualization, bootstrap, and plots rely on CDNs
so an internet connection is necessary. 

After setting up your environment, from the command line in the project's root directory execute: 

`python run.py`

to launch the page to your localhost (it will show you the address to copy to your browser). 
