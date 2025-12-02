@extends('layouts.main')

@section('header-title')
Головна сторінка
@endsection

@section('content')
<header>
    <div class="header container">
        <div class="header-name">
            itProger App
        </div>

        <div class="header-menu">
            <a href="">Головна</a>
            <a href="">Про нас</a>
            <a href="">Контакти</a>
        </div>
    </div>
</header>

<div class="hero">
    <div class="hero-block container">
        <img class="hero-block-img" src="/code.jpeg" alt="">
    </div>
</div>

<div class="wrapper">
    <div class="main">
        <div class="main-block container">
            <h2>Home page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam reprehenderit earum eligendi velit cum deserunt! Quam ad recusandae aliquam! Rem, nobis repellendus incidunt corrupti voluptatibus velit exercitationem distinctio aliquid!</p>
        </div>
    </div>
</div>

@include('includes.aside')
@endsection
