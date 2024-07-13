
// ---------------  LOCAL STORAGE
document.addEventListener("DOMContentLoaded", function () {
    // Fetch review count from Local Storage
    var reviewCount = localStorage.getItem('reviewCount');

    // Checking if count is intialized
    if (reviewCount) {
        reviewCount = parseInt(reviewCount)
    }
    else {
        reviewCount = 0;
    };
    // Plus 1!
    reviewCount++
    // Populate the span element
    var reviewElement = document.querySelector("#reviewCount");
    reviewElement.textContent = reviewCount;
    // Set new count
    localStorage.setItem('reviewCount', JSON.stringify(reviewCount));
});