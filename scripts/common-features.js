// Signout
function addSignoutToTopBar(currentUser) {
  const signoutButton = document.querySelector("#sign-out");
  const loginButton = document.querySelector("#log-in");

  if (signoutButton && currentUser) {
    loginButton.classList.add("d-none");
    signoutButton.classList.remove("d-none");
    signoutButton.addEventListener("click", () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = "./index.html";
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } else {
    loginButton.classList.remove("d-none");
    signoutButton.classList.add("d-none");
  }
}

function addNavBarFeature(currentUser) {
  // Home Icon
  const homepageButton = document.querySelector("#bottom-icon-home");

  if (homepageButton) {
    homepageButton.addEventListener("click", function () {
      window.location.href = "./index.html";
    });
  }

  // Add Icon
  const addNewPostIcon = document.querySelector("#bottom-icon-add");
  if (addNewPostIcon) {
    addNewPostIcon.addEventListener("click", function () {
      if (currentUser) {
        window.location.href = "./new-post.html";
      } else {
        window.location.href = "./login.html";
      }
    });
  }

  // Profile Icon
  const profileIcon = document.querySelector("#bottom-icon-profile");
  if (profileIcon) {
    profileIcon.addEventListener("click", function () {
      if (currentUser) {
        window.location.href = "./profile.html";
      } else {
        window.location.href = "./login.html";
      }
    });
  }

  // Bookmark Icon
  const bookmarkIcon = document.querySelector("#bottom-icon-bookmark");
  if (bookmarkIcon) {
    bookmarkIcon.addEventListener("click", function () {
      if (currentUser) {
        window.location.href = "./bookmark.html";
      } else {
        window.location.href = "./login.html";
      }
    });
  }

  // Search Icon
  const searchIcon = document.querySelector("#bottom-icon-search");
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {
      window.location.href = "./search.html";
    });
  }
}

let CURRENT_USER = undefined;

// Call
isUserLoggedIn().then((currentUser) => {
  CURRENT_USER = currentUser;
  addSignoutToTopBar(currentUser);
  addNavBarFeature(currentUser);
});
