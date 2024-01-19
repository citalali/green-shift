import styles from "./signup.css";

const Signup = () => {
  return (
    <div class="blabla">
      <main>
        <h2>Sign Up Form</h2>
        <form class="formSign">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="inputSign"
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
            className="inputSign"
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
            className="inputSign"
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
            className="inputSign"
          ></textarea>

          <label htmlFor="website" className={styles.label}>
            Business Website:
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="Enter your website URL"
            className="inputSign"
          />

          <button type="submit" className="signupButton">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
