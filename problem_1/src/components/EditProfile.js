import React, { useState } from 'react'

const EditProfile = ({name, email, bio}) => {
    const [formData, setFormData] = useState({name, email, bio});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(preData => ({...preData, [name]: value}))
    };

  return (
    <div>
      <form>
        <label>Name :
            <input name='name' value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>Email :
            <input name='email' value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>Bio :
            <input name='bio' value={formData.bio} onChange={handleChange} />
        </label>
      </form>
    </div>
  )
}

export default EditProfile;
