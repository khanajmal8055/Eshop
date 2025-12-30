import { useState } from "react";

import axios from "axios"

const AboutPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("categoryImage", categoryImage);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/category/admin/add-category",
        formData,
        {
          headers : {
            "Content-Type" : "multipart/form-data"
          },
          withCredentials : true
        }
        
      );

      console.log(res.data);
      alert("Category added successfully");
    } catch (error) {
      console.error(error);
      alert("Error adding category");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setCategoryImage(e.target.files[0])}
        required
      />

      <button type="submit">Add Category</button>
    </form>
  );
}


export default AboutPage