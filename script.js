function upDate(previewPic) {
    // Log the event to ensure the function is triggered
    console.log("Mouseover event triggered");

    // Log the alt and src attributes of the previewPic element
    console.log("Image source:", previewPic.src);
    console.log("Image description:", previewPic.alt);

    // Select the element with id 'image'
    const imageDiv = document.getElementById('image');

    // Change the background image of the 'image' div
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;

    // Change the text of the 'image' div to the alt text of the image
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    // Log the event to ensure the function is triggered
    console.log("Mouseout event triggered");

    // Select the element with id 'image'
    const imageDiv = document.getElementById('image');

    // Reset the background image
    imageDiv.style.backgroundImage = 'none';

    // Reset the text
    imageDiv.textContent = 'Hover over an image below to display here.';
}
