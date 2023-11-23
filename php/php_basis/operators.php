<?php

# Умовні оператори
# Перевіряють певну умову

# if () { } - if завжди аналізує умову в булевому значенні, воно буде повертати true або false

# Конструкція if/else

        $a = 0.0;
        $b = '1';

        if ($a == $b) {
            echo "true";
        } else {
            echo 'false';
        }

# Скорочена конструкція if/else

$result = ($a) ? 'True' : 'False';
echo $result;

# Фігурні дужки потрібні, коли пишеться декілька рядків коду

# Конструкція if/elseif
# elseif - можна писати будь-яку к-сть разів
        $a = 3;
        $b = '1';

        if($a == 1) {
            echo "a = 1";
        } elseif ($a == 2) {
            echo '$a = 2';
        } elseif ($a == 3) {
            echo 'a == 3';
        } else {
            echo 'a немає значення';
        }

# Викор. and ( && ) - i, or ( || ) - або,  коли потрібно перевірити дві умови одночасно
        $a = 1;
        $b = 1;

        if($a == 1 and $b == 1) {
            echo "true";
        }

# Конструкція switch case

        $a = 2;
        $b = 2;
        $c = 4;

        switch ($a) {
            case 1:
                echo "a = 1";
                break;
            case 2:
                echo 'a = 2';
                break;
            case 3:
                echo 'a = 3';
                break;
        }

# Оператор Match, добавлений в версію PHP 8.0

        $fruits = 'banana';
        $result = match ($fruits) {
            'apple' => 'В корзині apple',
            'banana' => 'В корзині banana',
            'mango' => 'В корзині mango',
        };

        echo $result . '<br>';
