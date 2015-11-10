<?php
/**
 * 用户AR
 */
namespace common\models;

use Yii;
use yii\db\ActiveRecord;

class User extends ActiveRecord {

	public static function tableName(){
		return Yii::$app->db->tablePrefix . 'user';
	}
}