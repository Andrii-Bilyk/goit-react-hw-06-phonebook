import React from 'react'; 
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './app.module.css';

function App() {
  return (
        <div className={styles.container}>
          <h1>Телефонна книга</h1>
          <ContactForm />
          <h2>Контакти</h2>
          <Filter />
          <ContactList />
        </div>
  );
}

export default App;
