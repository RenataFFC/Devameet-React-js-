import { useState } from "react";
import { RoomObjects } from "../room/RoomObjects";
import { useNavigate } from "react-router-dom";
import { MeetList } from "./MeetList";
import { MeetUserHeader } from "./MeetUserHeader";


export const MeetHome = () => {

  const navigate = useNavigate();
  const [objects, setObjects] = useState([]);
  const [link, setLink] = useState('');

  const enterRoom = () => {
      navigate('/room/'+link);
  }

  return(
      <div className="container-principal">
          <div className="container-meet">
              <MeetUserHeader />
              <MeetList setObjects={setObjects} setLink={setLink}/>
          </div>
          {objects?.length > 0 && <RoomObjects objects={objects} enterRoom={enterRoom}/>}
      </div>
  );
}

