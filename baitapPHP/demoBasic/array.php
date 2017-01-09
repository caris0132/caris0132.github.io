<?php 
//cú pháp khai báo : $var = array(element1, .., elementN);
//hoặc khai báo theo mảng kết hợp: $var = array(key => value, ...)
$var = array(2,5,7,8,4,9,6,1,3);

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
//lặp mảng tuần tự sử dụng foreach:
//cú pháp:
//foreach($array as $temp)
//{ Hành Động }
foreach ($var as $item) {
	echo $item . '</br>';
}

//lặp mảng kết hợp sử dụng foreach:
//cú pháp:
//foreach($array as $key=>$value)
//{ Hành Động }
foreach ($age as $key => $value) {
	echo "$key => $value </br>";
}
//một số hàm sắp xếp mảng;
//sort(): sắp xếp mảng theo bảng chử cái tăng dần
sort($var);
echo implode(',', $var).'</br>';
//rsort(): sắp xếp mảng theo bảng chử cái giam dần
rsort($var);
echo implode(' ', $var).'</br>';
// đối với mảng kết  hợp
// ksort() sắp xếp mảng theo khóa theo bảng chử cái tăng dần
ksort($age);
echo implode(' ', $age).'</br>';
// krsort() sắp xếp theo khóa giảm dần.
krsort($age);
echo implode(' ', $age).'</br>';
//asort() : sắp xếp theo giắ trị tăng dần
asort($age);
echo implode(' ', $age).'</br>';
//arsort() : sắp xếp theo giắ trị giảm dần
arsort($age);
echo implode(' ', $age).'</br>';
 ?>