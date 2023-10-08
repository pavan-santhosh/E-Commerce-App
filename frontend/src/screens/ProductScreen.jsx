import React from 'react'
import { useState } from 'react';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';


const ProductScreen = () => {
    
    const {id: productId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty,setQty] = useState(1);
    const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({...product,qty}));
        navigate('/cart');
    };
    
    return (
    <>
    
    <Link className='btn btn-light my-3' to='/'>
        Go Back
    </Link>

    {isLoading?(
        <Loader/>
    ):error?(
        <Message variant='danger'>{error?.data?.message||error.error}</Message>
    ):(
        <Row>
        <Col md = {5}>
            <Image src={product.image} alt = {product.name} fluid/>
        </Col>
        <Col md = {4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value = {product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: Rs.{product.price*80}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>

        </Col>
        <Col md = {3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price: </Col>
                            <Col>
                                <strong>Rs.{product.price*80}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Stock: </Col>
                            <Col>
                                {product.countInStock > 0 ?<strong style={{color:'green'}}>In Stock</strong>  : <strong style={{color:'red'}}>Out of Stock</strong>}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card>
            {product.countInStock>0&&(
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col> Qty </Col>
                            <Col>
                                <Form.Control
                                    as = 'select'
                                    value = {qty}
                                    onChange = {(e) => setQty(Number(e.target.value))}>
                                {[...Array(product.countInStock).keys()].map((x)=> (
                                    <option key = {x+1} value = {x+1}>
                                        {x+1}
                                    </option>
                                ))}
                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    </ListGroup>
                )}
            </Card>
            <Card>
                <ListGroup.Item>
                    <Button className='btn-block m-2 ' type='button' disabled = {product.countInStock === 0} onClick={addToCartHandler}>
                        Add to Cart
                    </Button>
                </ListGroup.Item>
            </Card>

        </Col>
    </Row>
    )}
    
    
  </>)
}

export default ProductScreen