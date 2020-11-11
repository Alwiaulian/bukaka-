<?php
    $tgl = new Date('2020-05-01');
    $tgl2 = $tgl->add(new DateInterval('P6M'));
    echo $tgl2;
?>  