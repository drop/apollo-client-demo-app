import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import {TestComponentOne} from "./components/testComponentOne";


const client = new ApolloClient({});

const App = <ApolloProvider client={client}> 
                <TestComponentOne />
            </ApolloProvider>;

ReactDOM.render(App, document.getElementById('root'));
