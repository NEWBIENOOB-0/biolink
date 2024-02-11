const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');
    try {
        // Check if Web Share API is available
        if (navigator.share) {
            // Use Web Share API to open native share dialog
            await navigator.share({
                title: document.title,
                text: 'Check out this link:',
                url: link,
            });
        } else {
            // Fallback for browsers that do not support Web Share API
            await navigator.clipboard.writeText(link);
            alert("Link copied to clipboard.");
        }
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText));
