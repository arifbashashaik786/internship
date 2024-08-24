import React, { useState } from 'react';

//import ResponseForm from './ResponseForm';
const MyForm = (props) => {
  // Initial state
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    category: '',
    interests: [],
    termsAndConditions: false
  });

  // Handle change for text input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(value.length==='')
    {
        alert("This Field is required")
    }
    else{
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    
    }));
}
  };

  // Handle change for radio inputs
  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value
    }));
  };

  // Handle change for drop-down selection
  const handleSelectChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      category: e.target.value
    }));
  };

  // Handle change for checkboxes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'termsAndConditions') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData((prevData) => {
        const interests = [...prevData.interests];
        if (checked) {
          interests.push(name);
        } else {
          const index = interests.indexOf(name);
          if (index > -1) {
            interests.splice(index, 1);
          }
        }
        return { ...prevData, interests };
      });
    }
  };
 
  return (
    <form className='Frm'>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleRadioChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleRadioChange}
            />
            Female
          </label>
        </div>
      </div>

      <div>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleSelectChange}
        >
          <option value="">Select a category</option>
          <option value="technology">Student</option>
          <option value="science">Professional</option>
          <option value="arts">Others</option>
        </select>
      </div>

      <div>
        <label>Interests:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="Coding"
              checked={formData.interests.includes('Coding')}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="Music"
              checked={formData.interests.includes('Music')}
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="Sports"
              checked={formData.interests.includes('Sports')}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleCheckboxChange}
          />
          I agree to the terms and conditions
        </label>
      </div>

      <button type="submit" onClick={(e)=>{
        e.preventDefault();
       
            
            props.update(formData);
        props.handle();
       
        setFormData({
            name: '',
            gender: '',
            category: '',
            interests: [],
            termsAndConditions: false
          })
        
        
        
      }}>Submit</button>
    </form>
  );
};

export default MyForm;
