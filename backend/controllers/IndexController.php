<?php

namespace backend\controllers;

use Yii;
use backend\base\AdminController;
use common\models\User;


class IndexController extends AdminController {

	public function actionIndex(){
		$auth = ['signin' => true, 'username' => $this->user['username']];
		echo json_encode($auth);die();
	}

	public function actionSignin(){
		$username = $this->post('username');
		$pwd = $this->post('pwd');
		$session = Yii::$app->session;
		$session->open();
		$user = ['signin' => true, 'username' => 'test'];
		$session->set('user', $user);
		echo json_encode($user);
	}
}