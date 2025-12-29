@extends('layouts.main')

@section('header-title')
    Cторінка контакти
@endsection

@section('content')
    @include('includes.header')

    <div class="main-container">
        <div class="main-block">
            <h1>Contact page</h1>
            <form action="/contact" method="POST">
                <label for="name">Ім'я</label>
                <input type="text" placeholder="Введіть ім'я" name="name" id="name">

                <label for="email">Email</label>
                <input type="email" placeholder="Введіть вашу пошту" name="email" id="email">

                <label for="subject">Тема повідомлення</label>
                <input type="text" placeholder="Введіть вашу пошту" name="subject" id="subject">
            </form>
        </div>
    </div>

    <div class="about">
        <div class="about-container container">
            <div class="about-content">
                <h2 class="about-title">Про компанію</h2>

                <p class="about-text">
                    Ми — команда сучасних веб-розробників, що спеціалізується на створенні швидких, адаптивних
                    та стильних сайтів. Наш пріоритет — якість, прозора комунікація та довготривалі результати.
                    Ми працюємо як з малим бізнесом, так і з масштабними проєктами, допомагаючи клієнтам
                    створювати сильну та ефективну онлайн-присутність.
                </p>

                <div class="about-highlight">
                    <h3>Порада дня для IT:</h3>
                    <p>«Код, який легко читати — цінніший за код, який складно зламати».</p>
                </div>
            </div>

            <div class="about-image">
                <img src="/about.svg" alt="About company" />
            </div>
        </div>
    </div>
@endsection
