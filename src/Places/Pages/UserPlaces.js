import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Shared/Components/UIELements/Card/Card";
import ErrorModal from "../../Shared/Components/UIELements/Error/ErrorModal";
import LoadingSpinner from "../../Shared/Components/UIELements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../Shared/Hooks/http-hooks";
import PlaceList from "../Component/PlaceList";

function UserPlaces(props) {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId } = useParams();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/users/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (e) {}
    };
    fetchUsers();
  }, [sendRequest, userId]);
  const placeDeletedHandler = (deletedPlace) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((p) => p.id !== deletedPlace)
    );
  };

  return (
    <>
      {loadedPlaces && <ErrorModal error={error} onClear={clearError} />}
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && !loadedPlaces && (
        <div className="center">
          <Card>
            <h2>You do not have any create places!</h2>
          </Card>
        </div>
      )}

      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
}

export default UserPlaces;
