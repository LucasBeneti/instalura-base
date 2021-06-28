import React from 'react';
import PropTypes from 'prop-types';

import { CarrousselWrapper } from './CarroussellWrapper';
import Text from '../../../foundation/Text';

// passo uma função pro carrossel pra me falar qual filtro foi clicado
const FilterCarroussel = ({ imgUrl }) => {
  const filterList = ['1977', 'amaro', 'charmes', 'brannan', 'lofi', 'moon', 'ludwig'];
  return (
    <>
      <CarrousselWrapper>
        {filterList ? (
          filterList.map((filter) => (
            <CarrousselWrapper.Filters>
              <figure className={`filter-${filter}`}>
                <img src={imgUrl} alt="default image" />
              </figure>
              <Text>{filter}</Text>
            </CarrousselWrapper.Filters>
          ))
        ) : (
          <div>Carregando filtros, aguarde por favor...</div>
        )}
      </CarrousselWrapper>
    </>
  );
};

export default FilterCarroussel;

FilterCarroussel.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
