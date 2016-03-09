import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Banner from '../blocks/banner/banner';

$(() => {
	svg4everybody();
});

$(() => new Banner().render());


