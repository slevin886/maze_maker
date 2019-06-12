from flask import render_template, Flask
from maze_maker import Maze, manhattan_distance
from maze_search import depth_first_search, breadth_first_search, astar


app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    m = Maze()
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
