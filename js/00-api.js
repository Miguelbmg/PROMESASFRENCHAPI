const URL_API = "data/campers.json";

function loadData(){
    fetch(URL_API)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            viewHTML(data);
        })
}
function viewHTML(myData){
    const {id,nombre,edad,ingles} = myData;
}