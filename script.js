const hostelForm = document.getElementById('hostel-form');
const hostelsList = document.getElementById('hostels-list');

hostelForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const hostelName = document.getElementById('hostel-name').value;
  const foodItems = document.getElementById('food-items').value;
  const estimatedQuantity = document.getElementById('estimated-quantity').value;

  // Validate input (optional)

  const hostelData = {
    name: hostelName,
    foodItems: foodItems.split('\n'), // Create an array of food items from newline-separated values
    estimatedQuantity: estimatedQuantity
  };

  // Save data to local storage (optional)
  // localStorage.setItem('hostels', JSON.stringify([hostelData]));

  // Add hostel data to the list
  const listItem = document.createElement('li');
  listItem.innerHTML = `<b>${hostelName}</b>: ${foodItems} (approx. ${estimatedQuantity} Kg's)`;
  hostelsList.appendChild(listItem);

  // Clear the form
  hostelForm.reset();
});
