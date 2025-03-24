import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ContactForm from '../components/contactForm/ContactForm'

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Helmet>
        <title>{t("contact_form.title")}</title>
        <meta name="description" content={t("contact_form.subtitle")} />
        <link rel="canonical" href="https://jetpeel.fi/contacts" />
      </Helmet>
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
