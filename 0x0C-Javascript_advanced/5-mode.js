function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }

  function createButton(buttonName, mode, container) {
    return function(){
        const btn = document.createElement("button");
        btn.setAttribute("id", buttonName);
        btn.innerText = buttonName;
        container.appendChild(btn);
        btn.style.backgroundColor = "white";
        btn.style.width = "100px";
        btn.style.height = "30px";
        btn.style.borderRadius = "12%";
        btn.addEventListener("click", (e) => {
            mode();
          });
    }
}

function main () {
    const container = document.createElement('div');
    container.style.marginTop = "85vh";  
    document.body.appendChild(container);
    const paragraph = document.createElement("p");
    paragraph.innerText = "Welcome Holberton!";
    container.appendChild(paragraph);
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode  = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode  = changeMode(12, "normal", "lowercase", "white", "black");
    const spookyStyle = createButton('spooky', spooky, container)();
    const darkStyle = createButton('Dark mode', darkMode, container )();
    const screamStyle = createButton('Scream mode', screamMode, container)();  
  }
  
  main();