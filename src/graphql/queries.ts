import { gql } from '@apollo/client';


export const GET_COUNTRIES = gql`
  query Countries {
  countries {
    code
    continent {
      code
      
    }
    currency
    emoji
    emojiU
    languages {
      native
      name
      code
      rtl
    }
    name
    native
    phone
    states {
      code
      name
    }
  }
}
`;

export const GET_CONTINENTS = gql`
  query Continents {
  continents {
    code
    countries {
      code
      currency
      name
      native
      states {
        code
        country {
          code
          name
        }
        name
      }
      emoji
      emojiU
      languages {
        code
        name
        native
      }
      phone
    }
    name
  }
}
`;

export const  GET_LANGUAGES = gql`
query Languages {
  languages {
    code
    name
    native
    rtl
  }
}
`

export const GET_CONTINENT =  gql`
query Continent($code: ID!) {
  continent(code: $code) {
    code
    name
countries {
      code
      name
      emojiU
      emoji
      states {
        name
        code
      }
      currency
      native
      phone
      languages {
        name
        native
        code
        rtl
      }
    }
  }
}
`

export const GET_COUNTRIE = gql`
query Country($code: String) {
  country(code: $code) {
    code
    continent {
      name
      code
    }
    currency
    emoji
    emojiU
    languages {
      name
      native
      code
      rtl
    }
    name
    native
    phone
    states {
      code
      name
    }
  }
}`

export const GET_LANGUAGE = gql`
query Language($code: String) {
  language(code: $code) {
    code
    name
    native
    rtl
  }
}`