<?php

include_once 'lib/bootstrap-four-wp-navwalker.php';

global $bootstrap_four_version;

$bootstrap_four_version = '4.0.0';

// Le sigh...
if ( ! isset( $content_width ) ) $content_width = 837;


if ( ! function_exists( 'bootstrap_four_widgets_init' ) ) :
  function bootstrap_four_widgets_init() {
    register_sidebar( array(
      'name' => __( 'Right Sidebar', 'bootstrap-four' ),
      'id' => 'right-sidebar',
      'before_widget' => '<aside id="%1$s" class="widget %2$s">',
      'after_widget' => '</aside>',
      'before_title' => '<h3>',
      'after_title' => '</h3>',
    ) );
  }
endif;
add_action( 'widgets_init', 'bootstrap_four_widgets_init' );


if ( ! function_exists( 'bootstrap_four_setup' ) ) :
  function bootstrap_four_setup() {

    add_theme_support( 'custom-background', array(
      'default-color' => 'ffffff',
    ) );

    add_theme_support( 'automatic-feed-links' );

    add_theme_support( 'title-tag' );

    add_theme_support( 'html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ) );

    register_nav_menus( array(
      'main_menu' => __( 'Main Menu', 'bootstrap-four' ),
      // 'footer_menu' => 'Footer Menu'
    ) );

    add_editor_style( 'css/bootstrap.min.css' );
  }
endif; // bootstrap_four_setup
add_action( 'after_setup_theme', 'bootstrap_four_setup' );



if ( ! function_exists( 'bootstrap_four_theme_styles' ) ) :
  function bootstrap_four_theme_styles() {
    global $bootstrap_four_version;
    wp_enqueue_style( 'psychomunkee-styles', get_template_directory_uri() . '/style.css', null );
    wp_enqueue_style( 'pagePile-styles', get_template_directory_uri() . '/css/jquery.pagepiling.css', null );
    wp_enqueue_style( 'rotate-styles', get_template_directory_uri() . '/css/simpletextrotator.css', null );

  }
endif;
add_action('wp_enqueue_scripts', 'bootstrap_four_theme_styles');


// if ( ! function_exists( 'bootstrap_four_theme_scripts' ) ) :
//   function bootstrap_four_theme_scripts() {
//     global $bootstrap_four_version;
//     wp_enqueue_script( 'bootstrap-four-bootstrap', get_template_directory_uri() . '/assets/js/vendor/bootstrap.js', array( 'jquery' ), $bootstrap_four_version, true );
//   }
// endif;
// add_action('wp_enqueue_scripts', 'bootstrap_four_theme_scripts');

//Custom Starts here
//
//

function home_index_redirect()
{
  if( $_SERVER['REQUEST_METHOD'] === 'GET'){
    if( is_page( 'work' ) || is_page( 'beliefs' ) || is_page( 'contact' )  )
    {
      $title = get_the_title();
      $page = get_page_by_title( $title ); //as an e.g.
      $id = $page->ID;//This is page id or post id
      
      $file = get_post_meta( $id, '_wp_page_template', true );
      $template = preg_replace('/\\.[^.\\s]{3,4}$/', '', $file); //remove ext.

      get_header();
      get_template_part('navigation', 'default' );
      echo '<section data-page-id="'.$id.'" id="front-page">';
      get_template_part( $template );
      echo '</section>';
      get_footer();
      echo '<div class="cd-cover-layer"></div> <!-- this is the cover layer -->
          <div class="cd-loading-bar"></div> <!-- this is the loading bar -->';

        exit();
    }
  }
}
add_action( 'template_redirect', 'home_index_redirect' );

// ** Add Default Scripts
if ( ! function_exists( 'psychomunkee_scripts' ) ) :
  function psychomunkee_scripts() {
    wp_enqueue_script( 'psychomunkee-default', get_template_directory_uri() . '/assets/js/scripts.min.js', array( 'jquery' ), null, true );
  }
endif;
add_action('wp_enqueue_scripts', 'psychomunkee_scripts');


//Ajax Stuff
//global $wp_query;

wp_localize_script( 'ajax-load-page', 'ajaxloadpage', array(
	'ajaxurl' => admin_url( 'admin-ajax.php' )
));

wp_localize_script( 'ajax-email-contact', 'ajaxemailcontact', array(
  'ajaxemail' => admin_url( 'admin-ajax.php' )
));

add_action( 'wp_ajax_nopriv_load_page', 'pm_load_page' );
add_action( 'wp_ajax_ajax_load_page', 'pm_load_page' );

function pm_load_page() {
    $page = $_POST['page'];
    $id = $page;//This is page id or post id
    $cookie_name = 'page_id';
    $cookie_value = $id;


    // $ch = curl_init('http://localhost:8888/psychomunkee/');
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // // get headers too with this line
    // curl_setopt($ch, CURLOPT_HEADER, 1);
    // $result = curl_exec($ch);
    // // get cookie
    // // multi-cookie variant contributed by @Combuster in comments
    // preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $result, $matches);
    // $cookies = array();
    // foreach($matches[1] as $item) {
    //     parse_str($item, $cookie);
    //     $cookies = array_merge($cookies, $cookie);
    // }
    //  echo '<span style="display: none">'.$cookies.'</span>';
 

    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), '/'); // 86400 = 1 day

  //   $content_post = get_post($id);
  //   $content = $content_post->post_content;
    $file = get_post_meta( $id, '_wp_page_template', true );
    $template = preg_replace('/\\.[^.\\s]{3,4}$/', '', $file); //remove ext.

    //echo $content;
   get_template_part( $template );

    die();
}


