<?php

namespace backend\controllers;

use Yii;
use yii\web\Controller;
use common\models\User;


class IndexController extends Controller {

	public function actionIndex(){
		$d = [
			'user' => []
		];
		echo json_encode($d);
	}


	public function actionLogin(){
		
	}

}