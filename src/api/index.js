/*
isPositionValid determines if the location parameters inputted are a valid location on the table. This is done by having an array of the available squares in the grid and another with the permissible directions. This then returns a boolean value of true or false depending if the input position is valid.
*/
export const isPositionValid = ({x, y, direction}) => {
    const validLocations = [0, 1, 2, 3, 4];
    const validDirections = ['north', 'south', 'east', 'west'];
    return (
        validLocations.includes(x) &&
        validLocations.includes(y) &&
        validDirections.includes(direction)
    );
};

/*
Place returns the entered inputted direction after passing it to isPositionValid to determine it's allowed. If the inputting place is not a valid position, the function simply returns null.
*/
export const place = (x, y, direction) =>
    isPositionValid({x, y, direction})
        ? {
              x,
              y,
              direction,
          }
        : null;

/*
Moves the robot forward 1 position in the direction it's facing. If the robot is not on the table, then the function returns null (this will occur for every function below). If the robot is at the edge of the table and therefore unable to move, the function will return the current position.
*/
export const move = currentPosition => {
    if (!currentPosition) {
        return null;
    }
    const {x, y, direction} = currentPosition;
    const nextX =
        direction === 'east' ? x + 1 : direction === 'west' ? x - 1 : x;
    const nextY =
        direction === 'north' ? y + 1 : direction === 'south' ? y - 1 : y;
    return place(nextX, nextY, direction) || currentPosition;
};

/*
Moves the robot backward 1 position in the direction it's facing. If the robot is not on the table, then the function returns null (this will occur for every function below). If the robot is at the edge of the table and therefore unable to move, the function will return the current position.
*/
export const reverse = currentPosition => {
    if (!currentPosition) {
        return null;
    }
    const {x, y, direction} = currentPosition;
    const nextX =
        direction === 'east' ? x - 1 : direction === 'west' ? x + 1 : x;
    const nextY =
        direction === 'north' ? y - 1 : direction === 'south' ? y + 1 : y;
    return place(nextX, nextY, direction) || currentPosition;
};

/*
For each of the left/right functions below, the robot's direction is changed accordingly.
*/
export const left = currentPosition => {
    if (!currentPosition) {
        return null;
    }
    const directions = {
        north: 'west',
        west: 'south',
        south: 'east',
        east: 'north',
    };
    const {x, y, direction} = currentPosition;
    return {x, y, direction: directions[direction]};
};

export const right = currentPosition => {
    if (!currentPosition) {
        return null;
    }
    const directions = {
        north: 'east',
        east: 'south',
        south: 'west',
        west: 'north',
    };
    const {x, y, direction} = currentPosition;
    return {x, y, direction: directions[direction]};
};

/*
Outputs the currentPosition as a formatted string.
*/
export const report = currentPosition => {
    if (!currentPosition) {
        return 'Not on board';
    }
    const {x, y, direction} = currentPosition;
    return `${x},${y},${direction.toUpperCase()}`;
};

const COMMANDS = {
    PLACE: place,
    MOVE: move,
    LEFT: left,
    RIGHT: right,
    REPORT: report,
};

export const execute = commands =>
    commands.reduce((acc, command) => {
        if (command.includes('PLACE')) {
            const [x, y, direction] = command
                .split(' ')
                .pop()
                .split(',');
            return place(
                parseInt(x, 10),
                parseInt(y, 10),
                direction.toLowerCase()
            );
        } else if (COMMANDS[command]) {
            return COMMANDS[command](acc);
        }
        return acc;
    }, 'No valid commands');
