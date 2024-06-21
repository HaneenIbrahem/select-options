let data = ""

for(let i = 1950; i < 2005; i++){
    data += `<option value="${i}">${i}</option>`
}
document.querySelector("select").innerHTML=data;