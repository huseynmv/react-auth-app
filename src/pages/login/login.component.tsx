import { useCallback, useMemo } from "react";
import { Button, Form, Input, FormRule } from "antd";
import { useLoginStyles } from "./login.style";
import bgLeft from "../../assets/images/statics/background-left.png";
import bgRight from "../../assets/images/statics/background-right.png";
import { useLogin } from "./actions/login.mutation";
import { ILoginFormValues } from "./login";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";
import colors from "../../assets/styles/abstracts/color";

const LoginComponent = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useLogin();

  const styles = useLoginStyles();

  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };
  const onSubmit = useCallback(
    (values: ILoginFormValues) => {
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
          <img src={bgLeft} alt="" />
        </div>
        <div className={styles.right}>
          <img src={bgRight} alt="" />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
          <p>Welcome to the site</p>
        </div>
        <p className={styles.subTitle}>Sign In</p>
        <Form
          name="login"
          layout="vertical"
          onFinish={onSubmit}
          initialValues={initialValues}
        >
          <Form.Item
            rules={rules.email}
            required={false}
            style={{ marginTop: 38 }}
            name="email"
            label={
              <p style={{ fontSize: "16px" }}>
                Enter your username or email address
              </p>
            }
          >
            <Input placeholder="Username or email" type="email" />
          </Form.Item>
          <Form.Item
            rules={rules.password}
            required={false}
            style={{ marginTop: 38 }}
            name="password"
            label="Enter your password"
          >
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              loading={isLoading}
              style={{
                width: "100%",
                fontSize: 16,
                backgroundColor: "#E48700",
              }}
              className="w-100"
              type="primary"
              htmlType="submit"
            >
              Sign In
            </Button>
            <span style={{ marginTop: 33, marginBottom: 33 }}>or</span>
            <Button
              style={{
                width: "100%",
                fontSize: 16,
                backgroundColor: colors.buttonSecondaryColor,
                color: colors.secondaryButtonTextColor,
              }}
              className="w-100"
              type="primary"
              htmlType="submit"
              onClick={() => navigate(Routes.register)}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
