<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('header-title'); ?></title>

    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.scss', 'resources/js/app.js']); ?>
</head>

<body>
    <?php echo $__env->yieldContent('content'); ?>

</body>

</html>
<?php /**PATH /Users/Dima/Documents/GitHub/learn/laravel/resources/views/layouts/main.blade.php ENDPATH**/ ?>