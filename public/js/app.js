const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');
const requestFrom = document.querySelector('.new-request form');

// open request modal
requestLink.addEventListener('click', (e) => {
   e.preventDefault();
   requestModal.classList.add('open');
})

// close request modal 
requestModal.addEventListener('click', (e) => {
   if (e.target.classList.contains('new-request')) {
      requestModal.classList.remove('open');
   }
})

// add a new request
requestFrom.addEventListener('submit', (e) => {
   e.preventDefault();

   const addRequest = firebase.functions().httpsCallable('addRequest');
   addRequest({
      test: requestFrom.request.value,
   })
   .then(() => {
      requestFrom.reset();
      requestModal.classList.remove('open');
   })
   .catch(error => {
      requestForm.querySelector('.error').textContent = error.message;
   })
})

// notification
 const notification = document.querySelector('.notification');
 const showNotification = (message) => {
    notification.textContent = message;
    notification.classList.add('active');
    setTimeout(() => {
       notification.classList.remove('active');
       notification.textContent = '';
    }, 4000)
 }


