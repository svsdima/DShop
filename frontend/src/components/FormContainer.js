import React from 'react'

const FormContainer = ({ children }) => {
    return (
        <div className="form-container">
            <div className="container">
                <div className="form-container__wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FormContainer
