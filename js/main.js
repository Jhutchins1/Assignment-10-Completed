let image1 = document.querySelector('#image1');


image1.onclick = () => {
    if ( image1.getAttribute('src') === 'images/interactive1resized.jpg')

{ 
    image1.setAttribute('src','images/newimage1.jpg');
} 

    else 
{
    image1.setAttribute('src','images/interactive1resized.jpg');
}

 };



 let picture = document.querySelector('#image2');

 picture.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
};
picture.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
};
 