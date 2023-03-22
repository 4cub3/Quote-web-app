import React from "react";
import { useParams, Route, Link,useRouteMatch } from "react-router-dom";
import Container from "../components/UI/Container";
import Comments from "../components/comments/Comments";
import styled from "styled-components";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
function QuoteDetails({ quotes }) {
  const params = useParams();
  const match = useRouteMatch();
  const quoteDetail = quotes.find((qte) => qte.id === params.quotesId);
  if (!quoteDetail) {
    return <Paragraph>No Qoute Found!</Paragraph>;
  }
  return (
    <>
      <Container>
        <HighlightedQuote text={quoteDetail.text} author={quoteDetail.author} />
        <Route path={match.path} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comments`}
          >
            {" "}
            View comments
          </Link>
        </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Container>
    </>
  );
}

export default QuoteDetails;

const Paragraph = styled.p.attrs((className, size) => ({
  className,
}))`
  margin: 2rem 0;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;
