const button = document.querySelector("#liveToastBtn");
const task = document.querySelector("#task");
const list = document.querySelector("#list");
const liveToast = document.querySelector("#liveToast");
const allLi = document.querySelector("li");

allLi.forEach(e => {
    e.addEventListener("click", selectItem)

    function selectItem(){
        e.classList.toggle("checked")
    }

    let removeBtn = document.createElement("span");
    removeBtn.classList.add("close");
    let txt = document.createTextNode("\u00D7");
    removeBtn.appendChild(txt)
    e.appendChild(removeBtn)
    removeBtn.addEventListener("click", removeItem);

    function removeItem(){
        let answer = window.confirm("Kaldırmak istediğinize emin misiniz?");
        if (answer) {
            e.remove();
        }
    }
})

function newElement (){
if (task.value == "" || !task.value.trim() ){
    $ (`.error`).toast("show")
}
else {
    let newLi = document.createElement("li")
    newLi.innerHTML = task.value;
    $(`success`).toast("show")
    list.appendChild (newLi)
    let removeBtn = document.createElement("span")
    removeBtn.classList.add("close");
    let txt = document.createTextNode("\u00D7");
    removeBtn.appendChild(txt)

    newLi.appendChild(removeBtn);
    removeBtn.addEventListener("click", removeItem);

    function removeItem(){
        let answer = window.confirm("Kaldırmak istediğinize emin misiniz?");
        if(answer) {
            newLi.remove();
        }
    }
    newLi.addEventListener("click", selectItem);
    function selectItem(){
        newLi.classList.toggle("checked");
    }
}
task.value = ""
}

