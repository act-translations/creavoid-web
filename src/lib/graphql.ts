import { GraphQLClient } from "graphql-request";
import { WORDPRESS_API_URL } from "./constants";

export const client = new GraphQLClient(WORDPRESS_API_URL);

export async function fetchAPI(query: string, variables: Record<string, any> = {}) {
    try {
        return await client.request(query, variables);
    } catch (error) {
        console.error("GraphQL Error:", error);
        throw new Error("Failed to fetch API");
    }
}
