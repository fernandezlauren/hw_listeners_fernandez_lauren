    var header = document.getElementById('header')
    header.addEventListener('click', function( event ) {
    // display the current click count inside the clicked div
    var myElement = document.createElement('paragraph');
    event.target.textContent = "this is click number " + event.detail;
  }, false);
