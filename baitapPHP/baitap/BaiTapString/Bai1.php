<?php
/*
In ra màn hình đoạn chuỗi sau, viết bằng 2 cách single quote và double quotes:
Money $__$ money
 */
$resultBySingleQuote = 'Money $__$ money';
$resultByDoubleQuote = "Money \$__\$ money";
echo 'using single quote :' . $resultBySingleQuote;
echo "<br>";
echo 'using double quote :' . $resultByDoubleQuote;
