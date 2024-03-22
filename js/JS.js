// NOTIFICATION TOAST VARIABLE
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');


//notification toast eventlistener
toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});


