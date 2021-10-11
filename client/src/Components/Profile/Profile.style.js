import styled from "styled-components";

export const Body = styled.div`
  margin: 0 5%;
`;
// Instagram layout
export const Wrapper = styled.div`
  .Grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }

  .Post-style {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    width: 3rem;
    border: none;
    outline: none;
    border-radius: 20px;
    background-color: white;
  }
  .edit-icon {
    text-align: right;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 30px;

  .Profile-Image::-webkit-file-upload-button {
    visibility: hidden;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 2fr);
    justify-items: center;
    grid-gap: 20px;
  }
`;

//Image style
export const Image = styled.div`
  color: transparent;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;

  input {
    display: none;
  }

  img {
    position: absolute;
    object-fit: cover;
    width: 165px;
    height: 165px;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    border-radius: 100px;
    z-index: 0;
  }

  .-label {
    cursor: pointer;
    height: 165px;
    width: 165px;
  }

  &:hover {
    .-label {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: rgb(250, 250, 250);
      transition: background-color 0.2s ease-in-out;
      border-radius: 100px;
      margin-bottom: 0;
    }
  }

  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
`;

//Info style
export const Info = styled.div`
  .info-split {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 10px;
  }
  @media screen and (max-width: 540px) {
    .info-split {
      grid-template-columns: 2fr 0.5fr;
      grid-gap: 40px;
    }
  }

  .line {
    display: none;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 20px;
  color: #a7a6ba;

  button:hover {
    color: black;
  }

  .hover-underline-animation {
    position: relative;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 235%;
    transform: scaleX(0);
    height: 10px;
    bottom: -16px;
    left: -25px;
    background-color: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
