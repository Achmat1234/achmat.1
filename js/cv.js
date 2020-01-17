var hd = document.getElementById('heading');

var profile = document.getElementById('nav1');
var education = document.getElementById('nav2');
var skills = document.getElementById('nav3');
var trainings = document.getElementById('nav4');

var content = document.getElementById('content');


document.getElementById('nav2').addEventListener('click', function (e) {
    e.preventDefault();
    hd.innerHTML = 'Education';

    education.style.color = "#78728c";
    education.style.textDecoration = "none";

    profile.style.color = "#FFF";
    skills.style.color = "#FFF";
    trainings.style.color = "#FFF";

    content.innerHTML = '<table class="table text-center"><tr><th class="text-center">Program</th><th class="text-center">Institution</th><th class="text-center">Percentage</th><th class="text-center">Completion</th></tr><tr><td>MCA</td><td>BPIBS</td><td>-</td><td>2020</td></tr><tr><td>BCA</td><td>Siliguri College</td><td>61.20</td><td>2017</td></tr></table>';
    content.style.color = "#fff";

})

document.getElementById('nav3').addEventListener('click', function (e) {
    e.preventDefault();
    hd.innerHTML = 'Skills';

    skills.style.color = "#78728c";
    skills.style.textDecoration = "none";

    profile.style.color = "#FFF";
    education.style.color = "#FFF";
    trainings.style.color = "#FFF";

    content.innerHTML = '<h4 class="purple">Technical Skills</h4><br>' +
        '<div class="row skills">' +
        '<button class="btn btn-default col-sm-3"><img src="https://ludu-assets.s3.amazonaws.com/course-icons/26/urA5bRhIewsQ2LgxuCu2" alt=""></button>' +
        '<button class="btn btn-default col-sm-3"><img src="https://sg.fiverrcdn.com/photos/108382710/original/e510f3d16ce663491584ce196e95e553b33ab9fb.png?1519473540" alt=""></button>' +
        '<button class="btn btn-default col-sm-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu19QNGdvX4l-J1wzsMXG1gTe1TQftAq-1Qw9onYoCNqw6Ebim" alt=""></button>' +
        '<button class="btn btn-default col-sm-3"><img src="http://www.jdk.it/documents/10180/3435611/java_ee_logo.png/a14a9ef4-6cd1-4ea6-ab0c-f1aabc61bdaa?t=1430384245382" alt=""></button>' +
        '<button class="btn btn-default col-sm-3"><img src="https://kotlinexpertise.com/wp-content/uploads/2018/05/cropped-Kotlin-logo.png" alt=""></button>' +
        '<button class="btn btn-default col-sm-3"><img src="https://www.startertutorials.com/blog/wp-content/uploads/2018/04/python-logo.png" alt=""></button>' +
        '</div><br><br>' +
        '<h4 class="purple">Web Technologies</h4><br>';
})

document.getElementById('nav4').addEventListener('click', function (e) {
    e.preventDefault();
    hd.innerHTML = 'Trainings';

    trainings.style.color = "#78728c";
    trainings.style.textDecoration = "none";

    profile.style.color = "#FFF";
    education.style.color = "#FFF";
    skills.style.color = "#FFF";

    content.innerHTML = '';
})

// =======================================read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "inline";
    }
  }
//   ===============================================end of read more