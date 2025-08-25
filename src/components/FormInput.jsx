const FormInput = ({ col, value, handleChange }) => (
  <input
    type="text"
    name={col}
    placeholder={`Enter ${col}`}
    value={value || ""}
    onChange={handleChange}
    className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    required={col === "name" || col === "roll"}
  />
);

export default FormInput;
