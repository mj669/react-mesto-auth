import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup(props) {
    return (
        <PopupWithForm
            name="delete-card"
            title={props.title}
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={props.onSubmit}
        >
        </PopupWithForm>
    )
}

export default ConfirmPopup;