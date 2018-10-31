/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Button, Table, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
/* eslint-enable no-unused-vars */

const OrderListView = ({ order, handleClick }) => ( // eslint-disable-line no-unused-vars
    <Table.Row onClick={() => handleClick(order._tx)}>
        <Table.Cell>{order.deliveryDate}</Table.Cell>
        <Table.Cell>{order.item}</Table.Cell>
        <Table.Cell>{order.amount}</Table.Cell>
        <Table.Cell>
            {
                order.taggant ?
                    <Icon color='green' name='checkmark' size='large' /> :
                    <Icon color='red' name='remove' size='large' />
            }
        </Table.Cell>
        <Table.Cell>
            { order.status }
        </Table.Cell>
    </Table.Row>
)


export default class Orders extends Component {
    render() {
        const { orders, handleRowClick } = this.props

        return (
            <div>
                <h2 onClick={this.handleClick}>Orders</h2>
                {
                    orders.length === 0 ? (
                        <div>
                            <h3 className="text-center">No orders, yet.</h3>
                            <h4 className="text-center">Start by placing a new order.</h4>

                            <div className="text-center">
                                <Button className="button--primary" as={Link} to="/addOrder">
                                    + Place new order
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <Table celled selectable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Date</Table.HeaderCell>
                                    <Table.HeaderCell>Item</Table.HeaderCell>
                                    <Table.HeaderCell>Amount</Table.HeaderCell>
                                    <Table.HeaderCell>Taggant</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    Object.values(orders).map((order) => (
                                        <OrderListView order={order} key={order._tx}
                                                       handleClick={handleRowClick}/>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    )
                }
            </div>
        )
    }
}
