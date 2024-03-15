const faq = document.querySelector('.questions');

faq.addEventListener('click', (e) => {
    const activeQuestion = e.target.closest('.question-holder');
    if(!activeQuestion) return;
    toggleQuestion(activeQuestion);
});

function toggleQuestion(questionToActivate) {
    const buttons = questionToActivate.parentElement.querySelectorAll('button');
    const answers = questionToActivate.parentElement.querySelectorAll('.answer');

    buttons.forEach(button => {
        button.setAttribute('aria-expanded', false);
    });

    answers.forEach(answer => {
        answer.setAttribute('aria-hidden', true);
    });

    questionToActivate.querySelector('button').setAttribute('aria-expanded', true);
    questionToActivate.querySelector('.answer').setAttribute('aria-hidden', false);

}