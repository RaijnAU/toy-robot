import PropTypes from 'prop-types';
import React from 'react';
import {report} from '../api/index';

const Report = ({robot1, robot2}) => (
    <div className="robot-report">
        {report(robot1)}
        <br />
        {report(robot2)}
    </div>
);

Report.propTypes = {
    robot1: PropTypes.object,
    robot2: PropTypes.object,
};

export default Report;
