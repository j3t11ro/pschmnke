<?php get_header(); ?>

 <?php get_template_part('navigation', 'default' ); ?>
<div id="pm_pile1">
<div class="site-wrapper">

      <div class="site-wrapper-cover">
        <div class="pmSideText">
            <p>creative digital and print services</p>
        </div>
        <div class="pmVidBg">
          <video autoplay="" loop="" muted="" id="fpIntroBg">
            <source src="wp-content/themes/bootstrap-four/assets/video/pmVidBg.mp4" type="video/mp4">
          </video>
        </div>
        <div class="cover-container">

          <?php get_template_part('__header', 'section1' ); ?>

          <?php get_template_part('__body', 'section1' ); ?>

          <?php get_template_part('__footer', 'section1' ); ?>
        </div>
      </div>
    </div>


<div class="site-wrapper">

      <div class="site-wrapper-inner">
     <div class="pmSideText">
            <p>over 10+ years experience</p>
          </div>
        <div class="container-fluid">
          <?php get_template_part('__body', 'section2' ); ?>
        </div>

      </div>

    </div>


<div class="site-wrapper">
  <div class="site-wrapper-inner">
    <div class="pmSideText">
      <p>recent works</p>
    </div>
    <div class="container-fluid">
      <?php get_template_part('__body', 'section3' ); ?>
    </div>
  </div>
 </div>


<div class="site-wrapper">

      <div class="site-wrapper-inner">
   <div class="pmSideText">
            <p>Holler atcha boi!</p>
          </div>
          <div class="container-fluid">
     
          <?php get_template_part('__body', 'section4' ); ?>
        </div>

      </div>

    </div>



</div>







<?php get_footer(); ?>


