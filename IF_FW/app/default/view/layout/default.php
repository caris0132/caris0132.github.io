<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="public/css/style.css" type="text/css" media="screen" />
        <link href='http://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>
        <title>If Project</title>
    </head>

    <body>
        <div class="header">
            <div class="wrapper">
                <div class="main">
                    <div class="header-left">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Rule</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div class="header-right">
                        <a href="">Cart</a><span>(0)</span>
                    </div>
                </div><!-- #END .main -->
            </div><!-- #END .wrapper -->
        </div><!-- #END .header -->

        <div class="banner">
            <h1>Demo FrameWork</h1>
        </div><!-- #END .banner -->

        <div class="nav">
            <div class="wrapper">
                <div class="main">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fashion</a></li>
                        <li><a href="">Cosmetics</a></li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                </div>
            </div>
        </div><!-- #END .nav -->
        <div class="slider">
            <img src="public/images/banner.jpg" />
        </div><!-- #END .slider -->
        <div class="content">
            <div class="wrapper">
                <div class="main">
                    <div class="left">
                        <?=$this->smarty->display($this->placeholder . '.tpl')?>
                    </div><!-- #END left -->
                    <div class="right">
                        <h2>Last News</h2>
                    </div><!-- #END right -->
                </div>
            </div>
        </div><!-- #END content -->
        <div class="footer">
            <div class="wrapper">
                <div class="main">
                    <span>&copy; Copyright </span>
                </div>
            </div>
        </div>
    </body>
</html>