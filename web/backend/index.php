<?php
/**
 * 前端入口文件
 */
if(empty($_GET)) {
	header('Location: index.html');
	die();
}
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');
//加载Yii2
require_once __DIR__ . '/../../common/vendor/Yii2/Yii.php';
//配置文件加载
$config = require(__DIR__ . '/../../backend/config/web.php');
//运行
(new yii\web\Application($config))->run();
