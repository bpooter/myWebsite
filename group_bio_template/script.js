/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 * @param {string} imgId1 - The ID of the img section to show or hide
 * @param {string} imgId2 - The ID of the img section to show or hide
 */
function toggleBio(bioId, imgId1, imgId2) {
    const bio = document.getElementById(bioId);
    const img1 = document.getElementById(imgId1)
    const img2 = document.getElementById(imgId2)
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        img1.style.display = "block";
        img2.style.display = "block";
    } else {
        bio.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}
