// pages/auth/signin.js
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} style={{ margin: "10px 0" }}>
          <button
            onClick={() => signIn(provider.id)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

// Fetch the available providers on the server side to pass to the component
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
