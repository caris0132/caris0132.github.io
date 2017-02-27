<?php
/**
 *
 */
class Ifdb_Validator_Require extends Ifdb_Validator_Base
{
    public function validate()
    {
        if (!isset($this->value) || $this->value == null || trim($this->value) == '') {
            $this->setError('Field "' . $this->config['label'] . '" is required .');
        }
    }
}
