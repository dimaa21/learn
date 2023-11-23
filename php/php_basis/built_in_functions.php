    # Встроєні ф-ц. PHP

    <?php

    # trim - обрізає лишні символи з початку і кінця рядка
    # ltrim - обрізає лишні символи спочатку рядка 
    # rtrim - обрізає лишні символи з кінця рядка

    $str1 = 'Hello World!  ';
    $trim_str = trim($str1);

    echo $trim_str . '<br>';

    # strip_tags - видаляє html-теги з рядка

    $strip_tag_str = '<h2>PHP</h2>';
    $strip_str = strip_tags($strip_tag_str);

    echo $strip_str . '<br>';

    # htmlspecialchars - перетворює спеціальні символи в HTML

    $message = "<h1>Hello World!</h1><script> alert('Hello') </script>";
    echo $message . '<br>';

    $result = htmlspecialchars($message); // Щоб видалити певний символ справа

    # htmlspecialchars_decode - декодування цих символів

    $new = '$#%#)(%*%*)(*(%#(*)%#(*)#%';

    echo htmlspecialchars_decode($new);

    # htmlentities - перетворює все в html

    $str = "A 'quote' is <b>bold</b>";

    echo htmlentities($str);

    # str_replace - заміняє певний рядок, на інший 

    $str_rep = 'Hello';

    $result_1 = str_replace('Hello', 'World!', $str_rep);

    echo '<br>' . $result_1;

    # str_ireplace - для того, щоб регістр не був важливий, заміняє певний рядок, на інший 

    $str_rep_1 = 'Hello';

    $result_2 = str_ireplace('hello', 'World!', $str_rep_1);

    echo '<br>' . $result_2 . '<br>';
    
    # strtoupper - робить всі символи в рядку великими
    # strtolower - робить всі символи в рядку великими

    $str_rep_2 = 'Qwerty';

    echo strtoupper($str_rep_2) . '<br>';

    # strlen / mb_strlen - повертає довжину рядка 

    echo mb_strlen($str_rep_2) . '<br>';

    # strpos - показує на якій позиції певний символ

    $result = strpos($str_rep_2, 'e'); 

    if($result !== false) {
        echo 'Наша буква знаходиться на позиції: ' . $result; 
    } else {
        echo 'В рядку не знайдена ця буква!';
    }

    # substr / mbsubstr - повертає підстроку з певної позиції

    echo '<br>' . substr($str_rep_2, '1', 1) . '<br>';


    # Ф-ц. PHP для роботи з датою і часом 

    # date - вивести дату і часу

    echo date('Y:m:d', time());
    echo '<br>';
    echo date('Y:m:d', time() - 60*60*24);

    date_default_timezone_get('Europe/Kiev');

    echo '<br>' . date('Y:m:d', time());

    # phpinfo - вся інформація про налаштування локального сервера

    echo '<br>' . phpinfo();

    # time - виводить час
    # microtime - виводить мілісекунди

    echo '<br>' . microtime();

    ?>
