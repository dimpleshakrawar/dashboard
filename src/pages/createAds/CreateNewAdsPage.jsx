import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateAdsForm from "../../components/CreateAdsForm";
import Modal from "../../components/Modal";
import { addNewAd } from "../../store/adSlice";

const CreateNewAdsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    heading01: "",
    heading02: "",
    description01: "",
    landscapeImage: "",
    portraitImage: "",
    squareImage: "",
    videoUrl: "",
    businessName: "",
    buttonLabel: "",
    websiteUrl: "",
  });
  const [errors, setErrors] = useState({
    heading01: true,
    heading02: true,
    description01: true,
    businessName: true,
    buttonLabel: true,
    websiteUrl: true,
  });

  const validateForm = (data) => {
    let newErrors;
    if (data) newErrors = { ...errors, ...data };
    else {
      newErrors = { ...errors };
    }
    for (let key in newErrors) {
      if (errors[key] === true) return false;
    }
    return true;
  };

  const formSubmitHandler = (data) => {
    const isValidate = validateForm(data);

    if (isValidate) {
      dispatch(addNewAd(formData));
      setModalOpen(true);
      let timeoutId = setTimeout(() => {
        navigate("/createAds/");
      }, 600);

      return () => clearTimeout(timeoutId);
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <CreateAdsForm
        formSubmitHandler={formSubmitHandler}
        setFormData={setFormData}
        setErrors={setErrors}
        errors={errors}
      />
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />}
    </>
  );
};

export default CreateNewAdsPage;
