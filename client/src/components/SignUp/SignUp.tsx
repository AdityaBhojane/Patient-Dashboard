/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useSignup } from "@/hooks/auth/useSignUp"

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    signUpMutation(formData)
  };

  const { signUpMutation, isSuccess: success, isPending: loading, error: signUpError } = useSignup()

  useEffect(() => {
    if (signUpError) {
      // @ts-ignore
      setError(signUpError?.response?.data?.error)
    }
  }, [signUpError])



  return (
    <div className="max-w-md w-full bg-[#F8F1EA] p-8 rounded-2xl shadow-md border border-[#E6D8CA]">
      <h2 className="text-2xl font-semibold text-center text-[#3E2F2C] mb-6">
        Sing Up
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4 text-sm">
          Account created successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#3E2F2C] mb-1">
            Username
          </label>
          <input
            id="username"
            type="username"
            className="w-full px-4 py-2 border border-[#D6C1AF] rounded-md bg-white text-[#3E2F2C] focus:outline-none focus:ring-2 focus:ring-[#CE9B6A]"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            disabled={loading}
            required
            minLength={3}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#3E2F2C] mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-[#D6C1AF] rounded-md bg-white text-[#3E2F2C] focus:outline-none focus:ring-2 focus:ring-[#CE9B6A]"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#3E2F2C] mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-[#D6C1AF] rounded-md bg-white text-[#3E2F2C] focus:outline-none focus:ring-2 focus:ring-[#CE9B6A]"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            disabled={loading}
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#CE9B6A] hover:bg-[#b98250] text-white font-semibold py-2 rounded-md transition"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  )
}
