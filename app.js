const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');
    try {
         if (navigator.share) {
            await navigator.share({
                title: document.title,
                text: 'Check out this link:',
                url: link,
            });
        } else {
             await navigator.clipboard.writeText(link);
            alert("Link copied to clipboard.");
        }
    } catch (err) {
        console.error(err);
    }
}
shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText));
