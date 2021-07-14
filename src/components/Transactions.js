import React from 'react';
import Transaction from './Transaction';
import { Row, Col } from 'react-bootstrap'


class Transactions extends React.Component {

    deleteTransaction = (id) => {
        this.props.deleteTransaction(id)
    }

    render() {
        return (
            <Row>
                <Col>
                </Col>
                <Col xs={6}>
                    <div>
                        {this.props.transactions.map(transaction => 
                        <Transaction deleteTransaction={this.deleteTransaction} info={transaction} />)}
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
        );
    }
}



export default Transactions;
