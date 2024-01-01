/**
 * Retrieves the translation of text.
 */
import { __ } from "@wordpress/i18n";
import "./style.css";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes, className }) {
	const { services } = attributes;
	className = 'wp-block-rating-box-rating-plugin'

	return (
		<section className={className}>
			{services.length > 0 &&
				services.map((service) => {
					return (
						<div className="rating-box" data-index={service.index}>
							<div className="service-rate" style="display:none">{service.rate}</div>
							<div className="service-rate-star">{
								(() => {
									switch (true) {

										case (service.rate == 3.5): {
											return (
												<span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ </span> <span className='half'><div>★</div><div>★</div></span> </span>
											)
										}
											break;

										case (service.rate == 4): {
											return (
												<span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ ★ </span> <span className='half'></span> </span>
											)
										}
											break;

										case (service.rate == 4.5): {
											return (
												<span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ ★ </span> <span className='half'><div>★</div><div>★</div></span> </span>
											)
										}
											break;

										case (service.rate == 5): {
											return (
												<span className="e-item-card-recently-viewed_stars"> <span className="m-item-card-recently-viewed_stars__orange">★ ★ ★ ★ ★</span> <span className='half'></span> </span>
											)
										}
											break;

									}
								})()
							}</div>
							<div className="service-description">{service.description}</div>
							<div className="service-title">{service.title}</div>
							<div className="service-designation">{service.designation}</div>
						</div>
					);
				})}
		</section>
	);
}