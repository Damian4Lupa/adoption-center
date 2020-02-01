import React from 'react';
import { Container } from 'react-bootstrap'
import bug from '../images/website/exclamation-triangle.svg'
import '../styles/Pages.css'

const ErrorPage = () => {
    return (
        <Container>

            <div className="errorBox">
                <img src={bug} alt="" height="30" className="exclamation" />
                <h5 className="text-center my-5">there are no such pages...</h5>
            </div>

        </Container>
    )
}

export default ErrorPage