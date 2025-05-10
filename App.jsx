import "./App.css";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h1>📡 Access Map API Documentation</h1>
      <p>This is a lightweight documentation interface for your public API.</p>

      <h2>🔐 Authentication</h2>
      <p>
        Use the following API key (as a bearer token or header):
        <br />
        <code>
          apikey: YOUR_API_KEY
        </code>
      </p>

      <h2>📍 Endpoints</h2>

      <h3>1. <code>GET /access_points</code></h3>
      <p>Returns a list of all access points (e.g., stairs, lifts, ramps).</p>
      <pre>
        GET https://kzlgaubqqaopbutkrbwk.supabase.co/rest/v1/access_points?select=*
      </pre>

      <h3>2. <code>GET /towers</code></h3>
      <p>Returns a list of towers (stations or buildings with access info).</p>
      <pre>
        GET https://kzlgaubqqaopbutkrbwk.supabase.co/rest/v1/towers?select=*
      </pre>

      <h2>🧪 Try It Out</h2>
      <p>You can test these endpoints directly in your browser or using tools like <strong>Postman</strong> or <strong>cURL</strong>.</p>

      <h2>📄 Notes</h2>
      <ul>
        <li>Enable filters using query parameters like <code>?type=lift</code> or <code>?step_free_access=eq.true</code>.</li>
        <li>Remember to include the API key in headers.</li>
      </ul>
    </div>
  );
}

export default App;
