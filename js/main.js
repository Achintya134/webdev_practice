const tid =1;

function activate(){
    
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
    
}

function toggleComplete(checkbox){
    
    //this.classList.toggle("strike");
    var content = checkbox.nextElementSibling;
    console.log(checkbox);
    content.classList.toggle("strike");
    // if(content.classList.contains("strike")){
        
    // }
    

}

const viewContent = (li=[]) => {
    const ol = document.createElement('ol');
    li.forEach(li => {
    
    var checkbox = document.createElement('input');
              
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    
   
    
    let btn = document.createElement('button');
    btn.className="collapsible";
    btn.textContent=li.title;

    let desc= li.desc;
    let date= li.duedate;
    let time= li.time;
    //content = 'abcdefg';
    let div = document.createElement('div');
    let span = document.createElement('div');
    span.className = "content";
    div.className = 'tag'
    //adding list item title
    const label = document.createElement('label');
    label.className = 'Title';
    label.textContent=li.title;
    //adding listItem desc
    const para = document.createElement("p");
    const node = document.createTextNode(desc);
    //adding date node to the item
    const dt = document.createElement("p");
    const dt_node = document.createTextNode(date);
    const timet = document.createElement("p");
    const timet_node = document.createTextNode(time);
    span.appendChild(checkbox);
    para.appendChild(node);
    dt.appendChild(dt_node);
    timet.appendChild(timet_node);
    let ulelement = document.getElementById("list");
    ulelement.appendChild(btn);
    ulelement.appendChild(span);
    span.appendChild(label);
    span.appendChild(para);
    span.appendChild(dt);
    span.appendChild(timet);
    if (li.status === 'true') {
        checkbox.checked=true;
        checkbox.nextElementSibling.classList.add("strike");
    }
    checkbox.addEventListener("change",function() {
        var content = this.nextElementSibling;
    console.log(content);
    content.classList.add("strike");
    if (checkbox.checked === false) 
        content.classList.remove("strike");
    else 
        content.classList.add("strike");
    });
    });
    
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click",activate );
    }
}

const addContent = () => {
    
    // creating checkbox element
    var checkbox = document.createElement('input');
              
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.checked=false;
    
    let btn = document.createElement('button');
    let title= document.getElementById("title").value;
    btn.className="collapsible";
    btn.textContent=title;
    let desc= document.getElementById("desc").value;
    let date= document.getElementById("dt").value;
    let time= document.getElementById("time").value;
    content = 'abcdefg';
    let div = document.createElement('div');
    let span = document.createElement('div');
    span.className = "content";
    div.className = 'tag'
    //adding list item title
    const label = document.createElement('label');
    label.className = 'Title';
    label.textContent=title;
    //adding listItem desc
    const para = document.createElement("p");
    const node = document.createTextNode(desc);
    //adding date node to the item
    const dt = document.createElement("p");
    const dt_node = document.createTextNode(date);
    const timet = document.createElement("p");
    const timet_node = document.createTextNode(time);
    span.appendChild(checkbox);
    para.appendChild(node);
    dt.appendChild(dt_node);
    timet.appendChild(timet_node);
    let ulelement = document.getElementById("list");
    ulelement.appendChild(btn);
    ulelement.appendChild(span);
    span.appendChild(label);
    span.appendChild(para);
    span.appendChild(dt);
    span.appendChild(timet);
    btn.addEventListener("click",activate);
    checkbox.addEventListener("change",function() {
        var content = this.nextElementSibling;
    console.log(content);
    content.classList.add("strike");
    if (checkbox.checked === false) 
        content.classList.remove("strike");
    else 
        content.classList.add("strike");
    });
};

/*const addPerson = (firstName, lastName, parent) => {
    const li = document.createElement('li');
    li.classList.add('person');
    li.textContent = `${firstName} ${lastName}`;
    parent.appendChild(li);
}
*/

const fetchData = () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(response) {
        //if(this.status == 200){
            const data = this.responseText;
            const li = JSON.parse(data);
            viewContent(li);
        
        
    });
    xhr.open('GET','data/todolist.json');
    xhr.send();
}
//this.addEventListener('load',activate());
this.addEventListener('load',fetchData);
const showBtn = document.getElementById('show-btn');
showBtn.addEventListener('click',addContent);