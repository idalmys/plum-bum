import React from "react";
import "./PencilButton.css";
import Image from "react-bootstrap/Image";
import { useAuth0 } from "../../contexts/auth0-context";
import apiUser from "../../utils/apiUser";

function PencilButton(props) {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  const sendUser = () => {
    const info = {
      name: user.name,
      email: user.email,
      auth0_id: user.sub.split("|")[1],
      image: user.picture,
    };

    apiUser
      .createUser(info)
      .then((res) => {
        console.log("User created");
        console.log(res);
      })
      .catch((err) => {
        apiUser
          .findUser(info.auth0_id)
          .then((res) => {
            console.log("User found!");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  return (
    <div className="PencilButton-div">
      {/* if there is no user. show the login button */}
      {!isLoading && !user && (
        <>
          <Image
            className="Pencil-button"
            src={props.src}
            alt={props.alt}
            onClick={(...p) => {
              console.log(p);
              loginWithRedirect(...p);
            }}
          />
        </>
      )}
      {!isLoading && user && (
        <>
          {/* <a href="/dashboard"> */}
          <Image
            className="Pencil-button"
            src={props.src}
            alt={props.alt}
            onClick={sendUser}
          />
          {/* </a> */}
        </>
      )}
    </div>
  );
}

export default PencilButton;
