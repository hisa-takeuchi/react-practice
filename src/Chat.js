import {useReducer, useState} from 'react';
import {initialState, messengerReducer} from "./messengerReducer";

export default function Chat({contact, message, dispatch}) {
  const handleEdit = (event) => {
    dispatch({
      type: 'edited_message',
      message: event.target.value,
    })
  }
  const handleDelete = () => {
    dispatch({
      type: 'send_message',
    })
  }
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          handleEdit(e)
        }}
      />
      <br />
      <button onClick={() => {
        alert(`${contact.email}：${message}`)
        handleDelete()
      }}>Send to {contact.email}</button>
    </section>
  );
}
