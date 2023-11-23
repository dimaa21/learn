<?php

$name = 'Alex'; # string
$number = 10; # int
$float = 8.5; # float
$bool = true; # булевий тип, правда або брехня
$null = null; # пусте значення
$arr = [56, 565, 892]; # масив
$user = new stdClass; # об’єкт

# Вивід певного елемента масиву по ключу
$arr2 = ['name' => 'Dmytro',
    'age' => 10];
echo $arr2['name'] . '<br>';

$arr_1 = 2;
$arr_2 = 5;
$args = array_merge($arr_1, $arr_2); # зліпити два масиви в один
array_reverse($arr); # перевернути масив в іншу сторону

settype($float); # присвоїти інший тип змінної
gettype($number); # перевірка типу змінної
var_dump(isset($nam2)); # перевірка,  чи існує така змінна