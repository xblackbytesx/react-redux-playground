import React from 'react';
import FilterLink from '../../containers/filterLink';
import { VisibilityFilters } from '../../actions';
import './filter.css';

const Filter = () => (
  <div className="filter">
    <strong>TOON:</strong>
    {" "}
    <FilterLink filter={ VisibilityFilters.SHOW_ALL }>
      ALLES
    </FilterLink>
    {" | "}
    <FilterLink filter={ VisibilityFilters.SHOW_ACTIVE }>
      ACTIEF
    </FilterLink>
  </div>
)

export default Filter;
