
document.getElementById('btn1').addEventListener('click', function() {
    this.style.backgroundColor = 'lightblue';
});

document.getElementById('btn2').addEventListener('mouseover', function() {
    document.getElementById('message').style.display = 'block';
});

document.getElementById('btn2').addEventListener('mouseout', function() {
    document.getElementById('message').style.display = 'none';
});

document.getElementById('btn3').addEventListener('dblclick', function() {
    this.style.display = 'none';
});
