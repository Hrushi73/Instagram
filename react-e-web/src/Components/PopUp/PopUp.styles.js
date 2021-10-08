import styled from "styled-components";

export const Wrapper = styled.div`
 font-family: Arial, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);

.close{
  position: fixed;
  /* top: 10px; */
  right: 20px;
  font-size: 5rem;
  color: #f1f1f1;
  font-size: 4;
  font-weight: bold;
  cursor: pointer;
};
`;

export const Content = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  height: 80%;
  padding: 2rem;
  background-color: white;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .postImg{
    object-fit: cover;
    align-self: center;
    padding: 10px;
  }
  .Info{
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    padding: 10px;
  }
  .Comment{
  }
`;