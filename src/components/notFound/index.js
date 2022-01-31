import React from 'react';

import { Container } from './styles';

function NotFound() {
  return (
    <Container>
      <h2>Nenhum filme encontrado :(</h2>
      <h4>Tente de novo mais tarde!</h4>
    </Container>
  )
}

export default NotFound;