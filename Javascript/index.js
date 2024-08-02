const faqs = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
  },
  {
    question: 'Is Frontend Mentor free?',
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
  },
  {
    question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
    answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
  }
];

const accordion = {
  accordionList: document.querySelector('.js-accordion__list'),

  loadFaqs() {
    let html = '';

    faqs.forEach((item) => {
      html += `
        <li class="accordion__item js-accordion__item">
          <header class="accordion__item__header js-accordion__item__header">
            <p class="question">
              ${item.question}
            </p>
            <button class="toggle-btn js--toggle-btn">
              <img src="./assets/images/icon-plus.svg" alt="Expand/Collapse">
            </button>
          </header>
          <div class="accordion__item__content">
            <p class="answer js-answer">
              ${item.answer}
            </p>
          </div>
        </li>
      `;
    });

    this.accordionList.innerHTML = html;
    const firstAccordionToggleIcon = document.querySelector('.js-accordion__item button img')
    const firstAccordionAnswer = document.querySelector('.js-accordion__item .js-answer')
    firstAccordionToggleIcon.src = ' ./assets/images/icon-minus.svg'
    firstAccordionAnswer.classList.add('active')
  }
}

accordion.loadFaqs();

const accordionFunctionality = {
  accordionitemHeader: document.querySelectorAll('.js-accordion__item__header'),
  accordionAnswers: document.querySelectorAll('.js-answer'),

  enableFunctionality() {
    this.accordionitemHeader.forEach((h, i) => {
      h.addEventListener('click', (e) => {
        if (e.target.classList.contains('question') || e.target.parentElement.classList.contains('toggle-btn')) {
          this.accordionAnswers[i].classList.toggle('active')
        }
   
        let b = e.currentTarget.querySelector('.toggle-btn img')
        let icon = b.src
        
        if (icon.endsWith('icon-plus.svg')) {
          icon = './assets/images/icon-minus.svg'
          b.src = icon
        }
        else {
          icon = './assets/images/icon-plus.svg'
          b.src = icon
        }
      })
    })
  },

}

accordionFunctionality.enableFunctionality()