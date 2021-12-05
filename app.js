let toggle=false;

document.body.querySelector(".MenuIcon").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".Menu").style.right = "0%";
    } else {
        document.body.querySelector(".Menu").style.right = "-100%";
    }

})

document.body.querySelector(".InfoContainer1").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".StandAloneContainer1").style.visibility = "hidden";
        document.body.querySelector(".InfoWrapper").style.visibility = "visible";


    } else {
        document.body.querySelector(".InfoWrapper").style.visibility = "hidden";
        document.body.querySelector(".StandAloneContainer1").style.visibility = "visible";
        window.scrollTo(1, 1);
        document.body.querySelector(".StandAloneContainer1").addEventListener("click", function() {
            if(!toggle) {
                document.body.querySelector(".StandAloneContainer1").style.visibility = "hidden";
                document.body.querySelector(".InfoWrapper").style.visibility = "visible";
            }
        })
    }

})
document.body.querySelector(".InfoContainer2").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".StandAloneContainer2").style.visibility = "hidden";
        document.body.querySelector(".InfoWrapper").style.visibility = "visible";


    } else {
        document.body.querySelector(".InfoWrapper").style.visibility = "hidden";
        document.body.querySelector(".StandAloneContainer2").style.visibility = "visible";
        window.scrollTo(1, 1);
        document.body.querySelector(".StandAloneContainer2").addEventListener("click", function() {
            if(!toggle) {
                document.body.querySelector(".StandAloneContainer2").style.visibility = "hidden";
                document.body.querySelector(".InfoWrapper").style.visibility = "visible";
            }
        })
    }

})
document.body.querySelector(".InfoContainer3").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".StandAloneContainer3").style.visibility = "hidden";
        document.body.querySelector(".InfoWrapper").style.visibility = "visible";


    } else {
        document.body.querySelector(".InfoWrapper").style.visibility = "hidden";
        document.body.querySelector(".StandAloneContainer3").style.visibility = "visible";
        window.scrollTo(1, 1);
        document.body.querySelector(".StandAloneContainer3").addEventListener("click", function() {
            if(!toggle) {
                document.body.querySelector(".StandAloneContainer3").style.visibility = "hidden";
                document.body.querySelector(".InfoWrapper").style.visibility = "visible";
            }
        })
    }

})
document.body.querySelector(".InfoContainer4").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".StandAloneContainer4").style.visibility = "hidden";
        document.body.querySelector(".InfoWrapper").style.visibility = "visible";


    } else {
        document.body.querySelector(".InfoWrapper").style.visibility = "hidden";
        document.body.querySelector(".StandAloneContainer4").style.visibility = "visible";
        window.scrollTo(1, 1);
        document.body.querySelector(".StandAloneContainer4").addEventListener("click", function() {
            if(!toggle) {
                document.body.querySelector(".StandAloneContainer4").style.visibility = "hidden";
                document.body.querySelector(".InfoWrapper").style.visibility = "visible";
            }
        })
    }

})
document.body.querySelector(".InfoContainer5").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".StandAloneContainer5").style.visibility = "hidden";
        document.body.querySelector(".InfoWrapper").style.visibility = "visible";


    } else {
        document.body.querySelector(".InfoWrapper").style.visibility = "hidden";
        document.body.querySelector(".StandAloneContainer5").style.visibility = "visible";
        window.scrollTo(1, 1);
        document.body.querySelector(".StandAloneContainer5").addEventListener("click", function() {
            if(!toggle) {
                document.body.querySelector(".StandAloneContainer5").style.visibility = "hidden";
                document.body.querySelector(".InfoWrapper").style.visibility = "visible";
            }
        })
    }

})