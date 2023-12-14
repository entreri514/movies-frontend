import "./TextField.css";

const TextField = ({ label, value, onChange }) => {
  return (
    <div className="text-field">
      <label>
        {label}
        <input value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
};

export default TextField;
