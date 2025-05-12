"use client";
import { Config, Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import "./style.css";

const config: Config<{
  HeadingBlock: {
    children: string;
  };
}> = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      defaultProps: {
        children: "TExt",
      },
      render: ({ children }) => {
        return (
          <div>
            {children}
            <ProfileCard />
            <div className="test">helo</div>
            {/* Add Tailwind CSS - Reference: https://tailwindflex.com/ */}
          </div>
        );
      },
    },
  },
};

const initialData = {};

export default function Client() {
  return <Puck config={config} data={initialData} />;
}

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src="profile.jpg" alt="Profile Picture" className="profile-img" />
      <h2>Jane Doe</h2>
      <p className="title">Software Developer</p>
      <p>San Francisco, CA</p>
      <a href="mailto:jane@example.com">Contact</a>
    </div>
  );
};
