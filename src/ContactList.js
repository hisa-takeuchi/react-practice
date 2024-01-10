export default function ContactList({contacts, selectedId, dispatch}) {
  const handleSelect = (contact) => {
    dispatch({
      type: 'changed_selection',
      contactId: contact.id,
      message: contact.message
    });
  };
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                handleSelect(contact);
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
