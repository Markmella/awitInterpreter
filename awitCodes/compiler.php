<?php

    $code = $_POST["code"];

    $random = substr(md5(mt_rand()), 0, 7);
    $fileName =  $random . '.awit';
    $filePath = "temp/" . $random . ".awit";
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);

    $cmd = "";

    if (strncasecmp(PHP_OS, 'WIN', 3) == 0)
      $cmd = 'awit.exe temp/' . $fileName;
    else
      $cmd = 'temp/./awit temp/' . $fileName; 

    system($cmd . ' 2>&1', $retval);
?>

