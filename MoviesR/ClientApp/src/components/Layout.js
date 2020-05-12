import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export function Layout(props) {

  return (
    <div>
      <NavMenu appState={props.appState} />
      <Container>
        {props.children}
      </Container>
    </div>
  );
}
