import { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    readTo: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Dynamically update the object key matching the input name
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log('Submitted Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Page Number"
        value={formData.readTo}
        onChange={handleChange}
        placeholder="Page Number"
      />
      <input
        type="date"
        name="Date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
      />
      <input
        type="time"
        name="Time"
        value={formData.time}
        onChange={handleChange}
        placeholder="Time"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
