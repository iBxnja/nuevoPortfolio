import './App.css';
import { Header } from '../src/components/header/Header';
import { Main } from '../src/components/main/Main';
import { Footer } from '../src/components/footer/Footer';

function App() {
  return (
    <>
    {/* <div class="w-full h-full bg-fixed bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-700 via-neutral-950 to-slate-700"> */}
    <div class="w-full h-full bg-fixed">
      <Header/>
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
