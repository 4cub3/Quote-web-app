import React from "react";
import QuoteList from '../components/quotes/QuoteList';
import useHttp from "../hooks/use-http";
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { useEffect } from "react";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const Quotes = ({quotes}) => {
  const {sendRequest, status, data:loadedQuote,error} =useHttp(getAllQuotes, true)

  quotes(loadedQuote)
  
  useEffect(()=>{
    sendRequest()
  },[sendRequest])
  if(status === 'pending'){
    return (
      <div className="centered">
        <LoadingSpinner/>
      </div>
    )
  }
  if(error){
    return(
      <p className="centered focus">{error}</p>
    )
  }
  if(status === 'completed' && (!loadedQuote || loadedQuote.length === 0)){
    return <NoQuotesFound  quoteId ={loadedQuote.id}/>
  }
  return (
    <section>
      <QuoteList quotes={loadedQuote} />
    </section>
  );
};
export default Quotes;
