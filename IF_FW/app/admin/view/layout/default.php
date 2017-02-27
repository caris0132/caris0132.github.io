
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
            <h1>Admin Pages</h1>
        </div><!-- #END .banner -->



        <div class="content">
            <div class="wrapper">
                <div class="main">
                    <div class="left">
                       <?php $this->smarty->display($this->placeholder . '.tpl');
echo IfdbBase::$baseUrl;
?>
                    </div><!-- #END left -->
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