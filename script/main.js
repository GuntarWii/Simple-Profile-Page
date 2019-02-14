
var CountDown = {
  flowers: 2024,
  following: 16,
  speed: 500,


  CountFlowe: function(){
    this.flowers++;
    this.following++;
    document.getElementById('followers').innerHTML = this.flowers;
    document.getElementById('count2').innerHTML = this.following;

  },

}


setInterval('CountDown.CountFlowe()', CountDown.speed);


var i = 0;
var txt = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aboutMe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter();










