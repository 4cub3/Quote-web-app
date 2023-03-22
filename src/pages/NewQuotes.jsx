import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuote = (data) => {
    console.log(data);
    sendRequest(data);
  };
  return <QuoteForm isLoading={status === "pending"} onAddQuote={onAddQuote} />;
};
export default NewQuotes;
