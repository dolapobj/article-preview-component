const shareButton = document.getElementById("share-button");
const footer = document.getElementById("cardFooter");
const shareBox = document.getElementById('share-box')
shareButton.addEventListener('click', (e) => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        footer.classList.toggle('show-share')

    } else {
     // Get the position of the share button
    
    shareBox.classList.toggle('show-share')

    }
})