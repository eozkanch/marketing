import React from 'react';
import { Container, Row, Col, Table, Button, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, removeAllFavorites } from '../../../store/slice/favori/favoriSlice';
import { utils } from '../../../utils';
import './favori.scss';
import { MdDelete } from 'react-icons/md';

const Favori = () => {
  const favoriItems = useSelector((state) => state.favori.items);
  const dispatch = useDispatch();

  const handleFavoriDelete = (item) => {
    utils.functions
      .swalQuestion('Bu öğeyi favorilerden silmek istediğinizden emin misiniz?')
      .then((result) => {
        if (result && item && item.name) {
          dispatch(removeFavorite(item.name));
        }
      });
  };

  const handleAllFavoriDelete = () => {
    utils.functions
      .swalQuestion('Butun favori öğeleri silmek istediğinizden emin misiniz?', 'Bu işlemi geri alamayacaksınız!')
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

  return (
    <div>
      {favoriItems.length === 0 ? (
        <h4 className='cart-empty'>Votre panier de favori est vide!</h4>
      ) : (
        <Container>
          <Row>
            <Col md={8}>
              <Table >
             
                <tbody>
                  {favoriItems.map((item, index) => (
                    <tr key={index}>
                    <td style={{ width: '200px' }}><Image src={item.image_url} alt={item.name} width={100} thumbnail /></td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                   
                   
                      <td>
                        <Button variant='danger' onClick={() => handleFavoriDelete(item)}>
                        <MdDelete size={30} color="white"/>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col md={4}>
              <div className='favori-btn-container'>
              <Button className='favori-btn' variant='danger' onClick={handleAllFavoriDelete}>
                Delete All
              </Button>
              <Button  className='favori-btn' variant='primary'>Send All To The Cart</Button>
              </div>
             
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Favori;
