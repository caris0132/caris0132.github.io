<?php
/**
 * check all param is array or not show log logicException
 * @param  array $arr1 [description]
 * @param  array $arr2 [description]
 * @param  array $arr3 [description]
 * @throws if param isn't array then throw logicException
 * @return void       [description]
 */
function funExercise($arr1, $arr2, $arr3)
{
    try {
        if (array_search(1, $arr1)) {
            echo 'Found';
        } else {
            echo(array_search(1, $arr1));
            echo 'Not found';
        }
        $result = array_unique(array_merge($arr2, $arr3));
        echo '<br>' . implode(', ', $result);
        echo '<br>';
        array_filter($result, function ($value) {
            if (count($value) % 2 == 0) {
                echo "$value, ";
            }

        });
        sort($arr1);
        echo implode(', ', array_intersect($arr1, $result));
    } catch (logicException $e) {
        error_log('message');
    }
}
$arr1 = array(2, 5, 3);
$arr2 = array(111, 33, 22, 2, 3);
$arr3 = array(23, 44, 12, 5, 3);
funExercise($arr1, $arr2, $arr3);
