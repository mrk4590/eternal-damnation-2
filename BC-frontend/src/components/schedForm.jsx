import { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    readTo: '',
    date: '',
    time: '',
  });

  const handleChange = (input) => {

    //does some calculation or something

    //then updates data
    setFormData(input);
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
        onChange={(e) => handleChange((prev) => ({ ...prev, readTo: e.target.value }))}
        placeholder="Page Number"
      />
      <input
        type="date"
        name="Date"
        value={formData.date}
        onChange={(e) => handleChange((prev) => ({ ...prev, date: e.target.value }))}
        placeholder="Date"
      />
      <input
        type="time"
        name="Time"
        value={formData.time}
        onChange={(e) => handleChange((prev) => ({ ...prev, time: e.target.value }))}
        placeholder="Time"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
