import React from "react";
import { Link, useLocation } from "react-router-dom";

import user from "../Images/user.svg";

const ContactDetail = () => {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem",
        }}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <img
              src={user}
              alt='user'
              width='250'
              height='250'
              style={{
                alignItems: "center",
                border: "solid 1px rgb(184, 193, 143)",
                borderRadius: "8px",
              }}
            />
            <div style={{ textAlign: "left", margin: "0.5rem" }}>
              <div style={{ fontWeight: "bold", margin: "5px" }}>
                {location.state.name}
              </div>
              <div style={{ margin: "5px" }}>{location.state.email}</div>
              <div style={{ margin: "5px" }}>{location.state.num}</div>
            </div>
          </div>
          <div style={{ textAlign: "center", margin: "0.5rem" }}>
            <Link to='/'>
              <button style={styles.button}>Back to Contact List</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;

const styles = {
  button: {
    backgroundColor: "#76E7CD",
    padding: "8px",
    fontWeight: "bold",
    fontSize: "1.3rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
