const sheets = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR5u0tEA4bIcRzxOTtx7tmq43juGtjnOgN7uTs7GQvlaYbZ3kNSxlgZjl4l3wIBYzWcXcbHBmL4sC9-/pub?gid=0&single=true&output=csv";
const response = await fetch(sheets);
const csvText = await response.text();

const sanitizeName = (name) => {
  const accentsMap = new Map([ 
    ['á', 'a'], ['à', 'a'], ['â', 'a'], ['ä', 'a'], ['ã', 'a'], ['å', 'a'], 
    ['é', 'e'], ['è', 'e'], ['ê', 'e'], ['ë', 'e'], 
    ['í', 'i'], ['ì', 'i'], ['î', 'i'], ['ï', 'i'], 
    ['ó', 'o'], ['ò', 'o'], ['ô', 'o'], ['ö', 'o'], ['õ', 'o'], ['ø', 'o'], 
    ['ú', 'u'], ['ù', 'u'], ['û', 'u'], ['ü', 'u'], 
    ['ý', 'y'], ['ÿ', 'y'], 
    ['ñ', 'n'], ['ç', 'c'], 
    ['Á', 'a'], ['À', 'a'], ['Â', 'a'], ['Ä', 'a'], ['Ã', 'a'], ['Å', 'a'], 
    ['É', 'e'], ['È', 'e'], ['Ê', 'e'], ['Ë', 'e'], 
    ['Í', 'i'], ['Ì', 'i'], ['Î', 'i'], ['Ï', 'i'], 
    ['Ó', 'o'], ['Ò', 'o'], ['Ô', 'o'], ['Ö', 'o'], ['Õ', 'o'], ['Ø', 'o'], 
    ['Ú', 'u'], ['Ù', 'u'], ['Û', 'u'], ['Ü', 'u'], 
    ['Ý', 'y'], ['Ÿ', 'y'], 
    ['Ñ', 'n'], ['Ç', 'c'], 
    ['A', 'a'], ['B', 'b'], ['C', 'c'], ['D', 'd'], ['E', 'e'], ['F', 'f'], 
    ['G', 'g'], ['H', 'h'], ['I', 'i'], ['J', 'j'], ['K', 'k'], ['L', 'l'], 
    ['M', 'm'], ['N', 'n'], ['O', 'o'], ['P', 'p'], ['Q', 'q'], ['R', 'r'], 
    ['S', 's'], ['T', 't'], ['U', 'u'], ['V', 'v'], ['W', 'w'], ['X', 'x'], 
    ['Y', 'y'], ['Z', 'z'] 
  ]);
  let sanitized = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  sanitized = Array.from(sanitized).map(char => accentsMap.get(char) || char).join('');
  return sanitized.replace(/[^A-Za-z0-9_\-]/g, '_');
};


/**
 * Convertit une chaîne CSV en objet JSON en utilisant ES6
 * @param {string} csvString - La chaîne CSV à convertir
 * @returns {Array} - Tableau d'objets représentant les données CSV
 */
const csvToJson = (csvString) => {
  try {
    const lines = [];
    let currentLine = '';
    let insideQuotes = false;
    
    for (let i = 0; i < csvString.length; i++) {
      const char = csvString[i];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
        currentLine += char;
      } else if (char === '\n' && !insideQuotes) {
        lines.push(currentLine);
        currentLine = '';
      } else {
        currentLine += char;
      }
    }
    
    if (currentLine) {
      lines.push(currentLine);
    }
    
    const headers = lines[0].split(',').map(header => header.trim());
    const result = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;
      
      const values = [];
      let currentValue = '';
      let inQuotes = false;
      
      for (let j = 0; j < lines[i].length; j++) {
        const char = lines[i][j];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentValue);
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      
      values.push(currentValue);
      
      const obj = {};
      headers.forEach((header, index) => {
        let value = values[index] || '';
        
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        }
        value = value.replace(/\r/g, '');

        if (value.includes('\n')) {
          value = value.split('\n').map(line => `<p>${line.trim()}</p>`).join('');
        }
        
        obj[header] = value;
      });
      
      result.push(obj);
    }
    
    return result;
  } catch (error) {
    console.error("Erreur lors de la conversion CSV en JSON:", error);
    return [];
  }
};

const bgColors = [
  "#74bdb6", "#ea7774", "rgba(255, 128, 255)", "#fa6403", "rgba(128, 128, 255)", "#dfaf29", "#fa6403"
];


const matterContainer = document.getElementById('matter-container');
    const THICCNESS = 60;

    // module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
      width:matterContainer.clientWidth,
      height:matterContainer.clientHeight,
      wireframes: false,
      background: 'transparent',
      showAngleIndicator: true,
    }
});

// create elements and ground
var boxA = Bodies.circle(400, 200, 130, 10);
// var boxB = Bodies.rectangle(450, 50, 80, 80);

for (let i = 0; i < 15; i++) {
  let circle = Bodies.circle(
    i, 10, 130, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      label: `Circle Body ${i}` // assign a unique label to each circle
    });
  
  circle.render.fillStyle = bgColors[Math.random() * bgColors.length | 0];
  Composite.add(engine.world, circle);
}

