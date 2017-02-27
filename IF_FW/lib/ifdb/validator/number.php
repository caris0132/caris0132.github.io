<?php
/**
 *
 */
class Ifdb_Validator_Number extends Ifdb_Validator_String
{
    private $pattern = '/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/';
    private $integerPattern = '/^\s*[+-]?\d+\s*$/';
    public function validate()
    {
        parent::validate();
        $pattern = isset($this->config['pattern']) ? $this->config['pattern'] : $this->pattern;
        $itergerPattern = isset($this->config['integerPattern']) ? $this->config['integerPattern'] : $this->integerPattern;
        if (!is_numeric($this->value)) {
            $this->setError('Field "' . $this->config['label'] . '" must be a number');
            return;
        }
        if ($this->config['integerOnly']) {
            if (!preg_match(integerPattern, integerPattern)) {
                $this->setError('Field "' . $this->config['label'] . '" must be an integer.');
            }
        } else
        if (!preg_match($pattern, $this->value)) {
            $this->setError('Field "' . $this->config['label'] . '" must be a number.');
        }

    }
}
