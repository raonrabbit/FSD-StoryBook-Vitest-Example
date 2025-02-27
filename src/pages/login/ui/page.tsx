import { loginWithGoogle } from "@/shared/api/auth";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      setLoginSuccess(true);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[rgba(96,116,198,1)]">
      <motion.div
        className="w-52 h-52 flex items-center justify-center flex-col gap-4"
        initial={{ y: 0 }}
        whileHover={{ y: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <AnimatePresence>
          {!loginSuccess && (
            <motion.div
              className="text-2xl"
              initial={{ y: 0, opacity: 1 }}
              animate={loginSuccess ? { y: -200, opacity: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              ELEVATHIS
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="google-login-button ring-gray-200 ring-2 rounded-lg px-4 py-1 bg-transparent transition-all"
          whileHover={{ y: 5 }}
          whileTap={{ y: -5 }}
          onClick={handleLogin}
        >
          Google 로그인
        </motion.button>
      </motion.div>
    </div>
  );
}