wp_localize_script( 'ajax-email-contact', 'ajaxemailcontact', array(
  'ajaxemail' => admin_url( 'admin-ajax.php' )
));

add_action( 'wp_ajax_nopriv_contact_email', 'pm_contact_email' );
add_action( 'wp_ajax_ajax_contact_email', 'pm_contact_email' );


function pm_contact_email(){

//Fetching Values from URL
$name = strtolower($_POST["name"]);
$email = strtolower($_POST["email"]);
$message = strtolower($_POST["message"]);

	
	if (empty($name)|| empty($email) || empty($message)){ //For whatever reason if front end validation fails - checks if fields are empty.

		echo "0";
		
	} else{
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { //Check email format and inform if invalid
           			   echo 'something is wrong with your email address';
           } else {	
					
 					 echo "1";  
					 	$to = 'jeff@psychomunkee.com';
						$subject = '[New Contact] - PsychoMunkee';
						$message = "a new message from ".$name." just arrived, here is what they had to say:\n \n" .$message. "\n \n and their e-mail is: ".$email;
					    $from = "no-reply@psychomunkee.com";
   						$headers = "From:" . $from;
						
			    		$send = wp_mail($to, $subject, $message, $headers);
						  $send;
							if(!$send){
								echo '2';
						}
					}
				}
  die();

}

function bootstrap_four_nav_li_class( $classes, $item ) {
  $classes[] .= ' nav-item';
  return $classes;
}
add_filter( 'nav_menu_css_class', 'bootstrap_four_nav_li_class', 10, 2 );


function bootstrap_four_nav_anchor_class( $atts, $item, $args ) {
  $atts['class'] .= ' nav-link';
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'bootstrap_four_nav_anchor_class', 10, 3 );


function bootstrap_four_comment_form_before() {
  echo '<div class="card"><div class="card-block">';
}
add_action( 'comment_form_before', 'bootstrap_four_comment_form_before', 10, 5 );




function bootstrap_four_comment_form( $fields ) {
  $fields['fields']['author'] = '
  <fieldset class="form-group comment-form-email">
    <label for="author">' . __( 'Name *', 'bootstrap-four' ) . '</label>
    <input type="text" class="form-control" name="author" id="author" placeholder="' . __( 'Name', 'bootstrap-four' ) . '" aria-required="true" required>
  </fieldset>';
  $fields['fields']['email'] ='
  <fieldset class="form-group comment-form-email">
    <label for="email">' . __( 'Email address *', 'bootstrap-four' ) . 'Email address *</label>
    <input type="email" class="form-control" id="email" placeholder="' . __( 'Enter email', 'bootstrap-four' ) . '" aria-required="true" required>
    <small class="text-muted">' . __( 'Your email address will not be published.', 'bootstrap-four' ) . '</small>
  </fieldset>';
  $fields['fields']['url'] = '
  <fieldset class="form-group comment-form-email">
    <label for="url">' . __( 'Website *', 'bootstrap-four' ) . '</label>
    <input type="text" class="form-control" name="url" id="url" placeholder="' . __( 'http://example.org', 'bootstrap-four' ) . '">
  </fieldset>';
  $fields['comment_field'] = '
  <fieldset class="form-group">
    <label for="comment">' . __( 'Comment *', 'bootstrap-four' ) . '</label>
    <textarea class="form-control" id="comment" name="comment" rows="3" aria-required="true" required></textarea>
  </fieldset>';
  $fields['comment_notes_before'] = '';
  $fields['class_submit'] = 'btn btn-primary';
  return $fields;
}
add_filter( 'comment_form_defaults', 'bootstrap_four_comment_form', 10, 5 );


function bootstrap_four_comment_form_after() {
  echo '</div><!-- .card-block --></div><!-- .card -->';
}
add_action( 'comment_form_after', 'bootstrap_four_comment_form_after', 10, 5 );


/* * * * * * * * * * * * * * *
 * BS4 Utility Functions
 * * * * * * * * * * * * * * */

function bootstrap_four_get_posts_pagination( $args = '' ) {
  global $wp_query;
  $pagination = '';

  if ( $GLOBALS['wp_query']->max_num_pages > 1 ) :

    $defaults = array(
      'total'     => isset( $wp_query->max_num_pages ) ? $wp_query->max_num_pages : 1,
      'current'   => get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1,
      'type'      => 'array',
      'prev_text' => '&laquo;',
      'next_text' => '&raquo;',
    );

    $params = wp_parse_args( $args, $defaults );

    $paginate = paginate_links( $params );

    if( $paginate ) :
      $pagination .= "<ul class='pagination'>";
      foreach( $paginate as $page ) :
        if( strpos( $page, 'current' ) ) :
          $pagination .= "<li class='active'>$page</li>";
        else :
          $pagination .= "<li>$page</li>";
        endif;
      endforeach;
      $pagination .= "</ul>";
    endif;

  endif;

  return $pagination;
}


function bootstrap_four_the_posts_pagination( $args = '' ) {
  echo bootstrap_four_get_posts_pagination( $args );
}

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'samplePosts',
    array(
      'labels' => array(
        'name' => __( 'Samples' ),
        'singular_name' => __( 'Sample' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );
}