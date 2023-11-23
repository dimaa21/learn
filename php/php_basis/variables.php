# Відкриття і закриття коду
<?php

?> # якщо у файлі тільки php код, то закриваючий тег не обов'язковий

# Оператор виводу echo
<?php
echo 'I learn PHP';
?>

# print i echo - різниці нема, більшість викор. echo


# Коментарі
# Однорядкові коментарі //, #
# Багаторядкові коментарі /* */

<?php
echo 'I learn PHP';
echo 'Tag // and #';

$php = 'program language for back-end develop';
$javascript = 'program language for front-end develop';

?>

# Змінні
# Змінна - це як певна коробка, в якій зберігається інформація.

<?php
$number = 5;
$num = 45; // Переприсвоєнння значення змінної
echo $number . $num; // Конкетенація двох змінних

# $name, $Name, $NAME - різні змінні

# Оголошення і вивід константи:
define("Name", 'Dmytro');
echo Name;

?>