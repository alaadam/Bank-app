import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Nav, Navbar, Button } from 'react-bootstrap'
import axios from "axios"
import Operations from './components/Operations';
import Categories from './components/Categories';
import Transactions from './components/Transactions';
const DEPOSIT = 1, WIDTHDRAW = -1, BROKE = 500

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: 0,
      temptransaction: {}
    }
  }

  async componentDidMount() {
    await this.updateTransactions()
  }

  async getTransactions() {
    return axios.get("http://localhost:3001/transactions")
  }

  async addTransactions(transaction) {
    return axios.post("http://localhost:3001/transactions", transaction)
  }

  async deleteTransactions(id) {
    return axios.delete("http://localhost:3001/transactions", { data: { id: id } })
  }

  async updateTransactions() {
    let transaction = await this.getTransactions()
    this.setState({ transactions: transaction.data }, () => {
      this.updateBalance()
    })
  }

  updateBalance() {
    let balance = 0
    this.state.transactions.forEach(transaction => balance += transaction.amount)
    this.setState({ balance: balance })
  }

  updateAmount = (amount) => {
    let tempTransaction = this.state.temptransaction
    tempTransaction["amount"] = amount
    this.setState({ temptranscation: tempTransaction })
  }

  updateVendor = (vendor) => {
    let tempTransaction = this.state.temptransaction
    tempTransaction["vendor"] = vendor
    this.setState({ temptranscation: tempTransaction })
  }

  updateCategory = (category) => {
    let tempTransaction = this.state.temptransaction
    tempTransaction["category"] = category.toLowerCase()
    this.setState({ temptranscation: tempTransaction })
  }

  depositeToTransaction = () => {
    this.updateTransaction(DEPOSIT)
  }

  withdrawfromTransaction = () => {
    this.updateTransaction(WIDTHDRAW)
  }

  async updateTransaction(transactionType) {
    let CurrTempTransaction = { ...this.state.temptransaction }
    CurrTempTransaction.amount *= transactionType
    if ((this.state.balance + CurrTempTransaction.amount) >= 0) {
      await this.addTransactions(CurrTempTransaction)
      await this.updateTransactions()
    } else {
      alert("NOT ENOUGH TO WITHDRAW")
    }
  }

  deleteTransaction = async (id) => {
    await this.deleteTransactions(id)
    await this.updateTransactions()
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar className="mr-auto">
              <Navbar.Brand href="/">Transactions</Navbar.Brand>
              <Nav.Link href="/operations">Operations</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
            </Navbar>
            <Navbar>
              <Button variant={this.state.balance > BROKE ? "success Balance" : "danger Balance"} > {this.state.balance} </Button>
            </Navbar>
          </Navbar>


          <Route path="/" exact render={() => <Transactions transactions={this.state.transactions}
            deleteTransaction={this.deleteTransaction} />}>
          </Route>
          <Route path="/operations" exact render={() => <Operations depositeToTransaction={this.depositeToTransaction}
            withdrawfromTransaction={this.withdrawfromTransaction}
            updateAmount={this.updateAmount} updateVendor={this.updateVendor}
            updateCategory={this.updateCategory} />}></Route>
          <Route path="/categories" exact render={() =>
            <Categories transactions={this.state.transactions} />}></Route>

        </div>
      </Router >
    );
  }
}

export default App;
