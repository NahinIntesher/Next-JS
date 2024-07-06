import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      type: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (email === "nahinsikdar123@gmail.com" && password === "1111") {
          (id = 1),
            (employee_name = "Nahin"),
            (email = "nahinsikdar123@gmail.com");
        } else {
          return null;
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
