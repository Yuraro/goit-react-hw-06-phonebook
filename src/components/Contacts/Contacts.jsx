import { ContactsList, ListItem, DeleteBtn, Title } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { getVisibleContacts } from '../../getVisibleContacts';
import { useSelector, useDispatch } from 'react-redux';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter);
return (
    <>
    <Title>Contacts</Title>
    <ContactsList>
        {visibleContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
            <p>
            {name}: {number}
            </p>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
            </DeleteBtn>
        </ListItem>
        ))}
    </ContactsList>
    </>
);
};


export default Contacts;