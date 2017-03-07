<div class="row">


<?php
    $cookie_name = 'page_id';



     $args = array(
        'post_type'      => 'page',
        'posts_per_page' => -1,
        'post_parent'    => $_COOKIE[$cookie_name],
    );

$parent = new WP_Query( $args );
if ( $parent->have_posts() ) : ?>
    <?php while ( $parent->have_posts() ) : $parent->the_post(); ?>
        <?php
        $covers = get_post_meta($post->ID, "cover", false);
        $covers = $covers[0]=="" ?  : $covers;
        ?>
        <div class="col-sm-5 pmSample work" style="background-image: url(./wp-content/themes/psychoMunkee/assets/images/<?php foreach($covers as $cover) echo $cover ; ?>.png)">
                <div class="sampleCover">
                    <h4><?php the_title(); ?></h4>
                </div>
                <div style="display: none"
                    data-title="<?php the_title(); ?>"
                    data-description="<?php echo strip_tags(apply_filters('the_content',$post->post_content)); ?>"
                    data-cover="<?php foreach($covers as $cover) echo $cover ; ?>"
                    <?php
                    $services = get_post_meta($post->ID, "sampleServices", false);
                    if ($services[0]=="") : ?>data-services=""<?php  else : ?>data-services="<?php foreach($services as $service){ echo ''.$service.', '; } ?>"<?php endif; ?>

                    <?php
                    $images = get_post_meta($post->ID, "sampleImages", false);
                    if ($images[0]=="") : ?>data-images=""<?php  else : ?>data-images="<?php foreach($images as $image){ echo ''.$image.', '; } ?>"<?php endif; ?>

                    <?php
                    $palettes = get_post_meta($post->ID, "samplePalette", false);
                    if ($palettes[0]=="") : ?>data-palettes=""<?php  else : ?>data-palettes="<?php foreach($palettes as $palette){ echo ''.$palette.', '; } ?>"<?php endif; ?>
                    <?php
                    $sites = get_post_meta($post->ID, "site", false);
                    if ($sites[0]=="") : ?>data-site="none"<?php  else : ?>data-site="<?php foreach($sites as $site){ echo $site; } ?>"<?php endif; ?>>

                </div>
             </div>


    <?php endwhile; ?>

<?php endif; wp_reset_query(); ?>
</div>





 <?php get_template_part('__work', 'details' ); ?>


