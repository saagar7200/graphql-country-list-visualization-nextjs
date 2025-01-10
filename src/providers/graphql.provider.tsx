// here goes graphql provider
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  });


  const GraphQLProvider = ({ children }:{children:React.ReactNode} ) => (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );

  export default GraphQLProvider