import Title from "./Title";

function Profile() {
  return (
    <>
      <Title title='Profissional Resume' />
      <div className="label-container">
        <label>
          Craft 2-4 punchy sentences showcasing your role, experience, and remarkable achievements, top qualities, and skills.:
          <textarea
            name="resume"
            rows={ 4 }
          />
        </label>
      </div>
    </>
  );
}

export default Profile;