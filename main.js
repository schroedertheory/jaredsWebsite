// function rotateImage() {
//       var img = document.getElementById('gear');
//
//       var i;
//       for (i = 0; i < 80; i++) {
//           img.style.transform = 'rotate(1deg)';
//       }
//    }

document.getElementById("titleheader").addEventListener("scroll", changeHeaderBackground);

function changeHeaderBackground() {
  document.getElementById("titleheader").style.backgroundColor = "red";
  console.log('hi');
}
