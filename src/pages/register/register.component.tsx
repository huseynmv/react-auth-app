import { useCallback, useMemo } from "react";
import { Button, Form, Input, FormRule } from "antd";
import bgLeft from "../../assets/images/statics/background-left.png";
import bgRight from "../../assets/images/statics/background-right.png";
import { useRegisterStyles } from "./register.style";
import { useRegister } from "./actions/register.mutation";
import { IRegisterFormValues } from "./register";

const RegisterComponent = () => {
  const { mutate, isLoading } = useRegister();

  const styles = useRegisterStyles();

  const initialValues: IRegisterFormValues = {
    email: "",
    username: "",
    password: "",
    number: "",
  };
  const onSubmit = useCallback(
    (values: IRegisterFormValues) => {
      mutate(values);
    },
    [mutate]
  );

  const rules: { [key: string]: FormRule[] } = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: "Iinput required",
        },
        {
          // add a pattern for email regex
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Invalid email",
        },
      ],
      password: [
        {
          required: true,
          message: "Input required",
        },
      ],
    }),
    []
  );

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={bgLeft} alt="" />
        </div>
        <div className={styles.right}>
          <img src={bgRight} alt="" />
        </div>
      </div>
      <div className={styles.form}>
        {/* <div className={styles.title}>
          <p>Welcome to the site</p>
        </div>
        <p className={styles.subTitle}>Sign Up</p> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            // padding: 50,
          }}
        >
          <div>
            <p style={{ fontSize: 20, fontWeight: "400" }}>Welcome to Site</p>
            <p style={{ fontSize: 55, fontWeight: "500" }}>Sign Up</p>
          </div>
          <div
            style={{
              paddingLeft: 121,
            }}
          >
            <p style={{ fontSize: 13, color: "#8d8d8d", fontWeight: "400" }}>
              Having Account?
            </p>
            <p style={{ fontSize: 13, color: "#B87514", fontWeight: "400" }}>
              Sign in
            </p>
          </div>
        </div>
        <Form
          name="login"
          layout="vertical"
          onFinish={onSubmit}
          initialValues={initialValues}
        >
          <Form.Item
            rules={rules.email}
            name="email"
            label="Enter your username or email address"
            style={{ marginTop: 15 }}
          >
            <Input placeholder="Username or email" type="email" />
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Item
              //   rules={rules.email}
              style={{ marginRight: 20 }}
              name="username"
              label="User name"
            >
              <Input
                placeholder="Username or email"
                type="username"
                name="username"
              />
            </Form.Item>
            <Form.Item name="number" label="Contact Number">
              <Input placeholder="Number" type="" />
            </Form.Item>
          </div>
          <Form.Item name="password" label="Enter your password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              style={{
                width: "100%",
                backgroundColor: "#E48700",
                color: "white",
              }}
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterComponent;