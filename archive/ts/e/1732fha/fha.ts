function largestAltitude(gain) {
    let currentAltitude = 0;
    let highestAltitude = 0;
  
    for (let i = 0; i < gain.length; i++) {
      currentAltitude += gain[i];
      highestAltitude = Math.max(highestAltitude, currentAltitude);
    }
  
    return highestAltitude;
  }