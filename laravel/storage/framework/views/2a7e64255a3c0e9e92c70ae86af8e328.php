<?php $__env->startSection('header-title'); ?>
    Головна сторінка
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<?php echo $__env->make('includes.header', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

    <div class="hero">
        <div class="hero-block container">
            <img class="hero-block-img" src="/code.jpeg" alt="">

            <div class="hero-content">
                <h1 class="hero-title">Ласкаво просимо в itProger App</h1>
                <p class="hero-subtitle">Навчіться програмувати разом з нами</p>
                <button class="hero-btn">Почати</button>
            </div>
        </div>
    </div>

    <div class="layout container">
        <div class="main">
            <div class="main-block">
                <h2>Home page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam reprehenderit earum eligendi
                    velit cum deserunt! Quam ad recusandae aliquam! Rem, nobis repellendus incidunt corrupti voluptatibus
                    velit exercitationем distinctio aliquid!</p>
            </div>
        </div>

        <?php echo $__env->make('includes.aside', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.main', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/Dima/Documents/GitHub/learn/laravel/resources/views/static/home.blade.php ENDPATH**/ ?>