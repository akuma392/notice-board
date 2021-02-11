let form = document.querySelector("form");

let root = document.querySelector("ul");

let list = [];

function addNotice(event){
    event.preventDefault();

    console.log(form.elements.category.value)

    list.push({
        title :form.elements.title.value ,
        category : form.elements.category.value
    });

    createUI(list,root);

    form.elements.title.value = "";
    form.elements.category.value = "";
}

function createUI(data = list,root){
    root.innerHTML = "";
    list.forEach((elm)=>{
        let li = document.createElement("li");

        let h3 = document.createElement("h3");
        h3.innerText = elm.title;
        let p = document.createElement("p");
        p.innerText = elm.category;

        li.append(h3,p);

        root.append(li);

    })
}



function handleEvent(event){
   if(event.target.value == 0){
       let child = event.target
       let h3 = event.target.querySelector("h3");

       let input = document.createElement("input");
        input.innerText = event.target.value;
    //    child.replaceChildren(input,child.firstElementChild);

    child.replaceChildren(input,child.lastElementChild);
    input.focus();

    input.addEventListener("blur",(event)=>{
        child.replaceChildren(h3,child.lastElementChild);
        h3.innerText = event.target.value;
    })

       console.log(child,h3);
   }};

   

function handleEventFocus(event){
    console.log(event.target);
    return event.target;
}

form.addEventListener("submit",addNotice)
let output = root.addEventListener("dblclick", handleEvent);