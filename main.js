const btn = document.querySelector('.btn')
const inputText= document.querySelector('.input__text')
const list = document.querySelector('.list')
let listArr 

if (!localStorage.listArr){
    listArr = []
} else{
    listArr = JSON.parse(localStorage.getItem('listArr'))
}


btn.addEventListener('click', () =>{
    let textValue = inputText.value
    inputText.value = ''
    listArr.push(textValue)
    console.log(listArr);
    localStorage.setItem('listArr ' , JSON.stringify(listArr))
    fillList()
})


const fillList = index =>{
    list.innerHTML = ''
    if (listArr.length > 0){
        listArr.forEach((item, index) => {
            list.innerHTML += createElement(item, index)
        });
    }
}




const createElement = (text, index) =>{
    return `
    <li class="list__item">${text}
    <button onclick="deleteItem(${index})" class="deleteBtn-btn">Delete</button>
    </li>
    `
}

const deleteItem = index =>{
    listArr.splice(index, 1)
    localStorage.setItem('listArr ' , JSON.stringify(listArr))
    fillList()
}

fillList()