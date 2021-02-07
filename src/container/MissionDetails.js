import React from "react"
import MissionCard from "../components/MissionCard"

export default (props) =>{
    const { missions } = props
        return (
            <div className="mission_cards_container">
           { missions.map((mission, index) => {
               let missionDetails = {
                 missionImage : mission.links.mission_patch_small,
                 missionName : `${mission.mission_name} #${mission.flight_number}`,
                 missionIds : mission.mission_id,
                 launchYear : mission.launch_year,
                 successLaunch : `${mission.launch_success}`
               }
                return <MissionCard key={index} missionDetails={missionDetails} />
            })
        }
            </div>
        )
    }