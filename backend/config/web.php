<?php

require_once __DIR__ . '/../../common/config/defined.php';

return [
	'id' => 'app-backend',
	'name' => 'app-backend',
	'basePath' => Yii::getAlias('@backend'),
	'controllerNamespace' => 'backend\controllers',
	'defaultRoute' => 'index',
	'language' => 'zh-cn',
	'components' => [
		'db' => require_once Yii::getAlias('@common') . '/config/db.php',
		'request' => [
			'cookieValidationKey' => '',
			'enableCookieValidation' => false,
			'enableCsrfValidation' => false
		]
	]
];
