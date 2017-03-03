<div class="row">

<?php
$samples = array('vsg.io', 'visage ent', 'lukes locker', 'honda', 'acura');
?>

    <?php foreach($samples as $sample): ?>
      <div class="col-sm-5 pmSample work">
        <div class="sampleCover">
            <h4><?php echo $sample; ?></h4>
        </div>
    </div>
    <?php endforeach; ?>

</div>


 <?php get_template_part('__work', 'details' ); ?>


