import React, { useState, useEffect } from 'react';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { firebase } from '../firebase';
import { collection, getDocs, getFirestore } from "@firebase/firestore"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Landing from "./Landing"
import FindSkill from "./FindSkill"
import UserAd from "./UserAd"
import Admin from "./Admin"

export default function LoggedIn() {
  
  const { user, logout } = useKindeAuth();
  const [page, setPage] = useState("Landing"); 
  const responsesCollectionRef = collection(firebase, "People")

  useEffect(() => {
    const getAllDataFromDB = async () => {
      const data = await getDocs(responsesCollectionRef)
      const peopleData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      window.localStorage.setItem("peopleData", JSON.stringify(peopleData))
    }
    getAllDataFromDB()
  }, [])

  const NaveChange = (newPageName) => {
    setPage(newPageName)
  }

  return (
    <>
      <header>
        <nav className="nav container" style={{ position: 'fixed', zIndex: '1000', height: '70px', backdropFilter: 'blur(2px)', backgroundColor: "#e4eef8c0",}}>
          <h1 className="text-display-3">Internal Skill Search</h1>

          {/* Navigation buttons */}
          <Box sx={{ flexGrow: 1 , paddingTop: 0, paddingLeft: 7}}>
            {(() => {
              if (page === "Landing") {
                return (
                  <Button sx={{ bgcolor: '#ffffff' }} className="text-subtle" onClick={() => NaveChange("Landing")}>
                  Home
                  </Button>
                )
              } else {
                return (
                  <Button className="text-subtle" onClick={() => NaveChange("Landing")}>
                  Home
                  </Button>
                )
              }
            })()}
            {(() => {
              if (page === "FindSkill") {
                return (
                  <Button sx={{ bgcolor: '#ffffff' }} className="text-subtle" onClick={() => NaveChange("FindSkill")}>
                  Find Skill
                  </Button>
                )
              } else {
                return (
                  <Button className="text-subtle" onClick={() => NaveChange("FindSkill")}>
                  Find Skill
                  </Button>
                )
              }
            })()}
            {(() => {
              if (page === "UserAd") {
                return (
                  <Button sx={{ bgcolor: '#ffffff' }} className="text-subtle" onClick={() => NaveChange("UserAd")}>
                  Your Ad
                  </Button>
                )
              } else {
                return (
                  <Button className="text-subtle" onClick={() => NaveChange("UserAd")}>
                  Your Ad
                  </Button>
                )
              }
            })()}
            {(() => {
              if (page === "Admin") {
                return (
                  <Button sx={{ bgcolor: '#ffffff' }} className="text-subtle" onClick={() => NaveChange("Admin")}>
                  Admin
                  </Button>
                )
              } else {
                return (
                  <Button className="text-subtle" onClick={() => NaveChange("Admin")}>
                  Admin
                  </Button>
                )
              }
            })()}
          </Box>
          <div className="profile-blob">
            <div>
              <p className="text-heading-2">
                {user?.given_name} {user?.family_name}
              </p>
              <Button className="text-subtle" onClick={logout}>
                Sign out
              </Button>
            </div>
          </div>
        </nav>
        <div style={{ position: 'fixed', top: 70, zIndex: '1000', height: '20px', width: "100%", backdropFilter: 'blur(1px)', backgroundImage: 'linear-gradient(#e4eef8c0,#e4eef800)'}} ></div>
      </header>

      {(() => {
        if (page === "FindSkill") {
          return (
            <FindSkill/>
          )
        } else if (page === "UserAd") {
          return (
            <UserAd/>
          )
        } else if (page === "Admin") {
          return (
            <Admin/>
          )
        } else {
          return (
            <Landing/>
          )
        }
      })()}
      
      <footer className="footer">
        <div className="container">
          <p className="footer-tagline text-body-3">
            Support{" "}
            <a className="link" href="andrew.strange@uts.edu.au">
              Andrew.Strange@uts.edu.au
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
