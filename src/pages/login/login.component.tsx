import React from "react";
import { Button, Card, Form, Input } from "antd";
import { useLoginStyles } from "./login.style";
import bgLeft from "../../assets/images/statics/background-left.png";
import bgRight from "../../assets/images/statics/background-right.png";

const LoginComponent = () => {
  const styles = useLoginStyles();

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
        <Form name="login" layout="vertical">
          <Form.Item
            style={{ marginTop: 38 }}
            name="Email"
            label="Enter your username or email address"
          >
            <Input placeholder="Username or email" type="email" />
          </Form.Item>
          <Form.Item
            style={{ marginTop: 38 }}
            name="Password"
            label="Enter your username or email address"
          >
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <div>
            <Button className="w-100" type="primary" htmlType="submit">
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
