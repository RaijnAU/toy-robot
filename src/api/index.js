export const isPositionValid = ({x, y, direction}) => {
    const validLocations = [0, 1, 2, 3, 4];
    const validDirections = ['north', 'south', 'east', 'west'];
    return (
        validLocations.includes(x) &&
        validLocations.includes(y) &&
        validDirections.includes(direction)
    );
};

export const place = (x, y, direction) =>
    isPositionValid({x, y, direction})
        ? {
              x,
              y,
              direction,
          }
        : null;

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

export const report = currentPosition => {
    if (!currentPosition) {
        return 'Not on board';
    }
    const {x, y, direction} = currentPosition;
    return `${x},${y},${direction.toUpperCase()}`;
};
