// Smooth scroll to sections when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
function propose() {
    const proposalMessage = document.getElementById("proposalMessage");
    const audio = document.getElementById("loveAudio");

    // Clear any existing message first
    proposalMessage.innerHTML = "";

    // Add a delay before displaying the message (e.g., 3 seconds)
    setTimeout(() => {
        // Display the message after the delay
        proposalMessage.innerHTML = "Mercy, I love you deeply, and nothing would make me happier than having you as my girlfriend and sharing the rest of my life with you.";
        proposalMessage.classList.add("font-change");

        // Play the audio
        audio.play();
    }, 3000); // 3000 milliseconds = 3 seconds delay
}