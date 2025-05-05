import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import connectDB from "@/lib/mongodb";
import User from "@/lib/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();
        console.log("User model in signIn:", User);
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            email: user.email,
            name: user.name,
            provider: account.provider,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session }) {
      try {
        await connectDB();
        console.log("User model in session:", User);
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.id = dbUser._id.toString();
        }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
