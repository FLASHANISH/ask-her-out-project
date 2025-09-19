
//Changing gif
const img = document.getElementById('image');

const images = {
    hi: "Pages/Assets/hi.gif",
    ori: "Pages/Assets/sad.gif"
}

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//Yes button bg image
var body = document.body;

function bg() {
	body.className = 'hovered';
};

function resetBG(){
	body.className = '';
};

// Device detection and adaptive UI
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 767;
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Apply device-specific classes
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const button = document.getElementById('hover');
    
    if (isMobile) {
        body.classList.add('mobile-device');
        // Add mobile-specific button text behavior
        if (button) {
            button.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            button.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        }
    } else {
        body.classList.add('desktop-device');
    }
    
    if (isTouch) {
        body.classList.add('touch-device');
    }
});

// Mobile-optimized image changing
function ChangeImageMobile(giphy) {
    if (isMobile) {
        img.src = images[giphy];
        // Add slight delay for mobile to see the change
        setTimeout(() => {
            if (!img.src.includes(giphy)) {
                img.src = images[giphy];
            }
        }, 100);
    } else {
        img.src = images[giphy];
    }
}

// Enhanced mobile button interaction
if (isMobile) {
    const button = document.getElementById('hover');
    if (button) {
        // Mobile tap feedback
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            ChangeImageMobile('hi');
            bg();
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            ResetImage();
            resetBG();
            
            // Reset visual feedback
            this.style.transform = 'scale(1)';
            
            // Navigate after a short delay
            setTimeout(() => {
                myFunction();
            }, 150);
        });
    }
}

//Linking to second page
function myFunction() {
    window.location.href = "Pages/Page 1/secondPage.html";
}
