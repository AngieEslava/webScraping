//En el siguiente script se extraen los datos de titulo de empleo, ubicación y url de acceso y se guardan en un array de arrays que se lleva al local storage 
//El código puede ser directamente ejecutado en la consola del navegador

let jobs = document.querySelectorAll(".strip-side-borders"); //Recupero los datos que necesito de la pagina web

listJobs = [...jobs].map(job => {
  return {
    link: job.href,
    trabajo: job.innerText.split('\n')[0],
    ubicación:job.innerText.split('\n')[1]
  }
});  // convierto los datos en array de donde recupero los datos solicitados, link, trabajo, ubicación
// Guardo los datos en localStorage para una posterior utilizacion
localStorage.setItem('listJobs', JSON.stringify(listJobs));
// Mostrar los datos recuperados en consola como tabla 
console.table( listJobs)


