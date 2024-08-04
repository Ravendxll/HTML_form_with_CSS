document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('Form Data:', formObject);

        alert('Thank you for your feedback!');

        surveyForm.reset();
    });
});