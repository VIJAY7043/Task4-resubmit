//1
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

// Parse strings back to JSON objects
let parsedObj1 = JSON.parse(obj1String);
let parsedObj2 = JSON.parse(obj2String);


function areObjectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
//2

let result = areObjectsEqual(parsedObj1, parsedObj2);

console.log(result); 
async function getCountriesAndDisplayFlags() {
    try {
      
      const response = await fetch('https://restcountries.com/v2/all');
  
      //  (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const countries = await response.json();
  
      // Display flags in the container
      const flagsContainer = document.getElementById('flags-container');
      countries.forEach(country => {
        const flagImage = document.createElement('img');
        flagImage.src = country.flag;
        flagImage.alt = `${country.name} Flag`;
        flagsContainer.appendChild(flagImage);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  getCountriesAndDisplayFlags();
  3
  async function getCountriesInfo() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const countriesData = await response.json();
  
      // Extract information
      countriesData.forEach(country => {
        const name = country.name.common;
        const region = country.region || 'N/A';
        const subregion = country.subregion || 'N/A';
        const population = country.population || 'N/A';
  
        console.log(`Country: ${name}`);
        console.log(`Region: ${region}`);
        console.log(`Subregion: ${subregion}`);
        console.log(`Population: ${population}`);
        console.log('='.repeat(30));
      });
  
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
 n
  getCountriesInfo();
  