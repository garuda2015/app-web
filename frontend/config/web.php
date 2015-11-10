<?php

require_once __DIR__ . '/../../common/config/defined.php';

return [
	'id' => 'app-frontend',
	'name' => 'app',
	'basePath' => Yii::getAlias('@frontend'),
	'controllerNamespace' => 'frontend\controllers',
	'language' => 'zh-cn'
];
