const listStorage ={ 
};
const list = document.querySelector(".list");
function add() {
    const input = document.querySelector('input');

    if (!input.value) {
        return;
    }

    const li = document.createElement('li');
    list.appendChild(li);

    const div = document.createElement('div');
    div.innerHTML = input.value ;


    div.contentEditable = true;
    li.appendChild(div);


    const btn = document.createElement('button');
    btn.innerHTML = 'X';


    btn.addEventListener('click', function() {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

        if (isAllowed) {
            li.remove();
        }
    });
    li.appendChild(btn);


    input.value = '';
}

const input = document.getElementById("input")
function keyup(ev) {
    if (ev.key == 'Enter') {
        add();
        localStorage.setItem('input',listStorage.input)
    }
};

function clearList(){
    const listItem = document.querySelector('li');
    listItem.remove()
    if (li = true) {
       repeat(clearList())   
}else{
        alart("nothing to remove")ז
    }
}
function repeat( clearList,times) {
    for (x = 0; x < times; x++) {
    }
}
