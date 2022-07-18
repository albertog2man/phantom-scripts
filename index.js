const isPhantomInstalled = window.phantom?.solana?.isPhantom;
console.log("Phatom wallet detected: " + isPhantomInstalled);

const getProvider = () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};

const connect = async () => {
  const provider = getProvider();

  try {
    const resp = await provider.connect();
    console.log(resp.publicKey.toString());
  } catch (err) {
    console.log(err);
  }
};

connect();
