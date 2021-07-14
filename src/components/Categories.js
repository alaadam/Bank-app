import React from 'react';
import {ListGroup,Row,Col} from 'react-bootstrap'


class Categories extends React.Component {
    calculateCategories = () =>{
        let categories = {}
        this.props.transactions.forEach(transaction => {
            !categories[transaction.category] ?
                categories[transaction.category] = transaction.amount :
                categories[transaction.category] += transaction.amount
        })
        return categories
    }
    render() {
        let myCategories = this.calculateCategories()
        console.log(Object.keys(myCategories))
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col lg={6}>
                    <ListGroup>
                        {Object.keys(myCategories).map(category => <ListGroup.Item action variant="light">
                            {category} : {myCategories[category]}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}

export default Categories;
