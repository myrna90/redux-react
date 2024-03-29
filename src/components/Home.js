import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from './PostForm';
import AllPost from './AllPost';

class Home extends React.Component{
    render(){
        return(
        <div style={{width: "100%", height:"100%", margin: "auto"}}>
           <Container className="home-container">
            <Row>
              <Col xs={6} className="home-post">
              <PostForm/>
              </Col>
              <Col xs={6} className="home-post">
              <AllPost/>
              </Col>
            </Row>
           </Container>
        </div>
        )
    }
}

export default Home;
