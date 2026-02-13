
import Homepage from "./pages/Homepage";
import HeartTrail from "./components/hearttrail";
import Timeline from "./pages/Timeline";
import AskPage from "./pages/AskPage";
import { yesContext, YesProvider } from "./components/yesContext";
import { useContext } from "react";

function AppContent() {
  const { yes } = useContext(yesContext)

  if (!yes) {
    return <AskPage />
  }

  return (
    <>
      <Homepage />
      <Timeline />
    </>
  )
}

function App() {
  return (
    <YesProvider>
      <HeartTrail />
      <AppContent />
    </YesProvider>
  )
}

export default App
