import $ from 'jquery';
import Swiper from 'swiper';

export default class {
	constructor() {
		this.$el = $('#banner');
		this.$arrows = $('.js-arrow');
		this.activeClasses = {
			cities: 'shipping-form__cities_state_active',
			input: 'shipping-form__input_state_active'
		};
	}

	render() {
		const slider = new Swiper('#bannerSlider', {
			mousewheelControl: true,
			autoplay: 6000,
			nextButton: '.banner__arrow_side_right',
			prevButton: '.banner__arrow_side_left'
		});
	}
}
