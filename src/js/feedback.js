// import 'css-star-rating/css/star-rating.css';

// function feedbackTemplate(feedback) {
//   const rating = feedback.rate;
//   const valueRating = Math.floor(rating);
//   const hasHalf = rating % 1 !== 0;
//   const halfClass = hasHalf ? 'half' : '';

//   return `<li class="feedback-item">
// 	<div class="rating star-svg value-${valueRating} ${halfClass} color-default">
// 		<ul class="star-container">
// 			<li class="star">
// 				<svg class="star-empty">
// 					<use href="../img/star-rating.icons.svg#star-empty"></use>
// 				</svg>
// 				<svg class="star-half">
// 					<use href="../img/star-rating.icons.svg#star-half"></use>
// 				</svg>
// 				<svg class="star-filled">
// 					<use href="../img/star-rating.icons.svg#star-filled"></use>
// 				</svg>
// 			</li>
// 			<li class="star">
// 				<svg class="star-empty">
// 					<use href="../img/star-rating.icons.svg#star-empty"></use>
// 				</svg>
// 				<svg class="star-half">
// 					<use href="../img/star-rating.icons.svg#star-half"></use>
// 				</svg>
// 				<svg class="star-filled">
// 					<use href="../img/star-rating.icons.svg#star-filled"></use>
// 				</svg>
// 			</li>
// 			<li class="star">
// 				<svg class="star-empty">
// 					<use href="../img/star-rating.icons.svg#star-empty"></use>
// 				</svg>
// 				<svg class="star-half">
// 					<use href="../img/star-rating.icons.svg#star-half"></use>
// 				</svg>
// 				<svg class="star-filled">
// 					<use href="../img/star-rating.icons.svg#star-filled"></use>
// 				</svg>
// 			</li>
// 			<li class="star">
// 				<svg class="star-empty">
// 					<use href="../img/star-rating.icons.svg#star-empty"></use>
// 				</svg>
// 				<svg class="star-half">
// 					<use href="../img/star-rating.icons.svg#star-half"></use>
// 				</svg>
// 				<svg class="star-filled">
// 					<use href="../img/star-rating.icons.svg#star-filled"></use>
// 				</svg>
// 			</li>
// 			<li class="star">
// 				<svg class="star-empty">
// 					<use href="../img/star-rating.icons.svg#star-empty"></use>
// 				</svg>
// 				<svg class="star-half">
// 					<use href="../img/star-rating.icons.svg#star-half"></use>
// 				</svg>
// 				<svg class="star-filled">
// 					<use href="../img/star-rating.icons.svg#star-filled"></use>
// 				</svg>
// 			</li>
// 		</ul>
// 	</div>
// 	<p class="feedback-text">${feedback.descr}</p>
// 	<p class="feedback-author">${feedback.name}</p>
// </li>`;
// }

// function renderFeedback(feedbackList) {
//   const container = document.querySelector('.feedback-list');
//   if (!container || !feedbackList || !feedbackList.length) return;

//   container.innerHTML = feedbackList.map(feedbackTemplate).join('');
// }

// window.FeedbackModule = {
//   render: renderFeedback,
// };
