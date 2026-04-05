import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const faqData = [
    {
        question: "Як здійснюється доставка меблів?",
        answer: "Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."
    },
    {
        question: "Чи є можливість вибрати колір або матеріал?",
        answer: "Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."
    },
    {
        question: "Чи можна повернути товар, якщо він не підійшов?",
        answer: "Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."
    },
    {
        question: "Чи надаєте ви послугу збирання меблів?",
        answer: "Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."
    },
    {
        question: "Як здійснити оплату?",
        answer: "Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."
    },
]   

const container = document.querySelector(".container-faq");


const markup = faqData.map(({ question, answer }) => `
<div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">
          <span>${question}</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.29297 14.2929L7.70697 15.7069L12 11.4139L16.293 15.7069L17.707 14.2929L12 8.58594L6.29297 14.2929Z" fill="#080C09" />
</svg>
          </button>
        </h3><div class="ac-panel">
          <p class="ac-text">${answer}</p>
        </div></div>`).join("");

if (container) {
    container.innerHTML = markup; 

  new Accordion(".container-faq", {
      duration: 400,
      сollapse: true,
      showMultiple: false,
});
}



