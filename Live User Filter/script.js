const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems=[] 

getdata();
filter.addEventListener('input',(e)=> filterData(e.target.value))
async function getdata(){
    const res = await fetch('https://randomuser.me/api?results=100')  
    const {results} = await res.json();
    
    results.innerHTML=''

    results.forEach(user =>   {
        const li = document.createElement('li')
        listItems.push(li)

        li.innerHTML= `
           <img src="${user.picture.large}" alt="${user.name.first}">
           <div class="user-info">
           <h4>${user.name.first} ${user.name.last}</h4>
           <p>${user.location.city}, ${user.location.country}</p>
           </div>
        `
        result.appendChild(li);
    })

}

function filterData(searchItem){
    listItems.forEach(item =>{
   if(item.innerText.toLowerCase().includes(searchItem.toLowerCase()))
    {
       item.classList.remove('hide');
        
    }
    else{
        item.classList.add('hide');
    }
    })
}