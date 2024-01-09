const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
  },
  h2: {
    color: "#3498db",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    appearance: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonHover: {
    backgroundColor: "#217dbb",
  },
};

const Signup = () => {
  return (
    <div className={styles.root}>
      <main className={styles.signup}>
        <h2>Sign Up Form</h2>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className={styles.input}
          />

          <label htmlFor="email" className={styles.label}>
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={styles.input}
          />

          <label htmlFor="businessName" className={styles.label}>
            Business Name:
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            placeholder="Enter your business name"
            required
            className={styles.input}
          />

          <label htmlFor="category" className={styles.label}>
            Business Category:
          </label>
          <select id="category" name="category" className={styles.select}>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="food">Food</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description" className={styles.label}>
            Tell us about your business:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your business..."
            required
            className={styles.textarea}
          ></textarea>

          <label htmlFor="website" className={styles.label}>
            Business Website:
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="Enter your website URL"
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
