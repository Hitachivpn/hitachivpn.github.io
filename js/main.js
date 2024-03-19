// Swiper slider
const swiper = new Swiper('.swiper', {

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});

// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
	btn.addEventListener('click', function () {
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}
		this.classList.add('tab-controls__btn--active');
		for (let product of tabsProducts) {
			if (this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
				}
			}
		}
		swiper.update()
	})
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

const closeNavBtns = document.querySelectorAll('.mobile-nav__link');

closeNavBtns.forEach(function(btn) {
    btn.onclick = function() {
        mobileNav.classList.remove('mobile-nav-wrapper--open');
    };
});


mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};
