import React, { useState , useRef} from 'react';
import UserAdCard from "./UserAdCard";


export default function FindSkill() {

    const peopleData = JSON.parse(localStorage.getItem("peopleData"));
    console.log (peopleData)

    return (
    <main>
        
        <div className="container">
        
                            {/* <p className="text-body-2 start-hero-intro">FindSkill 1</p>
                <p className="text-display-2">
                FindSkill 2
                <br /> </p> */}
                {peopleData.map((userData, index) => (
                    <UserAdCard key={index} {...userData} />
                ))}
               
            <section className="next-steps-section">
                {/* <h2 className="text-heading-1">FindSkill 4</h2> */}
                <p className="text-body-3">Note: Skills are self rated compared to someone using that skill professionally for 5 years</p>
            </section>
            
        </div>
    </main>
    )
  }

  