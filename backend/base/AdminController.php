<?php

namespace backend\base;

use Yii;
use common\core\Controller;


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
			if(Yii::$app->requestedRoute != 'index/signin'){
				//非登陆界面
				echo json_encode(['signin' => false, 'username' => '']);
				die();
			}
		}
	}
}