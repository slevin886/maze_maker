from flask import render_template, Flask, request
from maze_maker import Maze, manhattan_distance, Location
from maze_search import depth_first_search, breadth_first_search, astar
import numpy as np

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    m = Maze()
    if request.method == 'POST':
        if request.form['rand'] == 'loc':
            rand_x = np.random.choice(np.arange(10))
            rand_y = np.random.choice(np.arange(10)) if rand_x != 0 else np.random.choice(np.arange(1, 10))
            m = Maze(finish=Location(x=rand_x, y=rand_y))
    final_dfs, path_dfs = depth_first_search(m.start, m.finish_line, m.frontier)
    if path_dfs is None:
        while path_dfs is None:
            m = Maze()
            final_dfs, path_dfs = depth_first_search(m.start, m.finish_line, m.frontier)
    final_bfs, path_bfs = breadth_first_search(m.start, m.finish_line, m.frontier)
    distance = manhattan_distance(m.finish)
    final_astar, path_astar = astar(m.start, m.finish_line, m.frontier, distance)
    return render_template('home.html', maze_map=m.maze, dfs_path=path_dfs, bfs_path=path_bfs,
                           astar_path=path_astar, final_bfs=final_bfs, final_dfs=final_dfs,
                           final_astar=final_astar)


if __name__ == '__main__':
    app.run(debug=True)
