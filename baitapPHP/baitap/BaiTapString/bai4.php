<?php 
$trim = 'trim';
//remove char m in $trim
echo rtrim($trim,'m');
echo'</br>';
echo ltrim(strrev($trim),'m');