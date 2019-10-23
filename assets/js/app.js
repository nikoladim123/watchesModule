var coloredWatches = document.getElementsByClassName('coloredWatches');
var colorChangeButton = document.getElementsByClassName('colorChangeButton');

for (var i = 0; i < colorChangeButton.length; i++) {
  colorChangeButton[i].addEventListener('click',(e)=>{
    for (var i = 0; i < coloredWatches.length; i++) {
      coloredWatches[i].style.opacity = '0';
    };
    coloredWatches[e.currentTarget.dataset.colorpick].style.opacity = '1';
    console.log(e.currentTarget.dataset.colorpick);
  })
}
