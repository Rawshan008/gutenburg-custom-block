import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, PanelRow, Placeholder } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

import 'swiper/css/bundle';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { cards = [] } = attributes;

	const addCard = () => {
		const newCard = { name: '', phone: '', address: '', image: '', isOpen: true };
		setAttributes({ cards: [...cards, newCard] });
	};

	const updateCard = (index, key, value) => {
		const newCards = [...cards];
		newCards[index][key] = value;
		setAttributes({ cards: newCards });
	};

	const removeCard = (index) => {
		const newCards = [...cards];
		newCards.splice(index, 1);
		setAttributes({ cards: newCards });
	};

	const toggleCardOpen = (index) => {
		const newCards = [...cards];
		newCards[index].isOpen = !newCards[index].isOpen;
		setAttributes({ cards: newCards });
	};

	const onSelectImage = (index, media) => {
		updateCard(index, 'image', media.url);
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Card Fields', 'my-block')}>
					{cards.map((card, index) => (
						<PanelBody
							title={card.name ? card.name : `Unnamed Card ${index + 1}`}
							initialOpen={card.isOpen}
							onToggle={() => toggleCardOpen(index)}
							key={index}
						>
							{card.isOpen && (
								<>
									<PanelRow>
										<TextControl
											label={__('Name', 'your-textdomain')}
											value={card.name}
											onChange={(value) => updateCard(index, 'name', value)}
										/>
									</PanelRow>
									<PanelRow>
										<TextControl
											label={__('Phone', 'your-textdomain')}
											value={card.phone}
											onChange={(value) => updateCard(index, 'phone', value)}
										/>
									</PanelRow>
									<PanelRow>
										<TextControl
											label={__('Address', 'your-textdomain')}
											value={card.address}
											onChange={(value) => updateCard(index, 'address', value)}
										/>
									</PanelRow>
									<PanelRow>
										<MediaUpload
											onSelect={(media) => onSelectImage(index, media)}
											type="image"
											value={card.image}
											render={({ open }) => (
												<Button onClick={open} isPrimary>
													{card.image ? __('Change Image', 'your-textdomain') : __('Upload Image', 'your-textdomain')}
												</Button>
											)}
										/>
										{card.image && (
											<Placeholder>
												<img src={card.image} alt={__('Card Image', 'your-textdomain')} style={{ maxWidth: '100%' }} />
											</Placeholder>
										)}
									</PanelRow>
									<Button
										isDestructive
										onClick={() => removeCard(index)}
									>
										{__('Remove', 'your-textdomain')}
									</Button>
								</>
							)}
						</PanelBody>
					))}
					<Button
						isPrimary
						onClick={addCard}
					>
						{__('Add New Card', 'your-textdomain')}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div className="swiper my-custom-card-wrapper">
				<div className="swiper-wrapper">
					{cards.map((card, index) => (
						<div className="swiper-slide my-custom-card-single" key={index}>
							<div className="my-custom-card-single-content">
								{card.image && <img src={card.image} alt={card.name} />}
								<h3>{card.name}</h3>
								<h4>{card.phone}</h4>
								<p>{card.address}</p>
							</div>
						</div>
					))}
				</div>
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
			</div>
		</div>
	);
}
