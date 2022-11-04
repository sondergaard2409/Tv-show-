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
        console.error(error.message);
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
    <img src="${data.image.medium}" alt="image-of-show">
    <p>Runtime: ${data.runtime}</p>
    <p>Genre: ${data.genres}</p>
    <p>Rating: ${data.rating.average}</p>
    </figure>
    `
}

fetchTv();

