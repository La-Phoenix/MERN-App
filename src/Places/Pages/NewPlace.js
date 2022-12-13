import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Shared/Components/FormElements/Button/Button";
import ImageUpload from "../../Shared/Components/FormElements/ImageUpload/ImageUpload";
import Input from "../../Shared/Components/FormElements/Input/Input";
import ErrorModal from "../../Shared/Components/UIELements/Error/ErrorModal";
import LoadingSpinner from "../../Shared/Components/UIELements/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../Shared/Context/Auth-Context";
import { useForm } from "../../Shared/Hooks/Form-Hook";
import { useHttpClient } from "../../Shared/Hooks/http-hooks";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Util/validators";
import "./PlaceForm.css";

function NewPlace(props) {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/places",
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      navigate("/");
    } catch (e) {}
  };
  return (
    <>
      <ErrorModal error={error} onCancel={clearError} />
      <form className="place-form" onSubmit={handleSubmit}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          element="input"
          id="title"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title!"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="address"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address!"
          onInput={inputHandler}
        />
        <Input
          element="textarea"
          id="description"
          label="Description"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters).!"
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          center
          onInput={inputHandler}
          errorText="Please provide an image"
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    </>
  );
}

export default NewPlace;
