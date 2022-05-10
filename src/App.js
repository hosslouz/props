import "./App.css";
import Profile from "./Profile/Profile";
import jo from "./Profile/jo.PNG";

function App() {
  function handleName(name) {
    alert(`hello this is sparta ${name}`);
  }
  const fullName = "Houssem";
  const bio = "cute";
  const profession = "developper";
  return (
    <div className="prof">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      />

      <img src={jo} />
    </div>
  );
}

export default App;
