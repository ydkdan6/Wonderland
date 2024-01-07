import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import emailjs from "emailjs-com";
import "../index.css";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const { items, updateItemQuantity } = useCart();

  useEffect(() => {
    // Update the selected items whenever items change
    setSelectedItems(items);
  }, [items]);

  const handleInputChange = (e) => {

    console.log("Form Data:", formData);
  console.log("Selected Items:", selectedItems);

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // update quantity for each item in the cart with the entered details
    items.forEach((item) => {
      updateItemQuantity(item.id, item.quantity, {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
      });
    });

    // Send email using Email.js
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
      selectedItems: selectedItems.map((item) => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,  // Replace 'image' with the actual key in your item object
      })),
    };
    

    emailjs
      .send(
        "service_icorah9",
        "template_r44dm5w",
        templateParams,
        "hwuEmjYnoSfnLvFdl"
      )
      .then((response) => {
        alert("Email sent successfully:", response);
      })
      .catch((error) => {
        alert("Email failed to send:", error);
      });

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      location: "",
    });
  };

  return (
    <div>
      {/*input fields */}
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            placeholder="Active Number:"
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            placeholder="Please Enter Current Location"
            required
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display selected items */}
      <div>
        {selectedItems.length > 0 && (
          <div>
            <h2>Selected Items:</h2>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.price} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
