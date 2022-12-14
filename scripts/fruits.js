fruitsUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fruit1 = document.querySelector('#fruit1');
fruit2 = document.querySelector('#fruit2');
fruit3 = document.querySelector('#fruit3');


const requestFruits = async(fruitsUrl)=>{
    const answer = await fetch(fruitsUrl);
    console.log(answer);

    if(answer.ok === true){
        const fruitList = await answer.json();
        console.log(fruitList);
        displayFruits(fruitList);
    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.");
    }

};

const displayFruits = (fruitList) =>{
    fruit1.innerHTML = fruitList[3].name;
    fruit2.innerHTML = fruitList[7].name;
    fruit3.innerHTML = fruitList[35].name;
}

requestFruits(fruitsUrl);