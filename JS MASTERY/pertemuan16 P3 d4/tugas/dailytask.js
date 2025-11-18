
//  SOAL 1 

function loadUserProfile(username) {
  console.log("⏳ Status: PENDING... mengambil data user...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
        reject("Username tidak boleh kosong!");
      } else {
        resolve({
          username,
          name: "Santri Programmer",
          level: "Noob"
        });
      }
    }, 2000);
  });
}
// nambah log sebelum 
console.log("sebelum", loadUserProfile);


loadUserProfile("ghifari")
  .then((user) => {
    console.log("✅ Status: SUCCESS");
    console.log("Data user:", user);

localStorage.setItem("profil", JSON.strimgify(user))
  })
  .catch((err) => {
    console.log("❌ Status: REJECT");
    console.error("Error:", err);
  });


// SOAL 2

function checkConnection() {
  console.log("🔍 Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; // 70% online
      if (isOnline) {
        resolve("Koneksi stabil. ✅");
      } else {
        reject("Tidak ada koneksi internet. ❌");
      }
    }, 1000);
  });
}

function getLastConnectionStatus() {
  return localStorage.getItem("connection_status");
}


checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("REJECT:", error);
  });



// soal 3

function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "id",
        notifications: true
      });
    }, 500);
  });
}

getSettings()
  .then((settings) => {
    console.log("Object settings:", settings);
    return JSON.stringify(settings);
  })
  .then((settingsJSON) => {
    console.log("Settings dalam JSON:", settingsJSON);
  });