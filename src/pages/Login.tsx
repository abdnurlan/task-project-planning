import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const response = await login(values.username, values.password);
      console.log("Login Response:", response);

      if (response.status === 200) {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
          })
        );

        message.success("Giriş uğurla tamamlandı!");
        navigate("/");
      } else {
        message.error(
          "Giriş uğursuz oldu. Zəhmət olmasa məlumatları yoxlayın."
        );
      }
    } catch (error) {
      message.error("Giriş uğursuz oldu. Zəhmət olmasa məlumatları yoxlayın.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-12">GİRİŞ</h1>
      <div className="bg-[#1A1E27] p-8 rounded-lg shadow-lg w-full max-w-md min-w-[600px]">
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="text-white">İstifadəçi adı</span>}
            name="username"
            rules={[
              { required: true, message: "İstifadəçi adı tələb olunur!" },
            ]}
          >
            <Input
              placeholder="Daxil edin"
              className="bg-gray-700 text-white border-none focus:text-gray-700"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Şifrə</span>}
            name="password"
            rules={[{ required: true, message: "Şifrə tələb olunur!" }]}
          >
            <Input.Password
              placeholder="Daxil edin"
              className="bg-gray-700 border-none focus:text-gray-500"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-white text-[#B65F3B] border-none"
              loading={loading}
            >
              Giriş et
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="absolute bottom-0 w-full">
        <img
          src="/images/LoginFooter.svg"
          alt="Background"
          className="w-full h-32 object-cover"
        />
      </div>
    </div>
  );
}
