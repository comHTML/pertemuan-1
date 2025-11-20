
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


  // Utility: save username as a Promise
function saveUsername(username) {
    return new Promise((resolve, reject) => {
        if (!username || username.length < 3) {
            reject("Username minimal 3 karakter!");
        } else {
            try {
                localStorage.setItem("username", username);
                resolve(`Username "${username}" berhasil disimpan.`);
            } catch (e) {
                reject(`Gagal menyimpan ke localStorage: ${e.message}`);
            }
        }
    });
}

// Example helper that returns a Promise resolving a fake profile
function loadUserProfile(username) {
    return new Promise((resolve, reject) => {
        // Simulate async fetch with setTimeout
        setTimeout(() => {
            if (!username) {
                reject('No username provided');
                return;
            }
            // Sample profile object
            const profile = {
                username,
                displayName: username.charAt(0).toUpperCase() + username.slice(1),
                joined: '2024-01-01'
            };
            resolve(profile);
        }, 1000);
    });
}

// Usage examples:
// 1) Attempt to save a short username (will reject) -> store error to localStorage
saveUsername('ab')
    .then((msg) => {
        console.log('SUCCESS:', msg);
        // on success, load the user profile
        return loadUserProfile(localStorage.getItem('username'));
    })
    .then((profile) => {
        if (profile) console.log('Loaded profile:', profile);
    })
    .catch((err) => {
        console.error('REJECT:', err);
        try {
            localStorage.setItem('last_error', String(err));
        } catch (e) {
            console.error('Failed to write last_error to localStorage:', e);
        }
    });

// 2) Successful flow example
saveUsername('Amin')
    .then((msg) => {
        console.log('SUCCESS:', msg);
        return loadUserProfile(localStorage.getItem('username'));
    })
    .then((profile) => console.log('Profile loaded (success flow):', profile))
    .catch((err) => {
        console.error('REJECT (success flow):', err);
        try { localStorage.setItem('last_error', String(err)); } catch (e) {}
    });
