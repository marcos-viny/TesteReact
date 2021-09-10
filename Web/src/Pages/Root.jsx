import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PagesPromotionSearch from './Promotions-1/Search/search.jsx';
import PromotionPagesForm from './Promotions-1/Form/form.jsx';

const Root = () => {
    return ( 
        <>

        <Router>
            <Switch>
                <Route path="/" exact component={PagesPromotionSearch} />
                <Route path="/create" component={PromotionPagesForm} />
                <Route path="/edit/:id" component={PromotionPagesForm} />
            </Switch>
        </Router>

        </>
     );
}
 
export default Root;