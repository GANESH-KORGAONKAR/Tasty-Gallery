// Function to update the preview image when hovering over thumbnails
function updatePreview(imageSrc) {
    const previewImage = document.getElementById("preview");
    previewImage.src = imageSrc;
  }
  
  // Function to open a recipe page when clicking on a thumbnail
  function openRecipe(recipeUrl) {
    window.location.href = recipeUrl;
  }
  