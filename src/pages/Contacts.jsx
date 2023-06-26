import { Contact } from '../components/Contacts';
import { Filter } from '../components/Filter';
import { Forma } from '../components/Forma';
import { ContainerForm } from '../components/App.styled';

const Contacts = () => {
  return (
    <ContainerForm>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <Contact />
    </ContainerForm>
  );
};

export default Contacts;