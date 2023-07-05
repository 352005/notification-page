import React from 'react';
import styled, { css } from 'styled-components';

const StyledComponent = styled.span`
  ${props =>
    props.textRead &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 0.4em;
        height: 0.4em;
        background: red;
        border-radius: 50%;
        margin: 0.6em 0 0 0.3em;
      }
    `}
`;

const Notification = (props) => {
  return (
    <>
      <div className={`notification ${props.divClass}`}>
        <img src={props.src} alt='profile' />
        <div>
          <p>
            <span className='name'>
              <b>{props.name}</b>
            </span>{' '}
            <StyledComponent textRead={props.textRead}>{props.text}{' '}
              <b className='boldText'>{props.bold}</b>
            </StyledComponent>
            <br />
            <span className='time'>{props.time}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
