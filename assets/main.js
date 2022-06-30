// Đóng mở thanh nav bar ở mobile mode khi click vào icon bar
var appHeader = document.getElementById('app-header')
const desktopAppHeaderHeight = appHeader.clientHeight;
var mobileMenu = document.querySelector('.bar-icon');

mobileMenu.onclick = function() {
    if (appHeader.clientHeight === desktopAppHeaderHeight) {
        appHeader.style.height = 'auto';
        appHeader.style.boxShadow = 'none';
    } else {
        appHeader.style.height = null;
        appHeader.style.boxShadow = null;
    }
}

// Đóng mở thanh nav bar ở mobile mode khi click vào các item
var mobileNavBarItems = document.querySelectorAll('.app-header__nav-bar a')
var mobileNavBarItem;
var haveSubNavNext;
for (var i = 0; i < mobileNavBarItems.length; ++i) {
    mobileNavBarItem = mobileNavBarItems[i];

    mobileNavBarItem.onclick = function(event) {
        haveSubNavNext = this.nextElementSibling && this.nextElementSibling.classList.contains('app-header__sub-nav')
        if (haveSubNavNext) event.preventDefault();
        else appHeader.style.height = null;
    }
}

// Đóng mở thanh nav bar ở mobile mode khi click ra bên ngoài nav bar
var outsideNavBarItems = document.querySelectorAll('main *, footer')
var outsideNavBarItem;
for (var i = 0; i < outsideNavBarItems.length; ++i) {
    outsideNavBarItem = outsideNavBarItems[i];

    outsideNavBarItem.onclick = function() {
        appHeader.style.height = null;
    }
}

// Băng chuyền slider
var slider = document.getElementById('slider')
var sliderBackgroundItems = [
    "url('./assets/image/slider/slider1.jpg') center / cover no-repeat",
    "url('./assets/image/slider/slider2.jpg') center / cover no-repeat",
    "url('./assets/image/slider/slider3.jpg') center / cover no-repeat"
]
var sliderTextItems = document.getElementsByClassName('slider-text')
var sliderTotal = sliderBackgroundItems.length;
var sliderIndex = 0;

function carousel() {
    slider.style.background = sliderBackgroundItems[sliderIndex];
    sliderTextItems[sliderIndex].style.display = 'block';
    sliderTextItems[(sliderIndex + sliderTotal - 1) % sliderTotal].style.display = null;
    sliderIndex++;
    sliderIndex %= sliderTotal;
    setTimeout(carousel, 4000);
}

carousel();

// Đóng mở ticket modal
var buyTicketButtons = document.getElementsByClassName('buy-ticket-button')
var payTicketButton = document.querySelector('.pay-for-ticket-button')
var ticketModal = document.getElementById('ticket-modal')
var mainTicketModal = document.querySelector('.modal-main')
var closeTicketModal = document.querySelector('.modal-header__top-right-icon')
var isOutsideModal

for (var i = 0; i < buyTicketButtons.length; ++i) {
    var buyTicketButton = buyTicketButtons[i];

    buyTicketButton.onclick = function() {
        console.log('hello')
        ticketModal.style.display = 'flex';
    }
}

mainTicketModal.addEventListener('click', function(event) {
    event.stopPropagation();
})

closeTicketModal.onclick = function() {
    ticketModal.style.display = null;
}

ticketModal.onclick = function() {
    ticketModal.style.display = null;
}