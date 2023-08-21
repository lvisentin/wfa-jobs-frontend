class AuthService {
  async login(email: string, password: string) {
    return await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
  }

  storeToken(token: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", token);
    }
  }
}

const authService = new AuthService();
export default authService;
