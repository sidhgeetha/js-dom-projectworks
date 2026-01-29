const searchEL = document.getElementById("searchButton");
const inputEl = document.getElementById("input");

searchEL.addEventListener("click", findUser);

inputEl.addEventListener("keydown", (e) => {
  if (e.key == "Enter") findUser();
});

//syncronous fun
function getName(input) {
  input = input.trim();
  if (input.includes("github.com")) {
    try {
      const url = new URL(input);
      const name = url.pathname.split("/").filter(Boolean);
      return name[0];
    } catch {
      return input;
    }
  }

  return input;
}

async function findUser() {
  let username = inputEl.value.trim();
  const seeProfile = document.getElementById("profile");
  if (!username) {
    showError("Please enter a username");
    return;
  }

  //calling getname function
  //JS waits at await fetch(...)
  // //Only after extractUsername() finishes

  username = getName(username);

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("user not found");

    const data = await response.json();
    showUser(data);
  } catch (error) {
    showError(error.message);
  }
}

function showError(msg) {
  document.getElementById("profile").innerHTML = `
    <div class="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-center">
      ${msg}
    </div>
  `;
}

function showUser(data) {
  const result = document.getElementById("profile");

  result.innerHTML = `
  <div class="bg-gray-800 rounded-xl text-white  w-[400px] relative ">


   

    <div class="p-5">


      <button id="closeBtn"
        class="absolute top-3 right-3 text-gray-400 cursor-pointer  hover:text-red-500 active:hover:text-red-500 focus:hover:text-red-500 text-xl font-bold">
        ✕
      </button>

      <div class="flex items-center gap-4">
        <img src="${data.avatar_url}" 
          class="w-20 h-20 rounded-full border-2 border-green-500" />

        <div class="flex-1">
          <h2 class="text-xl font-bold">${data.name || data.login}</h2>
          <p class="text-gray-400">@${data.login}</p>
          <p class="text-gray-400">${data.location || ""}</p>
        </div>
      </div>

      <p class="text-sm text-gray-300 mt-3">
        ${data.bio || "No bio available"}
      </p>

      <div class="grid grid-cols-3 gap-4 text-center mt-4">
        <div>
          <p class="font-bold">${data.public_repos}</p>
          <p class="text-xs text-gray-400">Public Repos</p>
        </div>
        <div>
          <p class="font-bold">${data.followers}</p>
          <p class="text-xs text-gray-400">Followers</p>
        </div>
        <div>
          <p class="font-bold">${data.following}</p>
          <p class="text-xs text-gray-400">Following</p>
        </div>
      </div>

     <a href="${data.html_url}" target="_blank"
  class="flex items-center justify-center gap-2 mt-4 bg-green-500 text-black font-semibold py-2 rounded-lg hover:bg-green-600 transition">
  <i data-lucide="github" class="w-5 h-5"></i>
  <span>View Profile</span>
</a>



      <p class="text-sm text-gray-400 mt-6 text-right">
        Joined ${new Date(data.created_at).toDateString()}
      </p>
      </div>
    </div>
  `;

  document.getElementById("closeBtn").addEventListener("click", () => {
    result.innerHTML = "";
    input.value = "";
    localStorage.removeItem("lastUser");
  });
  lucide.createIcons();
}
