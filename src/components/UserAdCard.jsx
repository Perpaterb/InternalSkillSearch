import React from 'react'
import Skillbar from './subComponents/Skillbar'

export default function UserAdCard(p) {

  const userData = JSON.parse(p.jsonUserData)
  console.log(userData)
  
  return (

    <div className="card start-hero">
      <div className="card-header text-body-2 ">
        <h3>{userData.firstName} {userData.lastName}</h3>
      </div>
      <div className="card-body">
        <div>
          <strong>Bio:</strong> {JSON.stringify(userData.bio)}
        </div>
        <div>
          {/* <p className="text-body-2 start-hero-intro">Skills:</p> */}
          <div className="skillbars" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))'}}>
            {userData.skills.map((skill, index) => (
                <Skillbar key={index} {...skill} />
            ))}
          </div>
        </div>
        <div>
          <strong>Availability:</strong> {JSON.stringify(userData.availability)}
        </div>
        <div>
          <strong>Likes:</strong> {JSON.stringify(userData.likes)}
        </div>
        <div>
          <strong>Links:</strong> {JSON.stringify(userData.links)}
        </div>
      </div>
    </div>
  )
}
