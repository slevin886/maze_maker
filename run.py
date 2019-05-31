from flask import render_template, Flask
from maze_maker import Maze

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    m = Maze()
    return render_template('home.html', maze_map=m.maze)


if __name__ == '__main__':
    app.run(debug=True)
