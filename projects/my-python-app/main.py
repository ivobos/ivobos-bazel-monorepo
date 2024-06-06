from flask import Flask
from random import randint
import sys

from projects.calculator.calculator import Calculator

app = Flask(__name__)
my_calculator = Calculator()

@app.route('/')
def hello():
    num1 = randint(0, 100)
    num2 = randint(0, 100)
    message = "{} + {} = {}".format(num1, num2, my_calculator.add(num1, num2))
    return message

if __name__ == "__main__":
    print("Python version")
    print(sys.version)
    print("Version info.")
    print(sys.version_info)
    app.run()

