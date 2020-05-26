import React, {FC} from 'react';
// Redux
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/product';
// UI
import {Button} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const AddToCartButton: FC<{id: string}> = ({id}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };

  return (
    <Button
      size="small"
      color="primary"
      startIcon={<AddShoppingCartIcon />}
      variant="contained"
      onClick={handleAddToCart}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
