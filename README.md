# Setup

## Tools setup

Installed HomeBrew

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Installed GitHub CLI tools

    brew install gh

Validate GH tools

    gh auth login
    gh repo clone dgies/incubator-airflow

Install JetBrains PyCharm
https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=mac

Install Python 3.13.0 to augment installed, out-of-support Python 3.7.0

Install PostgreSQL

    brew install postgresql

Install Node/Rect

    brew install node

Startup PG server

    brew services run postgresql
    psql postgres
    \l
    \dt
    \q
    brew services stop postgresql

### Generate Frontend

    npx create-react-app frontend
    cd frontend
    npm install react-router-dom
    npm start

## App setup

### Setup virtualenv and pip

    cd /Users/dgies/PycharmProjects/HelloWorldFlaskReact
    python3 -m venv
    source .venv/bin/activate
    pip install -r requirements.txt

#### Setup Windows
    
    python -m venv .venv
    cd C:\Users\dgies\dev\HelloWorldFlaskReact 
    .\.venv\Scripts\activate
    pip install -r requirements.txt
    cd frontend
    npm install

### Start backend

    cd /Users/dgies/PycharmProjects/HelloWorldFlaskReact
    source .venv/bin/activate
    /Users/dgies/PycharmProjects/HelloWorldFlaskReact/.venv/bin/python -m flask run 

### Start frontend

    cd /Users/dgies/PycharmProjects/HelloWorldFlaskReact/frontend
    npm start

# Using the app

Start backend + frontend

Frontend is at http://localhost:3000/
Backend is at http://127.0.0.1:5000/