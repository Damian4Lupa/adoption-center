import React from 'react';
import { Container } from 'react-bootstrap'
import bug from '../images/website/exclamation-triangle.svg'
import '../styles/Pages.css'

const ErrorPage = () => {
    return (
        <Container>

            <div className="errorBox">

                <img src={bug} alt="bug" height="50" />

                <h5 className="text-center mt-4 mb-5">There are no such pages...</h5>
            </div>

        </Container>
    )
}

export default ErrorPage