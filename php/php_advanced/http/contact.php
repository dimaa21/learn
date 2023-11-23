<?php

# Передаємо в змінну глобальний масив _POST

$name = htmlspecialchars($_POST['name'] ?? "") . '<br>';

echo '<br>';

# Вивід цих значень

$contact_form = ($_POST['contact_form'] ?? "");
$search_submit = ($_POST['search_submit'] ?? "");

echo $contact_form . '<br>';
echo $search_submit;

?>