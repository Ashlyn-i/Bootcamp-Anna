// 1. use document.getElementById to select the searchTerm Button
const searchTerm = document.getElementById("searchTerm")
// 2. use document.getElementById to select the searchButton Button
const searchButton = document.getElementById("searchButton")
// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener('click', search);
  function search() {
  // 4. use the value property of the searchInput to get the search term
  const term = searchTerm.value;
  // 5. select the searches div using document.getElementById
  const searches = document.getElementById("searches")
  // 6. create a new li element using document.createElement
  const newSearch = document.createElement('li')
  // 7. set the innerHTML of the new paragraph to the search term
  newSearch.innerHTML = term; 
  // 8. append the new paragraph to the searches div
  searches.appendChild(newSearch)
}
