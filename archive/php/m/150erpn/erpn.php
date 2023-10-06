class Solution {
    /**
     * @param String[] $tokens
     * @return Integer
     */
    function evalRPN($tokens) {
        $stack = [];
        
        foreach ($tokens as $token) {
            if ($this->isOperator($token)) {
                $operand2 = array_pop($stack);
                $operand1 = array_pop($stack);
                $result = $this->performOperation($operand1, $operand2, $token);
                array_push($stack, $result);
            } else {
                array_push($stack, intval($token));
            }
        }
        
        return $stack[0];
    }
    
    private function isOperator($token) {
        return $token === '+' || $token === '-' || $token === '*' || $token === '/';
    }
    
    private function performOperation($operand1, $operand2, $operator) {
        switch ($operator) {
            case '+':
                return $operand1 + $operand2;
            case '-':
                return $operand1 - $operand2;
            case '*':
                return $operand1 * $operand2;
            case '/':
                // Division truncates towards zero in PHP
                return intval($operand1 / $operand2);
        }
    }
}