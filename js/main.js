 const menuItems = document.querySelectorAll('.menu-item');

 menuItems.forEach(function(item){
      item.addEventListener('click', function(e){
          const activeItem = document.querySelector('.active');
          activeItem.classList.remove('active');
          e.target.classList.add('active');
      });
 });

var toggle = document.getElementById('container');
var boddy = document.querySelector('body');

toggle.onclick = function(){
   toggle.classList.toggle('active');
   boddy.classList.toggle('active');




}

 