import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'informed';
import { connect } from 'react-redux';

import { setFilters, clearFilters } from '../../actions/filters';

class Filters extends Component {
  render() {
    const {filters, setFilters, clearFilters} = this.props;  // eslint-disable-line
    return (
      <Form id="filters" onSubmit={formState => setFilters(formState)}>
        Name:
        <Text field="name" id="name" initialValue={filters.name} data-testid="input-name"/>
        City:
        <Text field="city" id="city" initialValue={filters.city} data-testid="input-city"/>
        <button type="submit" data-testid="submit-button">Submit</button>
        <button type="button" onClick={clearFilters} data-testid="clear-button">Clear</button>
      </Form>);
  }
}

Filters.defaultProps = {
  filters: null,
  setFilters: null,
  clearFilters: null,
};

Filters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
  clearFilters: PropTypes.func,
};

export default connect(({ filters }) => ({ filters }), { setFilters, clearFilters })(Filters);
