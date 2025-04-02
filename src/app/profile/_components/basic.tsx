import React from "react";
import { Form, Input } from "antd";
function Basic() {
  return (
    <div className="'grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      <Form.Item label="Name" name="name" required>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" required>
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone" required>
        <Input />
      </Form.Item>
      <Form.Item label="Portfolio" name="portfolio" required>
        <Input />
      </Form.Item>
      <Form.Item label="Career objective" name="CareerObjective">
        <Input.TextArea rows={4} />
      </Form.Item>
    </div>
  );
}

export default Basic;
