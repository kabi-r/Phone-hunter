// document.getElementById('search').addEventListener('click', function(){
//     const inputField = document.getElementById('inputField')
//     const input = inputField.value;
//     console.log(input);
// })
const loadPhones = (input) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${input}`
    fetch(url)
  .then(res => res.json())
  .then(data => displayPhones(data.data))
}

const displayPhones = (data) =>{
    // console.log(data);
    const showPhones=document.getElementById('phones-show')
    showPhones.innerHTML=''
    data.forEach(phone => {
        // console.log(phone);
        const {phone_name, image} = phone;
        const container = document.createElement('div')
        container.innerHTML=`
        <div class="border border-gray-400 rounded p-2">
            <img class="mx-auto" src="${image}" alt="">
            <div class="mt-5">
                <h5 class="text-2xl font-semibold">${phone_name}</h5>
                <p class="text-base">Phone more information you click ta details button</p>
                    <button onclick=showPhoneDetails() class="bg-sky-600 hover:bg-blue-800 hover:text-white rounded-lg py-2 text-xl font-medium px-5 mt-3">Details</button>
            </div>
        </div>
        `
        showPhones.appendChild(container)
    });
}

document.getElementById('search').addEventListener('click', function(){
    const inputField = document.getElementById('inputField')
    const input = inputField.value;
    // console.log(input);
    loadPhones(input)
    inputField.value=''
})

// show phone detailed
const showPhoneDetails = () =>{
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

loadPhones('apple')