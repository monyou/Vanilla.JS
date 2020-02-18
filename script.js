// Welcome container
function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var clockTickingInterval = setInterval(clock, 1000);

// Comparison container
var comparisonContainer = document.getElementById('image-comparison-container');
var slide = document.getElementById('slide2');
comparisonContainer.onmousemove = function (e) {
    var x = e.clientX;
    slide.style.left = x + 'px';
}

// Magic wheel container
var wheel = document.getElementById('wheel');
var spinButton = document.getElementById('spin-wheel-button');
var deg = 0;

spinButton.addEventListener('click', function () {
    spinButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 10s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
});

wheel.addEventListener('transitionend', function () {
    wheel.classList.remove('blur');
    spinButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    var actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
});

// Layered container
var paralaxContainer = document.getElementById('layered-container');

function parallax(e) {
    paralaxContainer.querySelectorAll('.layer').forEach(layer => {
        var speed = layer.getAttribute('data-speed');
        var x = (window.innerWidth - e.pageX * speed) / 250;
        var y = (window.innerWidth - e.pageX * speed) / 250;

        layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
    })
}

paralaxContainer.addEventListener('mousemove', parallax);