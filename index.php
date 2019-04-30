<?php
/*
Home/catch-all template
*/

get_header(); ?>

	<div class="wrap content-wide">
		<div class="articles-listing">
		<?php
		if ( is_search() ) {
			?><h1>Search Results for <span>'<?php print $_REQUEST["s"]; ?>'</span></h1><br><?php
		} else {
			?><h1>News</h1><br><?php
		}

		while ( have_posts() ) : the_post();
			?>
			<article <?php post_class() ?>>
				<div class="article-thumbnail">
					<?php the_post_thumbnail(); ?>			
				</div>
				<div class="article-content">
					<h5><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h5>
					<?php the_excerpt(); ?>
				</div>
			</article>
			<?php
		endwhile;
		?>
		</div>
		<div class="pagination">
			<?php pagination() ?>
		</div>
	</div>

<?php get_footer(); ?>