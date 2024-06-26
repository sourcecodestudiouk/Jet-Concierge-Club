<header class="site-header animate__animated animate__fadeInDown">
  <div class="container">
    <div class="off-canvas-menu-trigger">
      <i class="fa-solid fa-bars"></i>
      <p>Menu</p>
    </div>
    <?php //$img = get_field('site_logo', 'options'); ?>
    <a href="<?php echo get_home_url(); ?>">
    <div class="text-logo">
      <?php get_template_part('/assets/img/jet-con-full-text.svg'); ?>
    </div>
    <div class="emblem-logo">
          <?php get_template_part('/assets/img/jcc-icon.svg'); ?>
    </div> 
    </a>
    <div class="contact-link">
      <p><span>Contact</span></p>
    </div>
    
  </div>
</header>

<?php get_template_part('templates/partials/off-canvas-menu'); ?>
<?php get_template_part('templates/partials/off-canvas-contact'); ?>
