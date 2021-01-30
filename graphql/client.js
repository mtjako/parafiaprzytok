import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
  useQuery,
} from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  // uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
  uri: "http://ednlkrm.cluster030.hosting.ovh.net/graphql",
});

export const client = new ApolloClient({
  cache,
  link,
  defaultOptions: defaultOptions,
});

//--- QUERIES ---

const ALLPOSTS = gql`
  query getAllPosts {
    posts {
      nodes {
        title
        slug
        databaseId
        featuredImage {
          node {
            srcSet
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
        date
        excerpt
      }
    }
  }
`;

export async function getAllPosts() {
  try {
    const { data, loading, error } = await client.query({
      query: ALLPOSTS,
    });
    return data;
  } catch {
    return null;
  }
}

const POST = gql`
  query getPost($slug: ID!) {
    post(idType: SLUG, id: $slug) {
      title
      slug
      content
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          srcSet
        }
      }
    }
  }
`;

export async function getPost(slug) {
  try {
    const { data, loading, error } = await client.query({
      variables: {
        slug,
      },
      query: POST,
    });
    return data;
  } catch {
    return null;
  }
}

const MENU = gql`
query MyQuery($name: ID!) {
  menu(id: $name, idType: NAME) {
    menuItems {
      nodes {
        url
        label
      }
    }
  }
}

`;

export async function getMenu(name) {
  try {
    const { data, loading, error } = await client.query({
      variables: {
        name,
      },
      query: MENU,
    });
    return data;
  } catch {
    return null;
  }
}

const CONTACT = gql`
mutation MyMutation($name: String, $mail: String, $mess: String) {
  submitForm(input: {formId: 1, data: [
    {id: 1, value: $name}, 
    {id: 2, value: $mail}, 
    {id: 3, value: $mess}
  ]}) {
    errors {
      fieldId
      message
      slug
    }
    message
    success
  }
}
`;

export async function sendContact(name,mail,mess) {
  try {
    const { data, loading, error } = await client.query({
      variables: {
        name,
        mail,
        mess,
      },
      query: CONTACT,
    });
    return data;
  } catch {
    return null;
  }
}

const ALBUMS = gql`
query getAllAlbums {
  posts(where: {categoryName: "Galeria"}) {
    nodes {
      title
      slug
      databaseId
      featuredImage {
        node {
          srcSet
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
      date
      excerpt
    }
  }
}
`;

export async function getAllAlbums() {
  try {
    const { data, loading, error } = await client.query({
      query: ALBUMS,
    });
    return data;
  } catch {
    return null;
  }
}