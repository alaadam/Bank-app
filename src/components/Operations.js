import React from 'react';
import {Form,Col,Row, Button} from 'react-bootstrap'

class Operations extends React.Component {

    constructor() {
        super()
        this.state = {
          temptransaction: {}
        }
    }

    updateAmount = (event) => {
        let tempTransaction = this.state.temptransaction
        tempTransaction["amount"] = event.target.value
        this.setState({ temptranscation: tempTransaction })
      }
    
      updateVendor = (event) => {
        let tempTransaction = this.state.temptransaction
        tempTransaction["vendor"] = event.target.value
        this.setState({ temptranscation: tempTransaction })
      }
    
      updateCategory = (event) => {
        let tempTransaction = this.state.temptransaction
        tempTransaction["category"] = (event.target.value).toLowerCase()
        this.setState({ temptranscation: tempTransaction })
      }


    updateDeposit = () => this.props.depositeToTransaction(this.state.temptransaction)

    updateWithdraw = () => this.props.withdrawfromTransaction(this.state.temptransaction)

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
