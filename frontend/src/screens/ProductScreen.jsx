import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';


const ProductScreen = () => {
    
    const {id: productId} = useParams();
    const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);

    
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
                <ListGroup.Item>
                    <Button className='btn-block m-2 ' type='button' disabled = {product.countInStock === 0}>
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