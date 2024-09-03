<?php
$cards = isset($attributes['cards']) ? $attributes['cards'] : array();

if (empty($cards)) {
	return '';
}

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="swiper my-custom-card-wrapper">
		<div class="swiper-wrapper">
			<?php foreach ($cards as $card) : ?>
				<div class="swiper-slide my-custom-card-single">
					<div class="my-custom-card-single-content">
						<img src="<?php echo esc_url($card['image']); ?>" alt="">
						<h3><?php echo esc_html($card['name']); ?></h3>
						<h4><?php echo esc_html($card['phone']); ?></h4>
						<p><?php echo esc_html($card['address']); ?></p>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-pagination"></div>
	</div>
</div>