var newEl = document.querySelectorAll(".drum").length;
for (var i = 0; i < newEl; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var audioPlayer = this.innerHTML;
        combiner(audioPlayer);
        animator(this.innerHTML);

    })
    document.addEventListener("keypress", function(event) {
        combiner(event.key);
        animator(event.key)
    })

    function combiner(key) {
        switch (key) {
            case "w":
                let audioW = new Audio("sounds/crash.mp3")
                audioW.play();
                break;
            case "a":
                let audioA = new Audio("sounds/kick-bass.mp3");
                audioA.play();
                break;
            case "s":
                let audioS = new Audio("sounds/tom-1.mp3");
                audioS.play();
                break;
            case "d":
                let audioD = new Audio("sounds/tom-2.mp3");
                audioD.play();
                break;
            case "j":
                let audioJ = new Audio("sounds/tom-3.mp3");
                audioJ.play();
                break;
            case "k":
                let audioK = new Audio("sounds/tom-4.mp3");
                audioK.play();
                break;
            case "l":
                let audioL = new Audio("sounds/snare.mp3");
                audioL.play();
                break;
            default:
                let defaultAudio = new Audio("sounds/tom1.mp3");
                defaultAudio.play();
        }
    }

    function animator(currentKey) {
        let newAnimation = document.querySelector("." + currentKey);
        newAnimation.classList.add("pressed");
        setTimeout(function() {
            newAnimation.classList.remove("pressed");
        }, 100)

    }
};