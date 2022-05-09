import React from 'react';
import Card from "../../Card";
import IProduct from "../../../../types/IProduct";
import Typography from "../../../other/Typography";
import Flex from "../../../other/Flex";
import styled, {useTheme} from "styled-components";
import Box from "../../../other/Box";
import starSvg from '../../../../assets/images/icons/star.svg'
import {Link} from "react-router-dom";
import {ReactComponent as LikeIcon} from '../../../../assets/images/icons/like.svg'
import {ReactComponent as ActiveLikeIcon} from '../../../../assets/images/icons/activeLike.svg'
import {addFavourite, removeFavourite} from "../../../../store/productReducer";
import {useDispatch} from "react-redux";

interface IProductProps {
  item: IProduct
}

const base64 = 'data:image/png;base64,';

const StyledProduct = styled.div`
  position: relative;

  .star {
    width: 24px;
    height: 24px;
  }

  .like-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
  }
`

const ProductCard: React.FC<IProductProps> = ({item}) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const likeHandler = () => {
    if(item.isFavourite) {
      dispatch(removeFavourite(item.id))
    } else {
      dispatch(addFavourite(item.id))
    }
  }

  return (
    <StyledProduct>
      <button className="like-btn" onClick={likeHandler}>
        {item.isFavourite ? <ActiveLikeIcon/> : <LikeIcon/>}
      </button>
      <Link to={item.id.toString()}>
        <Card>
          <img src={base64 + item.images[0]} alt={item.title}/>
          <Flex justify={"space-between"} marginTop={30}>
            <Typography component="h4">
              {item.title}
            </Typography>
            <Box>
              <Typography component="h4" color={theme.colors.primary}>
                ${item.price}
              </Typography>
              {item.oldPrice ?
                <Typography component="h5" color={theme.colors.primary}
                            sx={{opacity: 0.6, textDecoration: "line-through"}}>
                  ${item.oldPrice}
                </Typography>
                :
                null
              }
            </Box>
          </Flex>
          <Flex align="center">
            <img src={starSvg} alt="star" className="star"/>
            <Typography component="h3" color={theme.colors.secondary} sx={{marginLeft: 10}}>
              {item.rating}
            </Typography>
          </Flex>
        </Card>
      </Link>
    </StyledProduct>
  );
};

export default ProductCard;