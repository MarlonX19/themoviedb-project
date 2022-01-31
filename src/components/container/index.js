import React from 'react';

import { ContainerComponent } from './styles';

function Container({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <ContainerComponent>
        {children}
      </ContainerComponent>
    </div>
  )
}

export default Container;