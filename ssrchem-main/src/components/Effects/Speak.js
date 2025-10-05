import React from 'react';
import styled from 'styled-components';

const Speak = () => {
  return (
    <StyledWrapper>
      <a className="schedule-button">
        Schedule a Call
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* CSS code */
  .schedule-button {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #c49ff5;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    border-radius: 20px;
   /* Rounded corners */
    transition: background-color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
   /* Smooth transitions */
    font-family: 'Poppins', sans-serif;
   /* Change font to Poppins */
  }

  .schedule-button:hover {
    background-color: #6d21f2;
    transform: translateX(-5px);
   /* Move button to the left */
  }

  .schedule-button .arrow {
    display: none;
    width: 20px;
    height: 20px;
    fill: #ffffff;
    opacity: 0;
   /* Initial opacity */
    transform: translateX(-20px) rotate(-45deg);
   /* Initial position */
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
   /* Smooth transitions */
  }

  .schedule-button:hover .arrow {
    display: inline-block;
    opacity: 1;
   /* Fade in on hover */
    animation: slide-in 0.4s forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-50px) rotate(-45deg);
      opacity: 0.1;
   /* Slightly visible */
    }

    to {
      transform: translateX(0) rotate(-45deg);
      opacity: 1;
   /* Fully visible */
    }
  }`;

export default Speak;
