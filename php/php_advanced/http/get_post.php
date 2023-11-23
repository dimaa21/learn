<!--

# GET використовується для збору даних форми після надсилання форми HTML за допомогою method="get".
# Дані з GET ще виводиться в адресний рядок
# POST використовується для збору даних форми після надсилання HTML-форми з method="post".
# В атрибуті action вказується файл, який буде обробляти форму

-->

<?php
# Вивести метод передачі, який ми викор. на сторінці

# echo $_SERVER['REQUEST_METHOD'] . '<br>';

# Передача даних з форми

$success = false;
$contact_submit = $_POST['contact_submit'] ?? "";

# Перевірка даних з форми

if ($contact_submit == "submited") {
    $name = strip_tags(trim($_POST['name'] ?? ""));
    $phone = strip_tags(trim($_POST['phone'] ?? ""));
    $text = strip_tags(trim($_POST['text'] ?? ""));
    $yes = strip_tags(trim($_POST['yes'] ?? ""));

    $body = $name . "\n" . $phone . "\n" . $text . "\n" . $yes;

    if ($name == '' || $phone = '' || $text == '' || $yes = '') {
        $errors = "Заповніть всі потрібні поля";
    } else if (mb_strlen($name, 'utf-8') > 20) {
            $errors = "Ім'я не може бути ніж 20 символів";
    } else if (mb_strlen($text, 'utf-8') < 5) {
        $errors = "Текст має бути містити більше ніж 5 символів";
    } else {
        mail('dimasukgaborak@gmail.com', 'Contact Message:', $body);
        $success = true;
    }
}

?>

<!-- Створення форми для передачі даних -->
<!-- В атрибуті action вказується файл, який буде обробляти форму -->
<!-- В атрибуті method вказується метод, через який буде оброблятись форма -->

<h1>Contact form</h1>
<style>
    label {
        width: 150px;
        display: block;
    }
</style>
<?php if($success) {
    echo 'Дані успішно відправлені';
} else {
    if(isset($errors)) echo $errors;
    ?>
<form method="post" action="">
    <p><label for="name">Name: </label>
        <input type="text" id="name"
               value="<?php if(isset($name)) echo $name; ?>"
               name="name">
    </p>
    
    <p>
        <label for="phone">Phone: </label>
        <input type="text" id="phone"
               value="<?php if(isset($phone)) echo $phone; ?> "
               name="phone">
    </p>
    
    <p>
        <label for="text">Field: </label>
        <textarea id="text" name="text"
                  value="<?php if(isset($text)) echo $text; ?>">
        </textarea>
    </p>

    <p>
        <label for="yes">Yes or no&nbsp;&nbsp; </label>
        <input type="checkbox" name="yes" id="yes"
               value="value="<?php if(isset($yes) && $yes == 'on') echo 'checked'; ?>">
    </p>
    <button name="contact_submit" value="submited">Send Contact</button>
</form>
<?php } ?>
