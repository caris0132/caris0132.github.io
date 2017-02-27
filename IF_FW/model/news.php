<?php
class News extends Ifdb_Model
{

    public function __construct($scenario = null)
    {
        $this->scenario = $scenario;
        parent::__construct('news');
    }
    public function rules()
    {
        return array(
            array('title, alias, seo_keywords, seo_description, summary, description', 'required'),
            array('cate_id, status', 'number', 'integerOnly' => true),
            array('image', 'file', 'ext' => array('jpg', 'png', 'gif'), 'minWidth' => 500),
            array('image', 'file', 'ext' => array('jpg', 'png', 'gif'), 'minWidth' => 500, 'allowEmpty' => true, 'on' => 'update'),
        );
    }

}
