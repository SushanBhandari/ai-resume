"use client";
import React from "react";
import { Tabs } from "antd";
import Basic from "./_components/basic";
import Experience from "./_components/experience";
import Education from "./_components/education";
import Skills from "./_components/skills";
import { Form, Input } from "antd";
function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");
  return (
    <div>
      <h1 className="text-lg font-bold ">Profile</h1>
      <Form layout="vertical">
        <Tabs
          defaultActiveKey="1"
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
        >
          <Tabs.TabPane tab="Basic" key="1">
            <Basic />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Experience" key="2">
            <Experience />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Education" key="3">
            <Education />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Skills" key="4">
            <Skills />
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </div>
  );
}
export default ProfilePage;
