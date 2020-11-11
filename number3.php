<!DOCTYPE html>
<html>
    <body>
        <?php
            $numbers = array(20,10,100,30,15,5);
            //3a   
            // for Ascending
            sort($numbers);
            $arrlength = count($numbers);
            for($x = 0; $x < $arrlength; $x++) {
                echo $numbers[$x];
                echo "<br>";
            }

            // for Descending
            rsort($numbers);
            $arrlength = count($numbers);
            for($x = 0; $x < $arrlength; $x++) {
                echo $numbers[$x];
                echo "<br>";
            }


            // "-------------------------------------------"            
            //3b
            $numbers = array(20,10,100,30,15,5);
            array_push($numbers, 180); 

            // "-------------------------------------------"  
             
            //3c
            $numbers = array(20,10,100,30,15,5);
            unset($numbers[3]);
        ?>
    </body>
</html>