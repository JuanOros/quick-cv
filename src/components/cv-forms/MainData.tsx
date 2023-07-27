import Title from "./Title";

function MainData() {
  return (
    <>
      <Title title='Personal Data' />
      <div className="labels-container">
        <label>
          Desired Job Title:
          <input
            type="text"
            name="title"
          />
        </label>
        <input
          type="file"
          name="profile-image"
          className="bg-white text-sm p-0 file"
        />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contact"
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
          />
        </label>
      </div>
    </>
  );
}

export default MainData;