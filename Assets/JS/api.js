const apiData = [];

const fetchTv = () => {
    const apiEndpoint = 'https://api.tvmaze.com/shows';

    fetch(apiEndpoint)
    .then((res) => {
        return res.json();
    }) 
    .then((data) => {
        console.log(data);
        apiData.push(data);
    })
    .catch((error) => {

    })
    .finally(() => {

        apiData[0].map((show) => Cards(show));
    })
}

const Cards = (data) => {
    // console.log(data.name);
    document.getElementById("app").innerHTML +=`
    <figure class="card">
    <h2>${data.name}</h2>
    <img src="${data.image.medium}" alt="">
    <p>${data.runtime}</p>
    <p>${data.genres}</p>
    <p>${data.rating.average}</p>
    </figure>
    `
}

fetchTv();

