const Cust_Select = props => {
  const tobeShownOptions = props.personType === "Adults" ? [1, 2] : [0, 1, 2];
  const ageRange = props.personType === "Adults" ? "(18+)" : "(0-17)";

  const selectHandler = e => {
    console.log(e.target.value);
  };
  return (
    <div className="personType">
      <p>{props.personType}</p>
      <p>{ageRange}</p>
      <select disabled={props.enable ? true : null} onChange={selectHandler}>
        {tobeShownOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <style jsx>{`
        .personType {
          width: 70px;
          height: 90px;
          line-height: 0px;
        }
      `}</style>
    </div>
  );
};

// Cust_Select.defaultProps = {
//   enable: true
// };

export default Cust_Select;
