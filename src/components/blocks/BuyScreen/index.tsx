import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Typography from "../../other/Typography";
import Container from "../../other/Container";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS_BY_TYPE} from "../../../query/product";
import IProduct from "../../../types/IProduct";
import ProductCard from "./Product";
import Grid from "../../other/Grid";
import {HashLink as Link} from "react-router-hash-link";
import Loader from "../Loader";

const StyledBuyScreen = styled.div`
  padding-top: 30px;

  .path {
    user-select: none;

    a {
      color: ${props => props.theme.colors.lightBlue}
    }

    span {
      margin: 0 10px;
    }
  }
`

function capitalize(str: string | undefined) {
  return str ? str[0]?.toUpperCase() + str.slice(1) : null;
}

const BuyScreen: React.FC = () => {
  const [products, setProducts] = useState<[IProduct] | null>(null)
  const {category, type} = useParams();

  const {data, loading, error} = useQuery(GET_PRODUCTS_BY_TYPE, {
    variables: {
      type: type
    }
  })

  useEffect(() => {
    if (data) {
      setProducts(data.getProductsByType);
    }
  }, [data])


  return (
    <StyledBuyScreen>
      <Container>
        <Typography component="h3" weight={400} className='path'>
          <Link to={`/#${category}`}>
            {capitalize(category)}
          </Link>
          <span>&#62;</span>
          {capitalize(type)}
        </Typography>
        {loading ?
          <Loader/>
          :
          <Grid columns={3} gap={50} marginTop={50}>
            {products?.map(product => <ProductCard key={product.id} item={product}/>)}
          </Grid>
        }
      </Container>
    </StyledBuyScreen>
  );
};

export default BuyScreen;