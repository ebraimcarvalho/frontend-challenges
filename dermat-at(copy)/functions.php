<?php 
  //estimated reading time
  function reading_time() {
    $content = get_post_field( 'post_content', $post->ID );
    $word_count = str_word_count( strip_tags( $content ) );
    $readingtime = ceil($word_count / 200);
    if ($readingtime == 1) {
    $timer = " minuto";
    } else {
    $timer = " minutos";
    }
    $totalreadingtime = $readingtime . $timer;
    return $totalreadingtime;
  }
?>