<?php
/**
 * 程序入口设置
 */
defined('APP_PATH') or define('APP_PATH', __DIR__ . '/../../');
//前台
Yii::setAlias('@frontend', APP_PATH . 'frontend');
//公共
Yii::setAlias('@common', APP_PATH . 'common');
//后台
Yii::setAlias('@backend', APP_PATH . 'backend');
//入口
Yii::setAlias('@web', APP_PATH . 'web');


