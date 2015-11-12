<?php

namespace backend\controllers;

use Yii;
use backend\base\AdminController;
use common\models\User;


class IndexController extends AdminController {

	public function actionIndex(){
		$d = [
			'isLogin' => true,
			'name' => '陈战'
		];
		echo json_encode($d);
	}


	public function actionLogin(){
		
	}

}