const btn = document.querySelector('.getdata');
const numberdata = document.querySelector('.data');
const datalist = document.querySelector('.list');

btn.addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/users/${numberdata.value}/todos`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        if (data.length>0){
            for (i=0; data.length>i; i++){
                if (data[i].completed){
                 let newli = document.createElement("li");
                 newli.innerHTML = data[i].title;
                 datalist.appendChild(newli);
                } else {
                     let newli = document.createElement("li");
                     newli.innerHTML = data[i].title;
                     datalist.appendChild(newli);
                }
            }
        } else console.log("net takogo");
    })
    .catch(() => { console.log('error')});
  
});


