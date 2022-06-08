import {gql} from '@apollo/client'

export const GET_AMOUNTS = gql`
    query {
        getAmountA {
            amt, uv, pv
        }
        getAmountB {
            amt, uv, pv
        }
        getAmountC {
            amt, uv, pv
        }
    }    
`