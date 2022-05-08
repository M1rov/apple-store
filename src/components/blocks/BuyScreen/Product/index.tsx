import React from 'react';
import Card from "../../Card";
import IProduct from "../../../../types/IProduct";
import Typography from "../../../other/Typography";
import Flex from "../../../other/Flex";
import styled, {useTheme} from "styled-components";
import Box from "../../../other/Box";
import starSvg from '../../../../assets/images/icons/star.svg'
import {Link} from "react-router-dom";

interface IProductProps {
  item: IProduct
}

const base64 = 'data:image/png;base64,';

const StyledProduct = styled.div`
  .star {
    width: 24px;
    height: 24px;
  }
`

const ProductCard: React.FC<IProductProps> = ({item}) => {
  const theme = useTheme();
  return (
    <Link to={item.id.toString()}>
      <Card>
        <StyledProduct>
          <img src={base64 + item.images[0]} alt={item.title}/>
          <Flex justify={"space-between"} marginTop={30}>
            <Typography component="h4">
              {item.title}
            </Typography>
            <Box>
              <Typography component="h4" color={theme.colors.primary}>
                ${item.price}
              </Typography>
              <Typography component="h5" color={theme.colors.primary} sx={{opacity: 0.6, textDecoration: "line-through"}}>
                ${item.oldPrice}
              </Typography>
            </Box>
          </Flex>
          <Flex align="center">
            <img src={starSvg} alt="star" className="star"/>
            <Typography component="h3" color={theme.colors.secondary} sx={{marginLeft: 10}}>
              {item.rating}
            </Typography>
          </Flex>
        </StyledProduct>
      </Card>
    </Link>
  );
};

export default ProductCard;