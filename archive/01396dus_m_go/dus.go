type Customer struct {
    checkInStation string
    checkInTime    int
    totalTravelTime int
}

type UndergroundSystem struct {
    checkIns     map[int]Customer
    travelTimes  map[string]map[string][]int
}

func Constructor() UndergroundSystem {
    return UndergroundSystem{
        checkIns:    make(map[int]Customer),
        travelTimes: make(map[string]map[string][]int),
    }
}

func (us *UndergroundSystem) CheckIn(id int, stationName string, t int) {
    us.checkIns[id] = Customer{checkInStation: stationName, checkInTime: t}
}

func (us *UndergroundSystem) CheckOut(id int, stationName string, t int) {
    customer := us.checkIns[id]
    delete(us.checkIns, id)

    startStation := customer.checkInStation
    travelTime := t - customer.checkInTime

    if _, ok := us.travelTimes[startStation]; !ok {
        us.travelTimes[startStation] = make(map[string][]int)
    }
    if _, ok := us.travelTimes[startStation][stationName]; !ok {
        us.travelTimes[startStation][stationName] = make([]int, 0)
    }
    us.travelTimes[startStation][stationName] = append(us.travelTimes[startStation][stationName], travelTime)
}

func (us *UndergroundSystem) GetAverageTime(startStation string, endStation string) float64 {
    travelTimes := us.travelTimes[startStation][endStation]
    totalTravelTime := 0
    for _, time := range travelTimes {
        totalTravelTime += time
    }
    return float64(totalTravelTime) / float64(len(travelTimes))
}
