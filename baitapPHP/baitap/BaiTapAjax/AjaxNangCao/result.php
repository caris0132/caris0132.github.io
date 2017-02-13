<?php 
if(!empty($_POST)) {
	$total = array_reduce($_POST, function ($v1, $v2)
	{
		return $v1 + $v2;
	});
	$multi = array_reduce($_POST, function ($v1, $v2)
	{
		return $v1 * $v2;
	},1);
	$String_json = array(
		'total' => $total,
		'multi' => $multi,
	);
	echo json_encode($String_json);
}