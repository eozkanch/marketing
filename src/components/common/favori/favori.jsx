import React from 'react';
import { Container, Row, Col, Table, Button, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, removeAllFavorites } from '../../../store/slice/favori/favoriSlice';
import { addItem } from '../../../store/slice/cart/cartSlice';
import { utils } from '../../../utils';
import './favori.scss';
import { MdDelete } from 'react-icons/md';

const Favori = () => {
  const favoriItems = useSelector((state) => state.favori.items);
  const dispatch = useDispatch();

  const handleFavoriDelete = (item) => {
    utils.functions
      .swalQuestion('Are you sure you want to delete this item from favorites?')
      .then((result) => {
        if (result && item && item.name) {
          dispatch(removeFavorite(item.name));
        }
      });
  };

  const handleAllFavoriDelete = () => {
    utils.functions
      .swalQuestion('Are you sure you want to delete all favorite items?', 'You will not be able to undo this action!')
      .then((result) => {
        if (result) {
          dispatch(removeAllFavorites());
        }
      })
      .catch((error) => {
        console.log(error);
        utils.functions.swalToast('Error submitting offer. Please try again later.', 'error');
      });
  };

  const handleSendAllToCart = () => {
    favoriItems.forEach((item) => {
      dispatch(addItem({ product: item, quantity: 1 }));
    });

    dispatch(removeAllFavorites());

    utils.functions.swalToast('All favori items added to the cart successfully!', 'success');
  };

  return (
    <div>
      {favoriItems.length === 0 ? (
        <h4 className='cart-empty'>Votre panier de favori est vide!</h4>
      ) : (
        <Container>
          <Row className='favori gap-5'>
            <h1 className='favori-title'>List de Favori</h1>
            <Col md={7} className='favori-table-col'>
              <Table>
                <tbody>
                  {favoriItems.map((item, index) => (
                    <tr key={index}>
                      <td style={{ width: '200px' }}>
                        <Image src={item.image_url} alt={item.name} width={100} thumbnail />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <Button variant='danger' onClick={() => handleFavoriDelete(item)}>
                          <MdDelete size={30} color="white" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col md={4} className='favori-btn-col'>
              <Button className='favori-btn' variant='danger' onClick={handleAllFavoriDelete}>
                Delete All
              </Button>
              <Button className='favori-btn' variant='primary' onClick={handleSendAllToCart}>
                Send All To The Cart
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Favori;
