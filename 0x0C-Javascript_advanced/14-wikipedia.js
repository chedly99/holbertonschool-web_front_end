const createElement = (data) => {
    console.log(data);
    const para = document.createElement("p");
    para.innerText = data;
    document.body.appendChild(para);
  };
  
  const queryWikipedia = (callback) => {
    const Request = new XMLHttpRequest();
    Request.addEventListener("readystatechange", () => {
      if (Request.readyState === 4 && Request.status === 200) {
        console.log(Request.batchcomplete);
        callback(JSON.parse(Request.responseText).query.pages[21721040].extract);
      } else if (Request.readyState === 4) {
        console.log("fail to fetch")
      }
    });
    Request.open(
      "GET",
      "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    );
    Request.send();
  };
  
  queryWikipedia((arg) => createElement(arg));