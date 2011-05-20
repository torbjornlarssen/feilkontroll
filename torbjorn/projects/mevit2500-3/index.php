<?php
$fullpath = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['SCRIPT_NAME'];
$path = substr($fullpath,0, strripos($fullpath, "/") + 1);
?>

<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="<?php echo $path ?>style.css">
        <script>
            path = "<?php echo $path ?>";
            
            </script>
        <script type="text/javascript" language="JavaScript" SRC="<?php echo $path ?>jQ.js"></script>
        <script type="text/javascript" language="JavaScript" SRC="<?php echo $path ?>jQ.ls.js"></script>
        <script type="text/javascript" language="JavaScript" SRC="<?php echo $path ?>jQ.tf.js"></script>
        <script type="text/javascript" language="JavaScript" SRC="<?php echo $path ?>jS.js"></script>
        <script type="text/javascript" language="JavaScript" SRC="<?php echo $path ?>jS.lib.js"></script>
    </head>
    <body>
        <div class="textbox" id="wherearewegoing" style="text-align:center">
           <audio src="<?php echo $path ?>wherearewegoing.ogg" controls='controls'></audio><br>
           <div class="label"> Fra "Godspeed You! Black Empereror - f#a#&#8734; - Providence" </div>
        </span>


        <span style="display:none" id="lydsjekk">false</span>
        <span style="display:none" id="videosjekk">false</span>
        <span style="display:none" id="installasjonsjekk">false</span> 

       
    </body>
</html>
