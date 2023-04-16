
import useLS from "./hooks/useLS";
import IsBilgi from "./IsBilgi";
import Kisi from "./Kisi";

function App() {


   const [kisiNo, kisiNoGuncelle] = useLS("kisiNo", 1)

  return (
    <>
      <Kisi kisiNo={kisiNo} />
      <IsBilgi isNo={4} />
      <IsBilgi isNo={3} />
      <IsBilgi isNo={12} />
      <IsBilgi isNo={43} />
      <IsBilgi isNo={78} />
      <IsBilgi isNo={65} />
    </>
  );

}

export default App;
