import React from 'react';
import {Form,Col,Row, Button} from 'react-bootstrap'

class Operations extends React.Component {

    updateAmount = (event) => this.props.updateAmount(event.target.value)

    updateVendor = (event) => this.props.updateVendor(event.target.value)

    updateCategory = (event) => this.props.updateCategory(event.target.value)

    updateDeposit = () => this.props.depositeToTransaction()

    updateWithdraw = () => this.props.withdrawfromTransaction()

    render() {
        return (
            <div>
                <Row className="g-2">
                    <Col>
                        <Form.Control size="lg" type="number" placeholder="Type Amount"
                                    value={this.amount} onChange={this.updateAmount} />
                        <br />
                        <Form.Control size="lg" type="text" placeholder="Type Vendor" 
                                    value={this.vendor} onChange={this.updateVendor} />
                        <br />
                        <Form.Control size="lg" type="text" placeholder="Type Category" 
                                    value={this.category} onChange={this.updateCategory} />
                        <br />
                    </Col>
                    <Col size="md"></Col>
                </Row>
                <Row  className="align-items-start">
                    <Col lg={2}>                 
                        <Button variant="success" onClick={this.updateDeposit}>Deposit</Button >
                        <Button  variant="danger" onClick={this.updateWithdraw}>Withdraw</Button >
                    </Col>
                
                </Row>
            </div>
        );
    }
}


export default Operations;
