function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        if (flowerbed[i] === 0 && 
            (i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1; // plant a flower
            n--; // decrement the number of remaining flowers to plant
        }
    }
    return n === 0; // return true if all flowers have been planted
}