// ==== Project Number DOM ==== //
const listElement = document.getElementById("project__list-container");
const listChildren = listElement.getElementsByTagName("li");
const projectCount = listChildren.length;

// ==== Changes Project Number ==== //
let projectNumber = document.getElementById("project-count").textContent = projectCount;



function changeImage1() {
    document.getElementById("portfolio-image").style.backgroundImage = "var(--portfolio-1)";
}

function changeImage2() {
    document.getElementById("portfolio-image").style.backgroundImage = "var(--portfolio-2)";
}

function changeImage3() {
    document.getElementById("portfolio-image").style.backgroundImage = "var(--portfolio-3)";
}

function changeImage4() {
    document.getElementById("portfolio-image").style.backgroundImage = "var(--portfolio-4)";
}


function knobPositionOne() {
    var knobLeft = document.getElementById("tv__knob-left");
    knobLeft.style.transform = "rotate(20deg)"

    var knobRight = document.getElementById("tv__knob-right");
    knobRight.style.transform = "rotate(60deg)"
}

function knobPositionTwo() {
    var knobLeft = document.getElementById("tv__knob-left");
    knobLeft.style.transform = "rotate(60deg)"

    var knobRight = document.getElementById("tv__knob-right");
    knobRight.style.transform = "rotate(120deg)"
}

function knobPositionThree() {
    var knobLeft = document.getElementById("tv__knob-left");
    knobLeft.style.transform = "rotate(100deg)"

    var knobRight = document.getElementById("tv__knob-right");
    knobRight.style.transform = "rotate(180deg)"
}

function knobPositionFour() {
    var knobLeft = document.getElementById("tv__knob-left");
    knobLeft.style.transform = "rotate(140deg)"

    var knobRight = document.getElementById("tv__knob-right");
    knobRight.style.transform = "rotate(240deg)"
}

function resetState() {
    document.getElementById("portfolio-image").style.backgroundImage = "var(--primary-bg-color)";

    var knobLeft = document.getElementById("tv__knob-left");
    knobLeft.style.transform = "rotate(0deg)"

    var knobRight = document.getElementById("tv__knob-right");
    knobRight.style.transform = "rotate(0deg)"
}

function hideCdCover() {
    var cdCover = document.getElementById("cd-cover");
    cdCover.style.opacity = "0"
}

function restCdCoverState() {
    var cdCover = document.getElementById("cd-cover");
    cdCover.style.opacity = "1"
}



// sendEmail() = emailjs.send('service_ll0ng9o', 'service_ll0ng9o', templateParams)
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//         console.log('FAILED...', error);
//     });


// var templateParams = {
//     name: [firstName],
//     lastName: [lastName],
//     email: [emailAddress],
//     subject: [messageSubject],
//     message: [messageContent]
// };

// templateParams.firstName = document.getElementById('first-name').value;
// templateParams.lastName = document.getElementById('last-name').value;
// templateParams.emailAddress = document.getElementById('email-address').value;
// templateParams.messageSubject = document.getElementById('message-subject').value;
// templateParams.firstName = document.getElementById('message-content').value;

const btn = document.getElementById('submit-button');

document.getElementById('form__body')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ifg8c5a';
   const templateID = 'template_oy0obim';
    templateParams.firstName = document.getElementById('first-name').value;
    templateParams.lastName = document.getElementById('last-name').value;
    templateParams.emailAddress = document.getElementById('email-address').value;
    templateParams.messageSubject = document.getElementById('message-subject').value;
    templateParams.messageContent = document.getElementById('message-content').value;

   templateParams = emailjs.send("service_ifg8c5a","template_oy0obim",{
    firstName: "firstName",
    lastName: "lastName",
    messageSubject: "messageSubject",
    messageContent: "messageContent",
    emailAddress: "emailAddress",
    });
});

