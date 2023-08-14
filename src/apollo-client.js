import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://humane-hound-46.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' : 'uwbYTP64AhHYFJyqFyd26iDUIO1DEvZfdXeIgGf4bxjIK4TJejEopon4Upn7BogU'
    }
})

export default client