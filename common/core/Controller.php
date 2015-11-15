<?php

namespace common\core;

use Yii;
use common\models\User;


abstract class Controller extends \yii\web\Controller {

	protected $request;

	public function init(){
		parent::init();
		$this->request = Yii::$app->request;
	}

	protected function get($paramsName = null){
		return $this->request->get(null);
	}


	protected function post($paramsName = null){
			return $this->request->post($paramsName);
		}

}