// POPOVER 1
 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-1');
    const popover1 = document.getElementById('popover-1');
    const closeBtn1 = popover1.querySelector('.close-popover');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover1.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover1.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover1.addEventListener('click', function(e) {
        if (e.target === popover1) {
            popover1.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover1.classList.contains('active')) {
            popover1.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});


// POPOVER 2
 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-2');
    const popover2 = document.getElementById('popover-2');
    const closeBtn1 = popover2.querySelector('.close-popover-2');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// POPOVER 3

 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-3');
    const popover2 = document.getElementById('popover-3');
    const closeBtn1 = popover2.querySelector('.close-popover-3');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});



// POPOVER 4


 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-4');
    const popover2 = document.getElementById('popover-4');
    const closeBtn1 = popover2.querySelector('.close-popover-4');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// POPOVER 5

 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-5');
    const popover2 = document.getElementById('popover-5');
    const closeBtn1 = popover2.querySelector('.close-popover-5');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// POPOVER 6

 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-6');
    const popover2 = document.getElementById('popover-6');
    const closeBtn1 = popover2.querySelector('.close-popover-6');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// POPOVER 7

 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-7');
    const popover2 = document.getElementById('popover-7');
    const closeBtn1 = popover2.querySelector('.close-popover-7');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// POPOVER 8

 // Get all info buttons and popovers
 document.addEventListener('DOMContentLoaded', function() {
    // For the first card
    const infoBtn1 = document.getElementById('info-btn-8');
    const popover2 = document.getElementById('popover-8');
    const closeBtn1 = popover2.querySelector('.close-popover-8');
    
    // Open popover when info button is clicked
    infoBtn1.addEventListener('click', function() {
        popover2.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
    });
    
    // Close popover when close button is clicked
    closeBtn1.addEventListener('click', function() {
        popover2.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popover when clicking outside the popover content
    popover2.addEventListener('click', function(e) {
        if (e.target === popover2) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close popover when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popover2.classList.contains('active')) {
            popover2.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});
