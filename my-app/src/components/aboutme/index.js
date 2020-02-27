import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import ArticleContext from "../../utils/ArticleContext";
import API from "../../utils/API";

import "./style.css";

function Aboutme() {
  return (
      
    <div className="main">
         <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/aboutme" component={Navbar} />
          <Route exact path="/contactpage" component={Footer} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
      <span>Wikipedia Searcher</span>
    </div>
  );
}

export default Aboutme;
