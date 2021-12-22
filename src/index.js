var points = [
    {x: 10, y: 20},
    {x: 40, y: 40},
    {x: 60, y: 20},
    {x: 80, y: 50},
    {x: 100, y: 70},
    {x: 120, y: 90},
    {x: 140, y: 40},
    {x: 160, y: 70},
    {x: 180, y: 90},
    {x: 200, y: 110},
    {x: 220, y: 130},
    {x: 240, y: 105},
    {x: 260, y: 115},
    {x: 280, y: 18},
]

const createPoint = (x, y) => {
    const point = document.createElement("div");
    point.style.width = '10px';
    point.style.height = '10px';
    point.style.borderRadius = '50%';
    point.style.backgroundColor = 'blue';
    point.style.position = 'absolute';
    point.style.left = x + 'px';
    point.style.top = y + 'px';

    const handleMouseOver = (e) => {
        e.target.style.cursor = 'pointer';
        e.target.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
    }

    const handleMouseOut = (e) => {
        e.target.style.cursor = '';
        e.target.style.boxShadow = '';
    }

    const handleClick = (e) => {
        if (e.target.style.backgroundColor == 'blue')
            e.target.style.backgroundColor = 'red';
        else 
            e.target.style.backgroundColor = 'blue';
    }

    const handleDoubleClick = (e) => {
        graph.removeChild(e.target);
    }

    point.addEventListener('click', handleClick);
    point.addEventListener('dblclick', handleDoubleClick);
    point.addEventListener('mouseover', handleMouseOver);
    point.addEventListener('mouseout', handleMouseOut);

    return point;
}


const graph = document.getElementById("graph");
graph.style.width = '400px';
graph.style.height = '300px';
graph.style.border = '2px solid green';
graph.style.position = 'relative';


for (let i=0; i<points.length; i++) {
    const newPoint = createPoint(points[i].x, points[i].y);
    graph.appendChild(newPoint);
}
