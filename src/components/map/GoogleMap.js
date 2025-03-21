const GoogleMap = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.7488640542437!2d24.963954701297233!3d60.16673617251845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc4922127b7%3A0x773fa899e9a21f0c!2sKauppiaankatu%202%2C%2000160%20Helsinki!5e0!3m2!1sru!2sfi!4v1739124855007!5m2!1sfi!2sfi"
      width="300"
      height="200"
      style={{ border: 0,
       }}
      allowFullScreen 
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap; 