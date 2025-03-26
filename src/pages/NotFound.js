import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="not-found" role="main">
      <Helmet>
        <title>{t('notFound.title')}</title>
        <meta name="description" content={t('notFound.metaDescription')} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className='title-1'>{t('notFound.heading')}</h1>
      <p>{t('notFound.message')}</p>
      <Link to="/" className="btn" state={{ from404: true }}>{t('notFound.backToHome')}</Link>
    </main>
  );
};

export default NotFound;
