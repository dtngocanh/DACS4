"use client";
import { useEffect, useState } from 'react';
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';



const MeetingSetup = () => {
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error(
      'useStreamCall must be used within a StreamCall component.',
    );
  }
  useEffect(() => {
    if (isMicCamToggled) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggled, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
    </div>
  );
};

export default MeetingSetup;
