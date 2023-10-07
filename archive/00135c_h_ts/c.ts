function candy(ratings: number[]): number {
    const candies: number[] = new Array(ratings.length).fill(1);

    // Traverse from left to right
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Traverse from right to left
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    return candies.reduce((sum, candy) => sum + candy, 0);
}
