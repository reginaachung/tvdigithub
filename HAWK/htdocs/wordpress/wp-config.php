<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpdb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'i|9,i!&O%btbTI9]-qF@voBS]*AGggfI(YGQl^ff0)gex71?iZZCA(#WU ;9|}9=' );
define( 'SECURE_AUTH_KEY',  'M=5s#Dw]o/9E+bm)bpB:{]kH}huDg A<=]+y.$<y$t.Up38U|Xj8^l@J%z}D+)f9' );
define( 'LOGGED_IN_KEY',    '-=ZFLre`g}?GzilG$A$|]8!t6ty#W!ucJ,q`(pDSYxuVUB4bD:*2PX>zC6bsw1If' );
define( 'NONCE_KEY',        '[e ~*2w+-~2 *Kc5X6tz+S`f;(&.s-|Gvz/e:==W6bKKg0PhW?J_UK5XIRX5%LNk' );
define( 'AUTH_SALT',        'a.]rHfBX<Dh>Wvo<=@xhq(N3~tU2Ui{=Nh: S32LU*Lx?@$)U+J!A~)<0IT<$N!L' );
define( 'SECURE_AUTH_SALT', 'Gvmh#B4l#+(DfiyiC[^FAjm`PMk%@Rbe*cn5N(zdUrUE>J5m:0gd/_#}Y,3ZCuDr' );
define( 'LOGGED_IN_SALT',   'g>09s3j/6$:k1AnHF3jvZ51yX&1_m;g]tXu}!?a|`!HTlYh]tkMl|#E^iMa=whUD' );
define( 'NONCE_SALT',       '%+n|^99_XnLaue4wl~^B=fVAp5n`9=/Ds)9HTgd?K6v$E*^CfNCEF=6GUK|^ka|p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