var ground = Bodies.rectangle(matterContainer.clientWidth/2,
  matterContainer.clientHeight+THICCNESS/2,
  27184, 
  THICCNESS, 
  { isStatic: true }
);

let leftWall = Bodies.rectangle(
  0 - THICCNESS/2, 
  matterContainer.clientHeight/2, 
  THICCNESS, 
  matterContainer.clientHeight * 5,
  { isStatic: true }
);
let rightWall = Bodies.rectangle(
  matterContainer.clientWidth + THICCNESS/2, 
  matterContainer.clientHeight/2, 
  THICCNESS, 
  matterContainer.clientHeight * 5,
  { isStatic: true }
);
let topWall = Bodies.rectangle(
  matterContainer.clientWidth/2,
  0 - THICCNESS/2,
  matterContainer.clientWidth,
  THICCNESS,
  { isStatic: true }
);

// add all of the bodies to the world
Composite.add(engine.world, [boxA, ground, leftWall, rightWall, topWall]);

// add mouse control
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engine.world, mouseConstraint);

//allow scroll through canvas
mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function handleResize(matterContainer) {
    // update the renderer's dimensions
    render.canvas.width = matterContainer.clientWidth;
    render.canvas.height = matterContainer.clientHeight;

    // update the ground's position and size
    Matter.Body.setPosition(ground, 
      Matter.Vector.create(matterContainer.clientWidth/2, matterContainer.clientHeight+THICCNESS/2
      ));
    Matter.Body.setPosition(
      rightWall,
      Matter.Vector.create(matterContainer.clientWidth + THICCNESS/2, matterContainer.clientHeight/2
      ));
}

window.addEventListener("resize", () => handleResize(matterContainer));


const jsonData = csvToJson(csvText);

const $projets = document.querySelector(".projets");

const linkedData = {};
Composite.allBodies(engine.world).forEach((body, index) => {
  if (body.label.startsWith('Circle Body')) {
    linkedData[body.label] = jsonData[index % jsonData.length]; // Cycle through JSON data if there are more circles than data
  }
});

const header = document.querySelector("header");
    header.classList.add("fixed");

// Add event listener for clicks on circles
Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
  const clickedBody = event.source.body;

  if (clickedBody && linkedData[clickedBody.label]) {
    const itemData = linkedData[clickedBody.label];
    openModal(itemData);
  }
});

// Add tooltips to circles
Composite.allBodies(engine.world).forEach((body) => {
  if (body.label.startsWith('Circle Body')) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = linkedData[body.label]?.titre|| "No Data";
    document.body.appendChild(tooltip);

    Matter.Events.on(mouseConstraint, "mousemove", function (event) {
      const hoveredBody = Matter.Query.point([body], event.mouse.position)[0];

      if (hoveredBody === body) {
        body.render.lineWidth = 5;
        body.render.strokeStyle = "black";
      } else {
        body.render.lineWidth = 0;
      }

      if (hoveredBody === body) {
        tooltip.style.display = "block";
        let left = event.mouse.absolute.x + 10;
        let top = event.mouse.absolute.y + 20;

        // Adjust position to prevent overflow
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (left + tooltipRect.width > viewportWidth) {
          left = viewportWidth - tooltipRect.width - 10;
        }
        if (top + tooltipRect.height > viewportHeight) {
          top = viewportHeight - tooltipRect.height - 10;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
      } else {
        tooltip.style.display = "none";
      }
    });
  }
});

function openModal(item) {
  const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.transition = "opacity 0.5s";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 0);
    document.body.appendChild(overlay);

  const fiche = document.createElement("div");
    fiche.classList.add("fiche");
    overlay.appendChild(fiche);

  const img = document.createElement("img");
    img.src = `img/${sanitizeName(item.titre)}.jpg`;
    fiche.appendChild(img);

  const close = document.createElement("div");
  close.textContent = 'X';
  close.style.marginTop = '10px';
  close.classList.add("close");
  overlay.appendChild(close);

  close.addEventListener("click", () => {
    document.body.removeChild(overlay);
    mouseConstraint.body = null; // Unselect the clicked circle
  });

  const titre = document.createElement("h1");
    titre.textContent = item.titre;
    fiche.appendChild(titre);
  
  const categories = document.createElement("h2");
    categories.textContent = item.categories;
    fiche.appendChild(categories);
  
  const description = document.createElement("h2");
    description.textContent = item.description;
    fiche.appendChild(description);

  const desc = document.createElement("div");
    desc.innerHTML = item.modale;
    fiche.appendChild(desc);

  if(item.images !== "") {
      const images = item.images.split(",");
      const gallery = document.createElement("div");
      gallery.classList.add("gallery");
      images.forEach((image) => {
        const img = document.createElement("img");
        const name = sanitizeName(item.titre);
        img.src = `img/${name}/${image}`;
        gallery.appendChild(img);
      });
      fiche.appendChild(gallery);
  }
};