import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google
  ],
  pages: {
    signIn: "/login", // Redirección si no hay sesión
  },
  callbacks: {
    session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
        session.user.role = token.role as "admin" | "user"
      }
      return session
    },
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        token.role = user.email === "bruno@enter.edu.pe" ? "admin" : "user"
      }
      return token
    },
  },
})

// Authentication:
// MinCommerce -> Accounts Google -> Valida authentication -> Code -> API_MinCommerce
// API_MinCommerce -> POST oauth2.google.com -> devuelve tokens y user

// Authorization:
// callback - jwt (token y user) -> [Asignamos ROLE al token]
// callback - session -> [Asignamos ROLE al session.user] -> Este se usa en los componentes.

// Enrutamiento:
// Tiempo del Request -> middleware [auth()]
// Ruta (app router) -> Componente.
