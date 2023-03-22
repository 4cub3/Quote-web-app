import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../UI/Container";
const MainHeader = () => {
  return (
    <>
      <Navigation>
        <Container>
          <Nav>
            <article>
              <h1>Great Quotes</h1>
            </article>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/quotes">
                  All Quotes
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/new-quotes">
                  Add Quotes
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navigation>
    </>
  );
};
export default MainHeader;

const Navigation = styled.nav.attrs(({ className }) => ({
  className: className,
}))`
  background-color: #008080;
  padding: 2rem;
`;

const Nav = styled.div.attrs(({ className }) => ({
  className: className,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    list-style: none;
    display: flex;

    & li:not(:last-child) {
      margin-right: 1rem;
    }
  }
  & article {
    color: #fff;
    font-size: 2rem;
  }
  & a {
    color: #88dfdf;
  }
  & a.active {
    color: #fff;
  }
`;
