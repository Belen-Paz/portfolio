console.log("Hello Friends")

const externalLink = documemt.querySelector('#external_link');

externalLink.addEventListener('click', function(e) {
    e.preventDefault();
    const link = e.target.href;
    
    const navigateAway = confirm("Would you like to live the Best experience, browsing?");

    if(navigateAway) {
        window.location = link;

    }
})
