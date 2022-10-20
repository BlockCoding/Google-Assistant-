const loader = document.querySelector(".loader");
const header = document.querySelector(".header");
window.onload = function(){
  setTimeout(function(){
    loader.style.opacity = "0";
    setTimeout(function(){
      loader.style.display = "none";
    }, 800);
  },2500);
  
}
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }

    else if(hr == 12) {
        speak("Good noon ");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Good Day sir or ma i'm adeniyi okunuga portfolio assistant and i would be taken you around the portfolio and explain what each section is for, if you need me you can simply call me on by clicking the button below then say whatever you want to say then i will search for it, if i can't find it here i will have to search the google then give you the feedback. let's get started");
    speak("How may i help you sir...");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is TechScan, I'm create and trained by Adeniyi Okunuga the ceo and the fouder of coding Block Technologies limited";
        speech.text = finalText;
    }

    else if(message.includes('old')) {
        const finalText = "I don't know my age i have been existing since when i was coded";
        speech.text = finalText;
    }

    
    else if(message.includes('repeat')) {
        const finalText = "Good Day sir or ma i'm adeniyi okunuga portfolio assistant and i would be taken you around the portfolio and explain what each section is for, if you need me you can simply call me on by clicking the button below then say whatever you want to say then i will search for it, if i can't find it here i will have to search the google then give you the feedback. let's get started";
        speech.text = finalText;
    }

 
    else if(message.includes('mad')) {
        const finalText = "No, i'm not mad but i think you are mad, you can't just insult anybody i'm also a human begin just like you?";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    
    else if(message.includes('open brave')) {
        window.open("https://brave.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('open microsoft')) {
        window.open("  https://www.microsoft.com", "_blank");
        const finalText = "Microsoft edge ";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://twitter.com", "_blank");
        const finalText = "Opening Twitter";
        speech.text = finalText;
    }
    else if(message.includes('facebook')) {
        window.open("https://www.facebook.com/blockcoding/", "_blank");
        const finalText = "Opening Facebook";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
ht