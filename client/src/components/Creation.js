import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import '../index.css'


const Creation = ({ handleSubmit }) => (
    <div className="full-page">
        <div className="main">
            <h1>Complete your public profile.</h1>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Field>
                    <label>Name</label>
                    <br/>
                    <Field name="name" component="input" required
                           type="text" placeholder='Your name' />
                </Form.Field>
                <Form.Field>
                    <label>Country of origin</label>
                    <br/>
                    <Field name="origin" component="input" required
                           type="text" placeholder='Your name' />
                </Form.Field>
                <Form.Field>
                    <label>Your History</label>
                    <br/>
                    <Field id="history"name="history" component="input" required
                           type="text" style={{height: '200px', width: '100%'}} placeholder='Your History' />
                </Form.Field>
                <br/>
                <Button className="button--primary" type='submit'>Sign and submit</Button>
                <br/>
                <Button as='a' href='/logout'>Reset session</Button>
            </Form>
        </div>
    </div>
)

Creation.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const CreationForm = reduxForm({
    form: 'profile'
})(Creation)

export default CreationForm
