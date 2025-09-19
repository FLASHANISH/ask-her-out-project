//Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    love: "../Assets/love.gif",
    depressed: '../Assets/depressed.gif',
    ori: "../Assets/handsome.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//BG image change while hovering on a button
var body = document.body;

function bg1() {
	body.className = 'yess';
};

function bg2() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

// Device detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 767;
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Apply device-specific classes and behaviors
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    
    if (isMobile) {
        body.classList.add('mobile-device');
        
        // Mobile-specific button interactions
        if (yesBtn) {
            yesBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                ChangeImage('love');
                bg1();
                this.style.transform = 'scale(0.95)';
            });
            
            yesBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                ResetImage();
                resetBG();
                this.style.transform = 'scale(1)';
                setTimeout(() => yesFunction(), 150);
            });
        }
        
        if (noBtn) {
            noBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                ChangeImage('depressed');
                bg2();
                this.style.transform = 'scale(0.95)';
            });
            
            noBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                ResetImage();
                resetBG();
                this.style.transform = 'scale(1)';
                setTimeout(() => noFunction(), 150);
            });
        }
    } else {
        body.classList.add('desktop-device');
    }
    
    if (isTouch) {
        body.classList.add('touch-device');
    }
});

//Linking to Yes and page
function yesFunction() {
    window.location.href = "../Page 5/yes.html";
}
function noFunction() {
    window.location.href = "../Page 6/no1.html";
}
