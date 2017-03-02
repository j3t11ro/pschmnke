<?php
/*
Template Name: psychomunkee-work
*/
?>
<?php get_header(); ?>

 <?php get_template_part('navigation', 'default' ); ?>
    <div id="pm_pile1">

<div class="site-wrapper">

      <div class="site-wrapper-inner">
   <div class="pmSideText">
            <p>selected projects</p>
          </div>
          <div class="container-fluid">
     
          <?php get_template_part('__work', 'samples' ); ?>
        </div>

      </div>

    </div>
        </div>

<?php get_footer(); ?>