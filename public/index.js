document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to top
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.scrollToTop = scrollToTop; // Expose the function to the global scope

    window.addEventListener('scroll', () => {
        const aboutButton = document.querySelector('.about-button');
        const newSection = document.querySelector('.new-section');
        const aboutButtonOffset = aboutButton.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > aboutButtonOffset + 200) {
            newSection.classList.add('visible');
        } else {
            newSection.classList.remove('visible');
        }
    });

    // Function to navigate to food recipes
    function navigateToFoodRecipes() {
        window.location.href = 'asian-dishes.html';
    }

    // Redirect to saved recipes page
    // const savedRecipeBtn = document.getElementById('saved-recipe-btn');
    // if (savedRecipeBtn) {
    //     savedRecipeBtn.addEventListener('click', function() {
    //         window.location.href = 'saved-recipes.html';
    //     });
    // }

    

    // Function to save a recipe to local storage
    function saveRecipe(recipe) {
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    }

    // Ensure the learn-now button uses the navigate function
    const learnNowButton = document.querySelector('.learn-now');
    if (learnNowButton) {
        learnNowButton.addEventListener('click', navigateToFoodRecipes);
    }
});


function savedPage() {
    console.log('savedPage function triggered'); 
    window.location.href = 'saved-recipes.html'; 
}