import React from 'react'
import { experiences } from "../constants"
import { Timeline } from '../components/Timeline';

const Experiences = () => {
  return <section id="work" className="w-full">
    <Timeline data={experiences}/>
  </section>;
};

export default Experiences