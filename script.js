function changeBackgroundColor() {

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5D300', '#900C3F'];
    
   
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}