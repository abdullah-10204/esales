import { useState } from "react"
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col ">
      <div className="card bg-base-100 md:w-[500px] max-w-md shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input input-bordered mb-5 input-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="input input-bordered input-primary"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
            
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <p>
        New to the Website?
        <br />
        <Link to="/signup">
          <p className="text-center">Sign-Up</p>
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login
