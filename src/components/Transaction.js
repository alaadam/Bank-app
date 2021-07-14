import React, { Component } from 'react';
import Transactions from './Transactions';
import { Row,Col,Button} from 'react-bootstrap'

class Transaction extends Component{

    deleteTransaction = () =>{
        this.props.deleteTransaction(this.props.info._id)
    }

    render() {
        return (
            <div className = {this.props.info.amount > 0 ? "Green" : "Red"}>
                <Row>
                    <Col>
                        <span>{this.props.info.vendor} </span>
                    </Col>
                    <Col>
                        <span>{this.props.info.amount} </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>{this.props.info.category}</span>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={this.deleteTransaction}>Delete</Button>
                    </Col>
                </Row>
                <hr></hr>
            </div>
        );
    }
}


export default Transaction;
