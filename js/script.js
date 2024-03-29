const navigation = document.querySelector('.navigation');
const navA = document.querySelectorAll('a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
        navigation.classList.add('bgWhite');

        navA.forEach(item => {
            item.style.color = 'black';
        });
    }
    else {
        navigation.classList.remove('bgWhite');

        navA.forEach(item => {
            item.style.color = 'white';
        })
    }
});

// gallery

const galleryTabsHeader = document.querySelector('.our__tabs'),
    galleryTabs = document.querySelectorAll('.our__tab'),
    galleryContent = document.querySelectorAll('.our__body ');

function hideGalleryContent() {
    galleryContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    galleryTabs.forEach(item => {
        item.classList.remove('active');
    });
}
function showGalleryContent(i) {
    galleryContent[i].classList.add('show', 'fade');
    galleryContent[i].classList.remove('hide');
    galleryTabs[i].classList.add('active');
}

hideGalleryContent();
showGalleryContent(1);

galleryTabsHeader.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('our__tab')) {
        galleryTabs.forEach((item, idx) => {
            if (target == item) {
                hideGalleryContent();
                showGalleryContent(idx);
            }
        });
    }

});

const swiper = new Swiper('.swiper', {

    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

});

const blogAllTabs = document.querySelector('.blog__tabs'),
    blogTab = document.querySelectorAll('.blog__tab'),
    blogContent = document.querySelectorAll(".blog__content");

function hideBlogContent() {
    blogContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    })
    blogTab.forEach(item => {
        item.classList.remove('active');
    })
}

function showBlogContent(i) {
    blogContent[i].classList.add('show', 'fade');
    blogContent[i].classList.remove('hide');
    blogTab[i].classList.add('active');
}

hideBlogContent();
showBlogContent(2);

blogAllTabs.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('blog__tab')) {
        blogTab.forEach((item, idx) => {
            if (target == item) {
                hideBlogContent();
                showBlogContent(idx);
            }
        });
    }

});

const openModalBtn = document.querySelector('.open__modal'),
    modal = document.querySelector('.contact__modal'),
    closeModal = document.querySelector('.contact__modal');

openModalBtn.addEventListener('click', handleShowModal)
closeModal.addEventListener('click', handleHideModal

)
function handleShowModal() {
    modal.classList.add('show')
    modal.classList.remove('hide')

}

function handleHideModal() {
    modal.classList.add('hide')
    modal.classList.remove('show')
}

