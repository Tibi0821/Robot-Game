function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let totalIterations = 100;
    let robot1Results = [];
    let robot2Results = [];
    for (let i = 0; i < totalIterations; i++) {
        let state = VillageState.random();
        robot1Results.push(runRobot(state, robot1, memory1));
        robot2Results.push(runRobot(state, robot2, memory2));
    }
    let r1a = Math.floor(robot1Results.reduce((a, c) => a + c, 0) / robot1Results.length + 0.5);
    let r2a = Math.floor(robot2Results.reduce((a, c) => a + c, 0) / robot2Results.length + 0.5);
    console.log(`Route Robot completed in an avarage of ${r1a} turns.`);
    console.log(`Goal Oriented Robot completed in an avarage of ${r2a} turns.`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);