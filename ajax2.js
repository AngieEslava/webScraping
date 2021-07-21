var archivo = document.getElementById("#boton");
if(archivo){
    addEventListener('click',datosJson());
}


function datosJson(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'data.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                for (let i = 0 ; i < item.length ; i++){
                    res.innerHTML += `
                    <tr>
                        <td>${item[i].job}</td>
                        <td>${item[i].location}</td>
                        <td>${item[i].enlace}</td>
                    </tr>

                    `
                }

                
            }
        }
    }
}