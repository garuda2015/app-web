<?php

namespace backend\base;

use Yii;
use yii\web\Controller;
use common\models\User;


abstract class AdminController extends Controller {

	protected $user;

	/**
	 * 初始化参数
	 * @see \yii\base\Object::init()
	 */
	public function init() {
		parent::init();
		$session = Yii::$app->session;
		$session->open();
		$this->user = $session->get('user');
		if(!$this->user){
			//未登陆
			echo json_encode(['signin' => false, 'username' => '']);
			die();
		} else {

		}
	}

}