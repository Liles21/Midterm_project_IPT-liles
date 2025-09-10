<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Liles Site</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
    @vite(['resources/sass/liles.scss', 'resources/js/liles.js'])
</head>
<body class="light-mode">

    <!-- Navigation -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">Liles</div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button id="toggle-dark">🌓</button></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <span></span><span></span><span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero" data-aos="fade-up">
        <h1>Welcome to Liles</h1>
        <p>Your modern Laravel + Vite landing page</p>
        <a href="#about" class="btn">Explore More</a>
    </section>

    <!-- About Section -->
    <section id="about" class="about" data-aos="fade-up" data-aos-delay="100">
        <div class="container">
            <h2>About Us</h2>
            <p>We craft elegant web apps with speed and quality using Laravel and modern front-end stacks.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact" data-aos="fade-up" data-aos-delay="200">
        <div class="container">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Scroll Animations -->
    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script>AOS.init();</script>
</body>
</html>
