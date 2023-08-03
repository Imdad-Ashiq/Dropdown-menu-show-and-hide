const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownOptions = document.querySelector('.dropdown-options');
    dropdownButton.addEventListener('click', () => {
      dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
    });

    function redirectToWebsite(url) {
      window.open(url, '_blank'); // Open the URL in a new tab
    }