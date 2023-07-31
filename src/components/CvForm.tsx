import CustomList from "./cv-forms/CustomList";
import MainData from "./cv-forms/MainData";
import Profile from "./cv-forms/Profile";

function CvForm() {
  return (
    <div className="px-3">
      <MainData />
      <Profile />
      <CustomList />
    </div>
  );
}

export default CvForm;