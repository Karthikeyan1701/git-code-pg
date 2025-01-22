// Array of colors to change the background
const colors = ['#FF6347', '#7FFFD4', '#FFD700', '#98FB98', '#FF69B4', '#ADD8E6', '#D3D3D3'];

// Get the button element
const colorButton = document.getElementById('colorButton');

// Initialize the color index
let colorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
  // Change the background color to the next color in the array
  document.body.style.backgroundColor = colors[colorIndex];

  // Update the color index, looping back to 0 if it exceeds the array length
  colorIndex = (colorIndex + 1) % colors.length;
}

// Add click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);
