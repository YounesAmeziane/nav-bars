<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Home</title>
</head>
<script>
    window.addEventListener('scroll', function(){
        let nav = document.querySelector('nav');
        nav.classList.toggle('scrolling-active', window.scrollY > 0)

    })

    window.addEventListener('scroll', function(){
        let nav = document.querySelector('nav');
        nav.classList.toggle('scrolling-non-active', window.scrollY < 100)

    })
</script>
<body>
    <nav>
        <input id="nav-toggle" type="checkbox">
        <div class="logo"><strong>whatch</strong></div>
        <ul class="links">
            <li><a href="">Home</a></li>
            <li><a href="products.html">products</a></li>
            <li><a href="">about us</a></li>
            <li><a href="">log in</a></li>
        </ul>
        <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
    </nav>
    <div class="banner-area" id="home"></div>
  </body>
  </html>
<style>
  *{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
body{
    background-color: rgb(238, 238, 238);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.scrolling-active{
    background-color: #000;
    transition: background-color .8s linear;
}
.scrolling-non-active{
    background-color: #00000056;
    transition: background-color .8s linear;
}
.container img {
	display: block;
	width: 100%;
}
nav {
	position: fixed;
	z-index: 10;
	left: 0;
	right: 0;
	top: 0;
	font-family: 'Montserrat', sans-serif;
	padding: 0 5%;
	height: 70px;
	background-color: #00000056;
}
nav .logo {
	float: left;
	width: 40%;
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 24px;
	color: #fff;
    text-transform: uppercase;
}
nav .links {
	float: right;
	padding: 0;
	margin: 0;
	width: 40%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
nav .links li {
	list-style: none;
}
nav .links a {
	display: block;
	font-size: 16px;
	color: #fff;
	text-decoration: none;
    text-transform: uppercase;
}
nav .links a:hover{
    color: #ccc;
    transition: 0.3s;
}
#nav-toggle {
	position: absolute;
	top: -100px;
}
nav .icon-burger {
	display: none;
	position: absolute;
	right: 5%;
	top: 50%;
	transform: translateY(-50%);
}
nav .icon-burger .line {
	width: 30px;
	height: 5px;
	background-color: #fff;
	margin: 5px;
	border-radius: 3px;
	transition: all .3s ease-in-out;
}
.banner-area{
    position: relative;
    background-image: url(8-.jpg);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-bottom: 50px;
}
@media screen and (max-width: 768px){
	nav .logo {
		float: none;
		width: auto;
		justify-content: center;
	}
	nav .links {
		float: none;
		position: fixed;
		z-index: 9;
		left: 0;
		right: 0;
		top: 100px;
		bottom: 100%;
		width: auto;
		height: auto;
		flex-direction: column;
		justify-content: space-evenly;
		background-color: rgba(0,0,0,.8);
		overflow: hidden;
		box-sizing: border-box;
		transition: all .5s ease-in-out;
	}
	nav .links a {
		font-size: 20px;
	}
	nav :checked ~ .links {
		bottom: 0;
	}
	nav .icon-burger {
		display: block;
	}
	nav :checked ~ .icon-burger .line:nth-child(1) {
		transform: translateY(10px) rotate(225deg);
	}
	nav :checked ~ .icon-burger .line:nth-child(3) {
		transform: translateY(-10px) rotate(-225deg);
	}
	nav :checked ~ .icon-burger .line:nth-child(2) {
		opacity: 0;
	}
}
</style>
