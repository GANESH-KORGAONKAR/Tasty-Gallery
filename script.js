// Add functionality for previewing images
document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", event => {
        event.preventDefault(); // Prevent default link behavior
        const recipeLink = img.parentElement.href; // Get recipe link
        window.location.href = recipeLink; // Navigate to recipe page
    });
});
