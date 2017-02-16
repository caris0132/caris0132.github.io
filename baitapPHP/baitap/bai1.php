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
        $error = array();
        if (!is_array($arr1)) {
            array_push($error, 1);
        }
        if (!is_array($arr2)) {
            array_push($error, 2);
        }
        if (!is_array($arr2)) {
            array_push($error, 3);
        }
        if (count($error) > 0) {
            throw new logicException("Invalid parameter " . implode(', ', $error));

        }

        // found item in array . if found echo 'Found' else echo 'Not Found'
        foundItemInArray(1, $arr1);
        $arrayMergeUnique = array_unique(array_merge($arr2, $arr3));
        echo "</br>";
        print_r($arrayMergeUnique);

        //check total digit value has divisible 2 or not
        $arrNumDivisible2 = array_filter($arrayMergeUnique, 'totalDigitDivisible2');
        echo "</br>";
        print_r($arrNumDivisible2);

        //print all item $arr1 exits $arrayMergeUnique
        $result = array_intersect($arr1, $arrayMergeUnique);
        echo "</br>";
        sort($result);
        print_r($result);

        ////print all key item $arr1 not exits $arrayMergeUnique
        $result = array_diff_key($arr1, $arrayMergeUnique);
        arsort($result);
        echo "</br>";
        print_r($result);

    } catch (logicException $e) {
        error_log($e->getMessage(), 0);
    }
}

/**
 * found item in array . if found echo 'Found' else echo 'Not Found'
 * @param  array $array specifies array to search
 * @param  [type] $item  specifies the what to search for
 * @return void        echo 'Found' if the value is found in the array, else echo 'not found'
 */
function foundItemInArray($item, $array)
{
    echo in_array($item, $array) ? 'Found' : 'Not found';
}

/**
 * check total digit value has divisible 2 or not
 * @param  numecric $value specifies numeric to check
 * @return booleam        return true if total digit disvisible 2 else return false
 */
function totalDigitDivisible2($value)
{
    if (is_numeric($value)) {
        $value = str_split($value);
        $sumDigit = array_sum($value);
        if ($sumDigit % 2 == 0) {
            return true;
        }
        return false;
    }
    return false;
}

$arr1 = array(1, 2, 5, 3, 'a' => 22, 'b' => 3);
$arr2 = array(111, 33, 22, 2, 3);
$arr3 = array(23, 44, 12, 5, 3);
var_dump($arr1);
var_dump($arr2);
var_dump($arr3);
funExercise($arr1, $arr2, $arr3);
