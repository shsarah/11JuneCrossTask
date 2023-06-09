const optionElement=document.getElementById("number");


optionElement.addEventListener("change", ()=>{
    let data='';
    let color='';
    let value=optionElement.value;
    for(let i=0;i<value;i++){
        for(let j=0;j<value;j++){
            if(i===j || i+j===(value-1)){
                color="black";
            }
            else{
                color=" "
            }

            data+=`<td style="background-color:${color}"> </td>`;
        }

        data+=`</tr>`
    }

    document.getElementById("table").innerHTML=data;
})


