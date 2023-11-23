<?php
# Цикл while

$i = 1;

while ($i <= 10) {
    echo $i++ . '<br>';
}

echo '<br>';

# Цикл Do While

$b = 11;
do {
    echo $b . '<br>';
    $b++;
} while($b <= 10);

echo '<br>';

# Цикл foreach - для масивів

$names = ['Dima', 'Irina'];
$container = [
    'Телефон' => 'iPhone',
    'PC' => 'Mac Mini',
    'Earphons' => 'AirPods',
    'Keyboard' => 'Logitech'
];

foreach($container as $key => $item) {
    $item .= '.';
    echo $key . ': ' . $item . '<br>';
}