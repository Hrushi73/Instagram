import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  box-shadow: 0px 5px 0px 0px #ff007b;
  -webkit-box-shadow: 0px 5px 0px 0px #ff007b;
  -moz-box-shadow: 0px 5px 0px 0px #ff007b;
  align-items: center;

  h2 {
    grid-column: 2/3;
  }
`;

export const NavItems = styled.div`
  cursor: pointer;
  grid-column: 4/5;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    margin: 10px 0;
    align-items: center;
  }

  li {
    list-style: none;
    font-size: var(--fontBig);
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-weight: bolder;
  }

  /* media query */
  @media screen and (min-width: 540px) {
    .Home-icon,
    .new-friend-icon,
    .profile-icon,
    .search-icon {
      display: none;
    }
    .post-icon {
      display: none;
    }
  }

  @media screen and (max-width: 540px) {
    .Home,
    .post,
    .new-friend,
    .profile,
    .search {
      display: none;
    }

    ul {
      grid-template-columns: repeat(auto, 1fr);
      grid-column-gap: 12px;
    }

    .post-icon {
      position: fixed;
      z-index: 1;
      bottom: 30px;
      right: 30px;
      background-color: #03bfff;
      border-radius: 50%;
      padding: 10px 15px;
    }
  }
`;
