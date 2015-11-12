<?php

require_once __DIR__ . '/../../common/config/defined.php';

$db = require_once Yii::getAlias('@common') . '/config/db.php';
return [
	'id' => 'app-backend',
	'name' => 'app-backend',
	'basePath' => Yii::getAlias('@backend'),
	'controllerNamespace' => 'backend\controllers',
	'defaultRoute' => 'index',
	'language' => 'zh-cn',
	'components' => [
		'db' => $db,
		'request' => [
			'cookieValidationKey' => '',
			'enableCookieValidation' => false,
			'enableCsrfValidation' => false
		],
		'session' => [
			'class' => 'yii\web\DbSession',
			'db' => 'db',
			'sessionTable' => $db['tablePrefix'] . 'session',
			'timeout' => 3600
		],
	]
];
