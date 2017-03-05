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
       
              <nav class="navbar masthead-nav fixed-top navbar-toggleable-xs">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               <a class="masthead-brand navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
                <button class="navbar-toggler navbar-toggler-right hidden-xs-down" type="button" data-toggle="collapse" data-target="#pm-main-menu" aria-controls="pm-main-menu" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-air"><span>menu</span></span>
                  <span class="icon-cross"><span>close</span></span>
                </button>

                 <button class="navbar-toggler navbar-toggler-right mobile hidden-sm-up" type="button" data-toggle="collapse" data-target="#pm-main-menu-mobile" aria-controls="pm-main-menu-mobile" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-air"><span>menu</span></span>
                  <span class="icon-cross"><span>close</span></span>
                </button>
              
                <div class="collapse navbar-collapse hidden-xs-down" id="pm-main-menu">
                   <?php wp_nav_menu( $main_nav_options ); ?>
                 </div>
             
                   <ul id="pm-social" class="list-unstyled hidden-xs-down">
                     <li><span class="icon-facebook-with-circle"></span></li>
                     <li><span class="icon-github-with-circle"></span></li>
                     <li><span class="icon-instagram-with-circle"></span><li>
                   </ul>

                 
                <div class="collapse navbar-collapse hidden-sm-up" id="pm-main-menu-mobile">
                   <?php wp_nav_menu( $main_nav_options ); ?>
                 </div>
        
              </nav>
 
 <?php endif; ?>