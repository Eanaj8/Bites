let displayInstructions= document.createElement('p')

displayInstructions.innerText ='Select your desired dining option'

//body.appendChild(displayInstructions)
document.body.appendChild(displayInstructions)
//Track logo selection and house in local storage for processing

function clickedRestaurantLogo(restaurants, logoArrays) {

  //create a slected restaurant variable using for-of loops 

  for (let restaurant of restaurants) {

    for (let logo of logoArrays) {

      logo.addEventListener('click', function (event) {

        if (event.currentTarget.name === restaurant.name) {

          addDataToLocalStorage(restaurant)

        }

        //Reference created to go to results page

        window.location = './results.html' 

      })

    }

  }

}

//Function to store the selection of restaurant object instance

function addDataToLocalStorage(data){

  localStorage.setItem('restaurant', JSON.stringify(data))

}



restaurantSelector(cuisineSelectors, restaurantArray)