import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input/Input";
import { Checkbox } from "../../atoms/checkbox/Checkbox";
import Toast from "../../atoms/toast/Toast";

type LoginPageProps = {
  loginUrl: string;
  profileUrl: string;
  redirectUrl: string;
  logo?: string; // URL or path to the logo image
  backgroundImage?: string; // URL or path to the background image
};

export const LoginPage: React.FC<LoginPageProps> = ({
  loginUrl,
  profileUrl,
  redirectUrl,
  logo = "src/images/login.jpg", // Default logo path
  backgroundImage = "src/images/login.jpg", // Default background image path
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Login failed. Please check your credentials."
  );

  const dismissErrorToast = () => {
    setShowErrorToast(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setLoading(true);
    setShowErrorToast(false);

    try {
      const loginResponse = await axios.post(loginUrl, {
        Email: email,
        Password: password,
      });

      const token = loginResponse.data.token;
      Cookies.set("auth_token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const profileResponse = await axios.get(profileUrl);
      const { email: userEmail, roles } = profileResponse.data;

      Cookies.set("user_email", userEmail);
      if (Array.isArray(roles)) {
        Cookies.set("user_roles", roles.join(","));
      }

      window.location.href = redirectUrl;
    } catch (err) {
      console.error("Login failed", err);

      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 401 || err.response.status === 403) {
          setErrorMessage("Invalid email or password. Please try again.");
        } else if (err.response.status === 500) {
          setErrorMessage("Server error. Please try again later.");
        } else {
          setErrorMessage("Login failed. Please check your credentials.");
        }
      } else {
        setErrorMessage("Network error. Please check your connection.");
      }

      setShowErrorToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center w-full max-w-md min-h-screen p-6 mx-auto bg-white">
        {/* Header with Logo */}
        <div className="flex flex-col w-full mb-8 text-center">
          {logo && (
            <div className="h-12 mx-auto mb-10">
              <img
                src={logo}
                alt="Company Logo"
                className="object-contain w-auto h-full"
              />
            </div>
          )}
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Zenbyte Welcomes You!
          </h1>
          <p className="text-gray-600">Please Login</p>
        </div>

        {/* Tabs */}
        <div className="flex w-full mb-8">
          <h3 className="flex justify-center w-40 pb-2 mx-auto font-semibold border-b-2 border-zb-indigo-500 text-zb-indigo-500">
            Log In
          </h3>
        </div>

        {/* Email */}
        <div className="w-full mb-6">
          <Input
            variant="filled"
            label="Your Email Address"
            validationType="email"
            placeholder="Email"
            helperText={null}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="w-full mb-6 relative">
          <Input
            variant="filled"
            label="Enter Your Password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            helperText={null}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-[48px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between w-full mb-8">
          <Checkbox
            label="Remember Me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            variant="text-right"
          />
          <a
            className="font-semibold hover:underline text-zb-indigo-500 text-zb-desktop-bodySmallRegular"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <Button
          variant="filled"
          color="primary"
          size="large"
          className="w-full"
          showArrow={true}
          arrowPosition="right"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </Button>

        {/* Error Toast */}
        {showErrorToast && (
          <div className="w-full mb-zb-v-16 mt-2">
            <Toast
              title="Login Error"
              description={errorMessage}
              variant="error"
              dismissible={true}
              onDismiss={dismissErrorToast}
            />
          </div>
        )}
      </div>

      {/* Background Image Section - Only shown if backgroundImage is provided */}
      {backgroundImage && (
        <div className="relative hidden w-full h-screen md:w-1/2 md:flex">
          <img
            src={backgroundImage}
            alt="Login background"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
