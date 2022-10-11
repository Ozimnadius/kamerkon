window.addEventListener('load', function (){
   let file = document.querySelector('.casting-file__input');

   if (file){
       file.addEventListener('change', function (e){

           let name = document.querySelector('.casting-file__fake'),
               file = this.files[0];
           if(file){
               name.innerHTML = file.name;
               name.classList.add('active');
           } else {
               name.innerHTML = 'Закрепить резюме в формате .docx';
               name.classList.remove('active');
           }

       });
   }
});