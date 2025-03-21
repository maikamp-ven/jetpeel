import ContactForm from '../components/contactForm/ContactForm'

const Contacts = () => {
  return (
    <main>
      <section className="form__frame section">
        <div className="container">
          <div className="form__wrapper">
            <div className="form__image">

            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
