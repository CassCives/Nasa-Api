//The user will enter a date. Use that date to get the NASA picture of the day from that date! 
//https://api.nasa.gov/
document.querySelector("button").addEventListener("click", lookForPhoto)

function lookForPhoto(){
    let userDate = document.querySelector("input").value
    let url = "https://api.nasa.gov/planetary/apod?api_key=aRd31ZVOH5TixorwqgcHWOchpJsMDNczULiUzx5Q" + `&date=${userDate}`
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("img").src = data.url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}