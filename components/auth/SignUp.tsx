import { useState } from "react";
import auth from "@styles/Auth.module.css";
import { Eye, EyeOff, Mail, Check } from "lucide-react";
import { Footer } from "@components/common/Footer";
import { signUp as apiSignUp } from "@lib/api";

interface SignUpProps {
  onSwitchToSignIn: () => void;
  onSuccess?: () => void;
}

export function SignUp({ onSwitchToSignIn, onSuccess }: SignUpProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak cocok");
      return;
    }
    setLoading(true);
    try {
      const res = await apiSignUp({ username, email, gender, password });
      setMessage("Akun berhasil dibuat");
      console.log(res);
      onSuccess?.();
    } catch (err: any) {
      setError(err?.message ?? "Gagal mendaftar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={auth.page}>
      <main className={auth.main}>
        <h1 className={auth.title}>Buat Akun</h1>
        <p className={auth.subtitle}>Masukin data diri berikut untuk membuat akun</p>

        <div className={auth.card}>
          <form onSubmit={handleSignUp}>
            <div className={auth.grid2}>
              <div>
                <label htmlFor="username" className={auth.label}>Nama Pengguna</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Fomofomo"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={auth.input}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={auth.label}>Email</label>
                <div className={auth.passwordRow}>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${auth.input} ${auth.inputWithIcon}`}
                    required
                  />
                  <Mail className={auth.inputIcon} width={20} height={20} />
                </div>
              </div>
            </div>

            <div className={auth.groupGap}>
              <label className={auth.label}>Jenis Kelamin</label>
              <div className={auth.grid2}>
                <label className={auth.label} htmlFor="gender-pria">
                  <input
                    id="gender-pria"
                    type="radio"
                    name="gender"
                    value="pria"
                    checked={gender === "pria"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Pria
                </label>
                <label className={auth.label} htmlFor="gender-wanita">
                  <input
                    id="gender-wanita"
                    type="radio"
                    name="gender"
                    value="wanita"
                    checked={gender === "wanita"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Wanita
                </label>
              </div>
            </div>

            <div className={`${auth.grid2} ${auth.groupGap}`}>
              <div>
                <label htmlFor="password" className={auth.label}>Kata Sandi</label>
                <div className={auth.passwordRow}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${auth.input} ${auth.inputWithIcon}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={auth.toggleBtn}
                  >
                    {showPassword ? <EyeOff width={20} height={20} /> : <Eye width={20} height={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className={auth.label}>Konfirmasi Kata Sandi</label>
                <div className={auth.passwordRow}>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`${auth.input} ${auth.inputWithIcon}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={auth.toggleBtn}
                  >
                    {showConfirmPassword ? <EyeOff width={20} height={20} /> : <Eye width={20} height={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className={auth.validList}>
              <div className={auth.validRow}>
                <div className={`${auth.validDot} ${hasMinLength ? auth.validOn : auth.validOff}`}>
                  {hasMinLength && <Check width={12} height={12} />}
                </div>
                <span>Kolom password harus setidaknya 8 karakter.</span>
              </div>
              <div className={auth.validRow}>
                <div className={`${auth.validDot} ${hasUpperCase ? auth.validOn : auth.validOff}`}>
                  {hasUpperCase && <Check width={12} height={12} />}
                </div>
                <span>Harus ada 1 huruf besar.</span>
              </div>
              <div className={auth.validRow}>
                <div className={`${auth.validDot} ${hasLowerCase ? auth.validOn : auth.validOff}`}>
                  {hasLowerCase && <Check width={12} height={12} />}
                </div>
                <span>Harus ada 1 huruf kecil.</span>
              </div>
            </div>

            <div className={auth.checkboxRow}>
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <label htmlFor="terms" className={auth.label}>
                I agree with <a href="#" className={auth.linkBtn}>Terms of Use</a> and <a href="#" className={auth.linkBtn}>Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className={auth.cta}
              disabled={loading || !agreeToTerms || !hasMinLength || !hasUpperCase || !hasLowerCase}
            >
              Sign Up
            </button>
          </form>

          <div className={auth.linkRow}>
            <p>Already have an account?</p>
            <button onClick={onSwitchToSignIn} className={auth.linkBtn}>Sign In</button>
          </div>
        </div>
      </main>
      {error && <p style={{ color: "#e31e45", textAlign: "center", marginTop: "0.5rem" }}>{error}</p>}
      {message && <p style={{ color: "#16a34a", textAlign: "center", marginTop: "0.5rem" }}>{message}</p>}
      <div className={auth.footerSpacer} />
      <Footer />
    </div>
  );
}
