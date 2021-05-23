/* 
    To Fetch API You Have to ways : (The Old way), (Tha New way)
*/
/* 
/// The Old Way
fetch("https://www.breakingbadapi.com/api/").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
})

 */


/// The New Way
const api1 = "https://www.breakingbadapi.com/api/characters";
const api2 = "https://www.breakingbadapi.com/api/episodes";


async function getInfo() {
    try{
        const response = await fetch(api1);
        const data = await response.json();
        console.log(data);
        printData(data);
        

    }catch(e){
        console.log(e.message);
    }
    
}

function printData(data) {
    let actors = document.querySelector('.actors');
    
    actors.innerHTML = 
    `
        <select onchange="getActor(this.value)">
            <option> Please Select Actor </option>
            ${data.map(actor => `<option> ${actor.name} </option>`)}
        </select>
    `;
}

async function getActor(name) {
    if (name !== "Please Select Actor") {
        const response = await fetch(`${api1}?name=${name}`);
        const data = await response.json();

        let info = document.querySelector('.info');

        info.innerHTML = `
        <h4> ${data[0].name} (${data[0].nickname})</h4>
        <span class="birthday"> ${data[0].birthday} </span>
        <img src="${data[0].img}" class="img-control">
        `
    } else {
        console.log("");
    }
    
}

getInfo();














