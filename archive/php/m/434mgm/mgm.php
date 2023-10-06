class Solution {
    /**
     * @param String $startGene
     * @param String $endGene
     * @param String[] $bank
     * @return Integer
     */
    function minMutation($startGene, $endGene, $bank) {
        // Convert the bank array to a set for faster lookup
        $geneBank = array_flip($bank);

        // Check if the end gene is not in the bank
        if (!isset($geneBank[$endGene])) {
            return -1;
        }

        // Possible directions for gene mutation
        $directions = array('A', 'C', 'G', 'T');

        // Initialize the BFS queue with the start gene and mutation count
        $queue = array(array($startGene, 0));

        // Mark the start gene as visited
        $visited = array($startGene => true);

        while (!empty($queue)) {
            [$gene, $mutations] = array_shift($queue);

            // Check if we have reached the end gene
            if ($gene === $endGene) {
                return $mutations;
            }

            // Try mutating each character in the gene
            for ($i = 0; $i < 8; $i++) {
                // Try each possible direction
                foreach ($directions as $direction) {
                    if ($gene[$i] !== $direction) {
                        $mutatedGene = substr_replace($gene, $direction, $i, 1);

                        // Check if the mutated gene is in the bank and not visited yet
                        if (isset($geneBank[$mutatedGene]) && !isset($visited[$mutatedGene])) {
                            // Add the mutated gene to the queue and mark it as visited
                            $queue[] = array($mutatedGene, $mutations + 1);
                            $visited[$mutatedGene] = true;
                        }
                    }
                }
            }
        }

        // No valid mutation path found
        return -1;
    }
}
