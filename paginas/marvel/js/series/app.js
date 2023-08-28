const series = {
    render:()=>{

        const urlAPI = 'http://gateway.marvel.com/v1/public/series?ts=1&apikey=b3fa2b30b05dc378e5be9ba8222276f0&hash=31b1ac70a4302201e6bfa79d0bc914d2';
        const comicsRow = document.querySelector('#comics-row');
        let contentHTML = '';

         var columns = 5;
         var rows = 4;


         fetch(urlAPI)
         .then(res => res.json())
         .then((json) => {

 
             for(const series of json.data.results){
          

                    let urlComic = series.urls[0].url;  
                    //console.log("urlComic: " +urlComic);
                    
                    contentHTML +=
                    `<div class="card">
                        <div class="image-container">
                         
                                <img src="${series.thumbnail.path}.${series.thumbnail.extension}" alt="${series.title}" id="${series.id}" >
                          
                        </div>
                        <div class="card-footer">
                            <h3 class="title">${series.title}</h3>                                                     
                          <button id="readMore" onclick="openModal(${series.id})">Open Modal</button>
                        </div>
                    </div>`;                         
        }

        comicsRow.innerHTML = contentHTML;

    });

    }
};

series.render();


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal(id)
{
  const urlAPI = 'http://gateway.marvel.com/v1/public/series/'+id+'?ts=1&apikey=b3fa2b30b05dc378e5be9ba8222276f0&hash=31b1ac70a4302201e6bfa79d0bc914d2';
  const detalleRow = document.querySelector('#modalContent');
  let contentHTML = '';
  

   var columns = 5;
   var rows = 4;


   fetch(urlAPI)
   .then(res => res.json())
   .then((json) => {


    
    for(const detalles of json.data.results){


    //  let urlDetalle = detalles.creators[0].items.name;  
   // let urlComic = series.urls[0].url;  

      console.log("Creador(es): " +detalles.creators.items[0].name + " - " + detalles.creators.items[0].role);
      console.log("Detalles :" +detalles.startYear + "-" +detalles.endYear);

      contentHTML += 
        `<div class="detail-content" id="detail">Detalle</div>
        <div><label id="creador">Creador: " ${detalles.creators.items[0].name}"</label></div>
        <div><label id="rol">Rol: " ${detalles.creators.items[0].role}"</label></div>
        `;


    }
    detalleRow.innerHTML = contentHTML;

   });
console.log("OpenModal: " +id);



var btn = document.getElementById("readMore");
modal.style.display = "block";

}