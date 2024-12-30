import React from 'react';
import Section from './Section';
import StackIcon from './StackIcon';
import Linkedin from './Linkedin';

const About = () => {
  return (
    <Section className="mt-32 mb-32">
      <div className="grid grid-cols-4 grid-rows-3 gap-6 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg h-[36rem]">
        <div className="col-span-2 row-span-2 bg-gray-700 rounded-lg p-6 flex items-center justify-center text-white h-full">
          <h2 className="text-3xl font-semibold">About Me</h2>
        </div>

        <div className="col-span-2 bg-gray-800 rounded-lg p-6 flex items-center justify-center text-white h-full">
          <h2 className="text-2xl font-medium">Contact Me</h2>
        </div>

        <div className="col-span-2 row-span-2 bg-gray-800 rounded-lg p-6 text-white h-full">
          <h2 className="text-3xl font-semibold mb-6">My Stack</h2>
          <div className="flex space-x-6">
            <StackIcon stack="react" />
            <StackIcon stack="tailwind" />
            <StackIcon stack="next" />
          </div>
        </div>
      <div className="col-span-1 bg-gray-800 rounded-lg p-6 flex items-center justify-center text-white h-full">
          <Linkedin/>
      </div>

        <div className="col-span-1 bg-gray-800 rounded-lg p-6 flex items-center justify-center text-white h-full">
          <h3 className="text-xl">Follow Me on GitHub</h3>
        </div>
      </div>
    </Section>
  );
};

export default About;
