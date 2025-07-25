import React from 'react'
import { experiences } from "../constants"
import { Timeline } from '../components/Timeline';

const Experiences = () => {
  return <div className="w-full">
    <Timeline data={experiences}/>
  </div>;
};

export default Experiences