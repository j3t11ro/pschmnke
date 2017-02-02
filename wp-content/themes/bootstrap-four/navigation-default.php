<?php
$main_nav_options = array(
  'theme_location'    => 'main_menu',
  'depth'             => 2,
  'container'         => '',
  'container_class'   => '',
  'menu_class'        => 'nav navbar-nav',
  'fallback_cb'       => 'bootstrap_four_wp_navwalker::fallback',
  'walker'            => new bootstrap_four_wp_navwalker()
);
?>


<?php if ( has_nav_menu( 'main_menu' ) ) : ?>
        <div class="masthead clearfix">
            <div class="inner">
              <a class="masthead-brand navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
              <nav class="navbar masthead-nav navbar-toggleable-xs">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#pm-main-menu" aria-controls="pm-main-menu" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-air"></span>
                  <span class="icon-cross"></span>
                </button>
                  <div class="collapse navbar-collapse" id="pm-main-menu">
                 <?php wp_nav_menu( $main_nav_options ); ?>
                 </div>
              </nav>
            </div>
          </div>
 <?php endif; ?>
