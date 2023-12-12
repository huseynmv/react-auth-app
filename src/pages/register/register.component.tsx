import { useCallback, useMemo } from "react";
import { Button, Form, Input, FormRule } from "antd";
import bgLeft from "../../assets/images/statics/background-left.png";
import bgRight from "../../assets/images/statics/background-right.png";
import { useRegisterStyles } from "./register.style";
import { useRegister } from "./actions/register.mutation";
import { IRegisterFormValues } from "./register";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";

const RegisterComponent = () => {
  const navigate = useNavigate();
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
          <img src={bgLeft} className={styles.leftImg} alt="" />
        </div>
        <div className={styles.right}>
          <img src={bgRight} className={styles.rightImg} alt="" />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.header}>
          <div>
            <p className={styles.title}>Welcome to Site</p>
          </div>
          <div className={styles.headerLeftWrapper}>
            <p className={styles.headerLeftTitle}>Having Account?</p>
            <p
              className={styles.headerLeftSubtitle}
              onClick={() => navigate(Routes.login)}
            >
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
            required={false}
            name="email"
            label="Enter your username or email address"
            className={styles.label}
          >
            <Input
              placeholder="Username or email"
              type="email"
              style={{
                height: 57,
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                marginTop: 13,
              }}
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Item
              style={{ marginRight: 20 }}
              name="username"
              label="User name"
            >
              <Input
                placeholder="Username or email"
                type="username"
                name="username"
                style={{
                  height: 57,
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  marginTop: 13,
                }}
              />
            </Form.Item>
            <Form.Item name="number" label="Contact Number">
              <Input
                placeholder="Number"
                type=""
                style={{
                  height: 57,
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  marginTop: 13,
                }}
              />
            </Form.Item>
          </div>
          <Form.Item name="password" label="Enter your password">
            <Input
              placeholder="Password"
              type="password"
              style={{
                height: 57,
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                marginTop: 13,
              }}
            />
          </Form.Item>
          <div>
            <Button
              style={{ height: 54 }}
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className={styles.button}
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
