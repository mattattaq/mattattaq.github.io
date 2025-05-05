import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const availableIcons = [
  "svg-react",
  "svg-js",
  "svg-css",
  "svg-html",
  "svg-github",
  "svg-wordpress",
  "svg-vue",
  // Add more icons as needed
];

const PanelForm = ({ addEntry }) => {
  const [formData, setFormData] = useState({
    link: "",
    img: "",
    title: "",
    description: "",
    techIcons: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIconClick = (icon) => {
    setFormData((prevData) => {
      const newTechIcons = prevData.techIcons.includes(icon)
        ? prevData.techIcons.filter((item) => item !== icon)
        : [...prevData.techIcons, icon];
      return {
        ...prevData,
        techIcons: newTechIcons,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/panel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add entry");
      }

      // Clear form data after successful submission
      setFormData({
        link: "",
        img: "",
        title: "",
        description: "",
        techIcons: [],
      });

      // Add new entry to parent component state
      addEntry(formData);
    } catch (error) {
      console.error("Error adding entry:", error);
      // Handle error if needed
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Link"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tech Icons</Form.Label>
        <div className="icon-selection">
          {availableIcons.map((icon) => (
            <div
              key={icon}
              className={`tech-list icon-item ${
                formData.techIcons.includes(icon) ? "selected" : ""
              }`}
              onClick={() => handleIconClick(icon)}
            >
              <span key={icon} className={`svg ${icon}`}></span>
            </div>
          ))}
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Entry
      </Button>
    </Form>
  );
};

export default PanelForm;
