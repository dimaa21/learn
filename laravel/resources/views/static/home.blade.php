@extends('layouts.main')

@section('header-title')
    Головна сторінка
@endsection

@section('content')
@include('includes.header')

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

        @include('includes.aside')
    </div>
@endsection
