import React, { useEffect, useState } from "react";
import Card from "../../Shared/Components/UIELements/Card/Card";
import ErrorModal from "../../Shared/Components/UIELements/Error/ErrorModal";
import LoadingSpinner from "../../Shared/Components/UIELements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../Shared/Hooks/http-hooks";
import UserList from "../Components/UserList";

function Users(props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users"
        );

        setLoadedUsers(responseData.users);
      } catch (e) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      {loadedUsers && <ErrorModal error={error} onClear={clearError} />}
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && !loadedUsers && (
        <div className="center">
          <Card>
            <h2>No users available yet, try signing up.</h2>
          </Card>
        </div>
      )}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </>
  );
}

export default Users;
