import './style.css';


const Step = ({ number,title_card, capacity_1}) => {
  return ( 
      <div className="step__card">
        <div className="step__card-number">{number}</div>
        <h2 className="step__card-title">{title_card}</h2>
        <ul className="step__card-bullets flow">
          <li>{capacity_1}</li>
        </ul>
      </div>
  );
}
 
export default Step;