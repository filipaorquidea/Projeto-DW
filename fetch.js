async function fetchProjectsJSON() {
    const response = await fetch('https://api.cosmicjs.com/v3/buckets/deep-strange-web-production/objects?pretty=true&query=%7B%22type%22:%22images%22%7D&limit=10&skip=20&read_key=UaK6ewXkTXExUTsdEZU6sQiFdljWaO4azEp5fE9FfUX7T41VnH&depth=1&props=slug,title,metadata,id,');
    
    const projects = await response.json();
    return projects.objects;
  }

  fetchProjectsJSON().then(projects => {
    console.log(projects); // fetched movies

    for (let i = 0; i < projects.length; i++) {
       object = document.createElement("object");
       console.log(projects[i].slug);
       p.innerHTML = "<a href=\"objeto.html?id="+projects[i].id+"\">"+projects[i].slug+"</a>";
       document.body.appendChild(object);
    }
  });