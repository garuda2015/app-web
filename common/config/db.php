<?php
/**
 * 数据库配置
 */
return [
	'class' => 'yii\db\Connection',
	'dsn' => 'mysql:host=localhost;dbname=app',
	'username' => 'root',
	'password' => 'root123',
	'charset' => 'utf8',
	'tablePrefix' => 'app_',
	'enableSchemaCache' => true,
	'on afterOpen' => function($event){

	} 
];