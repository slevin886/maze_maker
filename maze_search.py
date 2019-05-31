class Stack:

    def __init__(self):
        self._next_moves = []

    def push(self, loc):
        self._next_moves.append(loc)

    def pop(self):
        return self._next_moves.pop()

    @property
    def stuck(self):
        return not self._next_moves

    def __repr__(self):
        if self._next_moves:
            return repr([(loc.x, loc.y) for loc in self._next_moves])
        return None


class Move:

    def __init__(self, current, previous):
        self.current = current
        self.previous = previous


def get_path(locations):
    path = []
    while locations.previous is not None:
        locations = locations.previous
        path.append(locations.current)
    return path


def depth_first_search(start, finish_line, next_moves):
    """
    Algorithm for a depth-first search on class Maze
    :param start: of class 'Move' includes a class 'Location' of current and previous moves
    :param finish_line: a function from class 'Maze' that checks if you reached the finish line
    :param next_moves: a list of class Location for available next moves given a Location
    :return: None if there is no maze solution or embedded Class 'Move' with the path and all searched locations.
    """
    frontier = Stack()
    frontier.push(Move(start, None))
    searched = {start}
    full_search = []
    while not frontier.stuck:
        loc = frontier.pop()
        active = loc.current
        full_search.append(active)
        if finish_line(active):
            return loc, full_search
        for space in next_moves(active):
            if space not in searched:
                searched.add(space)
                frontier.push(Move(space, loc))
    return None
