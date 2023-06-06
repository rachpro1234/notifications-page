














// selecting the elements needed in HTML
let header = document.querySelector('.header');
let title = document.querySelector('.title');
let notificationNumber = document.querySelector('#notification-number');
let notificationItem1 = document.querySelector('#notification1');
let notificationItem2 = document.querySelector('#notification2');
let notificationItem3 = document.querySelector('#notification3');
let point1 = document.querySelector('#point1');
let point2 = document.querySelector('#point2');
let point3 = document.querySelector('#point3');


// onclick function to make notifications be displayed as read instead of unread
title.onclick = function() {
    notificationNumber.innerHTML = '0'
    notificationItem1.style.background = 'white';
    notificationItem2.style.background = 'white';
    notificationItem3.style.background = 'white';
    point1.style.display = 'none';
    point2.style.display = 'none';
    point3.style.display = 'none';
    
}

































































