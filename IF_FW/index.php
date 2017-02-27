<?php

require_once dirname(__FILE__) . '/lib/ifdb/ifdb.php';

Ifdb::app(require_once 'config/application.php')->run();
