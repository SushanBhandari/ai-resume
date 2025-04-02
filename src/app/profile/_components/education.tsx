import React from "react";
import { Button, Form, Input } from "antd";
import { Trash2 } from "lucide-react";
function Education() {
  return (
    <div>
      <Form.List name="education">
        {(fields, { add, remove }) => {
          return (
            <div>
              <div className="flex gap-5 items-center">
                <h1 className="text-lg font-bold textgray-500">Education</h1>
                <Button size="small" onClick={() => add()}>
                  {" "}
                  Add education
                </Button>
              </div>
              <div className="flex flex-col gap-5">
                {fields.map((field, index) => (
                  <div className="grid grid-cols-3 gap-5">
                    <Form.Item
                      label="Qualification"
                      name={[field.name, "qualification"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="year of passing"
                      name={[field.name, "yearOfPassing"]}
                    >
                      <Input />
                    </Form.Item>
                    <Trash2 />
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Form.List>
    </div>
  );
}

export default Education;
