<?php
defined( 'ABSPATH' ) or die( 'Access denied' );
/*
Plugin Name: Occurrence Tracker
Description: Plugin for tracking and reviewing occurrences.
Version: 1.0
Author: Jadon Naas
*/

class OccurrenceTrackerRestController extends WP_REST_Controller{

    public function register_routes(){
        $version = '1';
        $namespace = '/occurrence-tracker/v' . $version;
        $base = 'api';
        register_rest_route( $namespace, '/' . $base, array(
            array(
                'methods'               => 'GET',
                'callback'              => array( $this, 'get_base_route' ),
                'permission_callback'   => array( $this, 'get_base_route_permission_callback' )
            )
        ));
        register_rest_route( $namespace, '/' . $base . '/check_admin', array(
            array(
                'methods'               => 'GET',
                'callback'              => array( $this, 'check_admin' ),
                'permission_callback'   => array( $this, 'check_admin_permission_callback' )
            )
        ));
    }
        
    public function get_base_route( $request ){
        $response_data = array( 'success' => true, 'result' => 'You have reached the API\'s base route.' );
        $response = new WP_REST_Response( $response_data, 200);
        return $response;
    }

    public function get_base_route_permission_callback( $request ){
        return current_user_can( 'read' );
    }

    public function check_admin( $request ){
        $response_data = array( 'success' => true, 'result' => current_user_can( 'manage_options' ) );
        $response = new WP_REST_Response( $response_data, 200 );
        $response->header( 'Cache-Control', 'no-cache, no-store, must-revalidate', true );
        return $response;
    }

    public function check_admin_permission_callback( $request ){
        return current_user_can( 'read' );
    }

}

$occurrence_tracker = new OccurrenceTrackerRestController();

add_action( 'rest_api_init', [ $occurrence_tracker, 'register_routes' ] );

add_action( 'admin_menu', 'occurrence_tracker_menu' );
function occurrence_tracker_menu(){
    add_menu_page( 'Occurrence Tracker', 'Occurrence Tracker', 'read', 'occurrence-tracker/occurrence-tracker.php', 'view_occurrence_tracker', 'dashicons-thumbs-up', '4.105' );
}

function view_occurrence_tracker(){
    if( !current_user_can( 'read' ) ){
        wp_die( __( 'You do not have permission to access this page.' ) );
    }
    wp_register_script( 'main.bundle.js', plugins_url( '/ng/main.bundle.js', __FILE__ ) );
    wp_localize_script( 'main.bundle.js', 'appInfo', array(
        'nonce' => wp_create_nonce( 'wp_rest' ),
        'home_url' => home_url()
    ));
    ob_start();
    wp_enqueue_script( 'inline.bundle.js', plugins_url( '/ng/inline.bundle.js', __FILE__ ) );
    wp_enqueue_script( 'polyfills.bundle.js', plugins_url( '/ng/polyfills.bundle.js', __FILE__ ) );
    wp_enqueue_script( 'styles.bundle.js', plugins_url( '/ng/styles.bundle.js', __FILE__ ) );
    wp_enqueue_script( 'vendor.bundle.js', plugins_url( '/ng/vendor.bundle.js', __FILE__ ) );
    wp_enqueue_script( 'main.bundle.js', plugins_url( '/ng/main.bundle.js', __FILE__ ) );
    echo '<base href="' . $_SERVER[ 'REQUEST_URI' ] . '">';
    echo '<app-root></app-root>';
    echo ob_get_clean();
}