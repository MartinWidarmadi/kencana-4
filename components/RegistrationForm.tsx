import { useState } from "react";
import styles from "../styles/Form.module.css"; // Import CSS module

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function RegistrationForm() {
  // State untuk mengelola input
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData); // Menyimpan data yang telah di-submit
    setFormData({ name: "", email: "", password: "" }); // Reset form setelah submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className={styles.result}>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
