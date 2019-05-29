import random
from typing import NamedTuple


class Location(NamedTuple):
    x: int
    y: int


class MazeSymbol:
    start = "S"
    finish = "F"
    wall = "X"
    empty = " "
    path = "*"


class Maze:
    def __init__(self, rows=10, columns=10, barriers=0.2, start=Location(0, 0), finish=Location(9, 9)):
        self.rows = rows
        self.columns = columns
        self.barriers = barriers
        self.start = start
        self.finish = finish
        self.maze = [[MazeSymbol.empty for col in range(columns)] for row in range(rows)]
        self._fill_maze()

    def _fill_maze(self):
        for row in range(self.rows):
            for col in range(self.columns):
                if random.uniform(0, 1) <= self.barriers:
                    self.maze[row][col] = MazeSymbol.wall
        self.maze[self.start.x][self.start.y] = MazeSymbol.start
        self.maze[self.finish.x][self.finish.y] = MazeSymbol.finish

    def frontier(self, curr):
        """curr is a Location for current location"""
        next_moves = []
        # Move one position up
        if curr.x - 1 >= 0 and self.maze[curr.x - 1][curr.y] != MazeSymbol.wall:
            next_moves.append(Location(curr.x - 1, curr.y))
        # Move one position left
        if curr.y - 1 >= 0 and self.maze[curr.x][curr.y - 1] != MazeSymbol.wall:
            next_moves.append(Location(curr.x, curr.y - 1))
        # Move one position right
        if curr.y + 1 < self.columns and self.maze[curr.x][curr.y + 1] != MazeSymbol.wall:
            next_moves.append(Location(curr.x, curr.y + 1))
        # Move one position down
        if curr.x + 1 < self.rows and self.maze[curr.x + 1][curr.y] != MazeSymbol.wall:
            next_moves.append(Location(curr.x + 1, curr.y))
        return next_moves

    def finish_line(self, curr):
        if curr.x == self.finish.x and curr.y == self.finish.y:
            return True
        return False

    def draw_path(self, path):
        for loc in path:
            self.maze[loc.x][loc.y] = MazeSymbol.path

    def clear_path(self, path):
        for loc in path:
            self.maze[loc.x][loc.y] = MazeSymbol.empty
