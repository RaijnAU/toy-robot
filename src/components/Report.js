import PropTypes from 'prop-types';
import React from 'react';
import {report} from '../api/index';

const Report = ({position}) => (
    <div className="robot-report">{report(position)}</div>
);

Report.propTypes = {
    position: PropTypes.string.isRequired,
};

export default Report;
