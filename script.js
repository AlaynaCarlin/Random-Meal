const baseURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
let url;

const ingredientSearch = document.getElementById('search');
const form = document.getElementById('form');
const displayResults = document.getElementById('displayResults');

form.addEventListener('submit', recipeFetch);

async function recipeFetch(e){
    e.preventDefault();
    url = `${baseURL}${ingredientSearch.value}`
    // console.log(url);
    const response = await fetch(url);
    if (response.status === 404){
        displayResults.innerHTML = `<h3>No results found. Please search a different ingredient.`
    }

    // console.log(response);
    const json = await response.json();
    displayMeals(json);
}

function displayMeals (meals) {
    console.log(meals);

    while (displayResults.firstChild) {
        displayResults.removeChild(displayResults.firstChild);
    }

    let randomInt1 = Math.floor(Math.random() * (3 - 0) +0);
    let randomInt2 = Math.floor(Math.random() * (6 - 4) +4);
    let randomInt3 = Math.floor(Math.random() * (10 - 7) +7);

    let meal0 = document.createElement('div');
    let img0 = document.createElement('img');
    let name0 = document.createElement('h4');
    let meal1 = document.createElement('div');
    let img1 = document.createElement('img');
    let name1 = document.createElement('h4');
    let meal2 = document.createElement('div');
    let img2 = document.createElement('img');
    let name2 = document.createElement('h4');

    img0.src = meals.meals[randomInt1].strMealThumb;
    name0.textContent = meals.meals[randomInt1].strMeal;

    img1.src = meals.meals[randomInt2].strMealThumb;
    name1.textContent = meals.meals[randomInt2].strMeal;

    img2.src = meals.meals[randomInt3].strMealThumb;
    name2.textContent = meals.meals[randomInt3].strMeal;

    displayResults.appendChild(meal0);
    meal0.appendChild(name0);
    meal0.appendChild(img0);
    displayResults.appendChild(meal1);
    meal1.appendChild(name1);
    meal1.appendChild(img1);
    displayResults.appendChild(meal2);
    meal2.appendChild(name2);
    meal2.appendChild(img2);
}