"use client";
import type { FormProps } from "antd";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  select?: string;
  date?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const CandidatesPage = () => {
  return (
    <div>
      <Button type="primary" href="/" className="m-4">
        Accueil
      </Button>
      <h1>Informations personnelles du candidats</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          className="text-white"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Ma formation"
          name="select"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select>
            <Select.Option value="nextjs">NextJs</Select.Option>
            <Select.Option value="javascript">Javascript</Select.Option>
            <Select.Option value="react">React</Select.Option>
            <Select.Option value="python">Python</Select.Option>
            <Select.Option value="vue">Vue</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Date de naissance"
          name="DatePicker"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CandidatesPage;
