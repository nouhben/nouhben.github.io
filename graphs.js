const mylog = document.getElementById('log');

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['MEX', 'EZE'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['LIM', 'BKK'],
    ['LOS', 'JFK']
];

//we represent the graph with a adjencency list instead of 2D matrix bcz we have few entries and few routes
//therefor it would be much more efficent to use an adjecency list 

//THE GRAPH
//it is better to use a map instead of a regular object
const adjecencyList = new Map();

//ADD A NODE
function addNode(airport) {
    adjecencyList.set(airport, []);
}
//ADD AN EDGE, undirected
function addEdge(origin, destination) {
    adjecencyList.get(origin).push(destination);
    adjecencyList.get(destination).push(origin);
}

//create the graph 
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

adjecencyList.forEach(e => {
    mylog.innerHTML += '[' + e + ']';
    mylog.innerHTML += '<br>';
});

//BFS Breadth First Search
function BFS(start) {
    const visited = new Set(); //occure only once
    const queue = [start]; //FIFO File

    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjecencyList.get(airport);
        for (const destination of destinations) {
            if (destination === 'BKK') {
                mylog.innerHTML += 'Found it with <h1>BFS</h1>!';
            }
            if (!visited.has(destination)) {
                visited.add(destination); // to mark the destination as visited
                queue.push(destination); //
            }
        }
    }
}

BFS('JFK');

//DFS Depth first search
function DFS(start, visited = new Set()) {
    console.log(start);
    visited.add(start);
    const destinations = adjecencyList.get(start);
    console.log(destinations);
    for (const destination of destinations) {
        if (destination === 'BKK') {
            mylog.innerHTML += 'Found it with <h1>DFS</h1>!';
            return;
        }
        if (!visited.has(destination)) {
            DFS(destination, visited);
        }
    }
}
DFS('PHX');
