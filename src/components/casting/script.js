window.addEventListener('load', function () {

    document.querySelector('body').addEventListener('change', function (e) {
        if (e.target.closest('.casting-file__input')) {

            let file = e.target.closest('.casting-file__input');

            let name = document.querySelector('.casting-file__fake'),
                doc = file.files[0];

            if (doc) {
                name.innerHTML = doc.name;
                name.classList.add('active');
            } else {
                name.innerHTML = 'Закрепить резюме в формате .docx';
                name.classList.remove('active');
            }
        }
    });
});