// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { nanoid } from 'nanoid';
// import React from 'react'
// import { useParams } from 'react-router-dom'


// const room = () => {
//    const {roomCode} =  useParams();
   

//    const mymeeting  = async (element)=>{
//       const userid = nanoid()
//       const appId = 1706026508
//       const serverSecret = "27583ba43ab137d5336adb90873d5426";
//       const  kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret, roomCode,userid,"samad ali");
//       const zc = ZegoUIKitPrebuilt.create(kitToken);
   
//    zc.joinRoom({
//       container :  element,
//       sharedLinks : [{
//         name : "Copy link",
//         url : `http://localhost:5173/room/${roomCode}`
//       }],
//       scenario :{
//         mode : ZegoUIKitPrebuilt.OneONoneCall,
//       },
//       showScreenSharingButton : false,


//    })
//    };

//   return (
//     <div className='pt-4'>
//         <div ref={mymeeting}/>
//     </div>
//   )
// }

// export default room


import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { nanoid } from 'nanoid';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomCode } = useParams();
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const startMeeting = async () => {
      const userId = nanoid();
      const appId = 1706026508;
      const serverSecret = '27583ba43ab137d5336adb90873d5426';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomCode, userId, 'samad ali');
      const zc = ZegoUIKitPrebuilt.create(kitToken);

      zc.joinRoom({
        container: meetingContainerRef.current,
        sharedLinks: [{
          name: 'Copy link',
          url: `http://localhost:5173/room/${roomCode}`,
        }],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    };

    if (roomCode) {
      startMeeting();
    }

    // Cleanup function to leave the room when the component unmounts
    return () => {
      if (meetingContainerRef.current) {
        ZegoUIKitPrebuilt.leaveRoom();
      }
    };
  }, [roomCode]);

  return (
    <div className="flex justify-center items-center pt-4">
      <div
        ref={meetingContainerRef}
        className=" h-full w-screen" // Adjust container to screen size
        style={{ minHeight: '500px' }} // Ensure minimum height on smaller devices
      />
    </div>
  );
};

export default Room;

