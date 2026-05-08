<?php $__env->startSection('header-title'); ?>
    Cторінка про нас
<?php $__env->stopSection(); ?>

<?php echo $__env->make('includes.header', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

<div class="about-company container">
    <div class="about-company__content">
        <h2 class="about-company__title">Про нашу компанію</h2>
        <p class="about-company__text">
            Ми — команда професіоналів, яка створює сучасні, швидкі та зручні веб-рішення.
            Працюємо з бізнесами будь-якого масштабу, допомагаючи запускати продукти,
            автоматизувати процеси та масштабуватись у цифровому середовищі.
        </p>

        <div class="about-company__highlight">
            <p>
                Наш підхід: якість, прозорість, відповідальність і завжди
                відкритість до нових викликів та технологій.
            </p>
        </div>

        <button class="about-company__btn">Дізнатись більше</button>
    </div>

    <div class="about-company__image">
        <img src="/company.png" alt="Company photo">
    </div>
</div>

<?php echo $__env->make('layouts.main', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /Users/Dima/Documents/GitHub/learn/laravel/resources/views/static/about.blade.php ENDPATH**/ ?>