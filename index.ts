// index.ts
import { GraphQLClient, gql } from 'graphql-request';

// Define the GraphQL endpoint
// const endpoint = 'https://api.spacex.land/graphql/';
const endpoint = 'https://countries.trevorblades.com/graphql';
// const endpoint = 'https://rickandmortyapi.com/graphql';

// Create a new GraphQL client instance
const client = new GraphQLClient(endpoint);

// Define the query to fetch the latest SpaceX launch
const query = gql`
    query PiotrsQuery {
        countries {
            code
            name
            emoji
        }
    }
`;

// const query = gql`
//     query {
//         characters(page: 2, filter: { name: "rick" }) {
//             info {
//             count
//             }
//             results {
//             name
//             }
//         }
//     }
// `;

// Function to fetch data from the API
async function fetchLaunchData() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Run the function
fetchLaunchData();
