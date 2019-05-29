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


def depth_first_search(start, finish_line, next_moves):
    """start is a Move, finish_line is a function, next_moves is a function"""
    frontier = Stack()
    frontier.push(Move(start, None))
    searched = {start}
    while not frontier.stuck:
        loc = frontier.pop()
        active = loc.current
        if finish_line(active):
            return loc
        for space in next_moves(active):
            if space not in searched:
                searched.add(space)
                frontier.push(Move(space, loc))
    return None
