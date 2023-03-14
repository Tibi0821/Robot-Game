function greedyRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let min_route = [];

        for (let parcel of parcels) {
            if (parcel.place != place) {
                route = findRoute(roadGraph, place, parcel.place);
            } else {
                route = findRoute(roadGraph, place, parcel.address);
            }

            if (min_route.length == 0 || route.length < min_route.length) {
                min_route = route;
            }
        }

        route = min_route;
    }

    return { direction: route[0], memory: route.slice(1) };
}