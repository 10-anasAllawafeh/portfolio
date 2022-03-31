`use strict`;
function hline() {
    document.write(`<br> <hr>`);
}
// let para=document.createElement(`li`);
// ul1.appendChild(para);
// para.id=`p1`;


async function getData() {
    
    let responce= await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.5fdf7554df7d097ac56a7287ed04a614&q=aqaba&format=json`);
    // console.log(responce);
    let data= await responce.json();
    console.log(data);

    let output=``;
    
    displayName=data.map((name_1,index) => 
    {
    let new_name=name_1.display_name.split(",",2);
    // let new_name2=name_1.display_name.slice(0,26);
    output += `<li>display_name: ${new_name}  ||  Longitude: ${name_1.lon.slice(0,2)}  ||  Latitude: ${name_1.lat.slice(0,2)}<br><hr></li>`}

);
    console.log(displayName);
    document.body.innerHTML=output;




    // displaylon=data.map((lon_1,index) => output += `<li>Longitude: ${lon_1.lon}</li>`);
    // document.body.innerHTML=output;
    // displaylat=data.map((lat_1,index) => output += `<li>Latitude: ${lat_1.lat}</li>`);
    // document.body.innerHTML=output;
}
getData();





str=`ahmad went to aqaba Ahmad eated`;

ex=new RegExp(/a/i);

console.log(str.replace(/a/,`A`));

let x=prompt("num1");
let y=prompt("num2");
console.log(Number(x)+Number(y));

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

