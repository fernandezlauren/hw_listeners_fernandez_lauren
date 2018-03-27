<form onsubmit= "formlistener()" >
    Enter name: <input type="text">
    <input type="submit">

    console.log(document.getElementById('firstname').value);
    console.log(document.getElementById('lastname').value);
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('message').value);

$("form").submit(function(e) {
    e.preventDefault();
});

</form>
