import React from 'react';
import PropTypes from 'prop-types';

import { Input, Span } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Span>Find contacts by name</Span>
      <Input onChange={onChange} value={value} />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
