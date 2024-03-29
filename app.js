// dynamic contacts
const MainContactContainer = document.querySelector(".contact-container");

// create message
let messageInpt = document.querySelector(".message-inpt");
let messagesElem = document.querySelector(".messages");
let sendBtn = document.querySelector(".send-btn");
let premition = true;
let i = 0;

//change chatPage
let clickElem = document.querySelectorAll(".clickME");
let informationArray = [
  {
    id: 1,
    name: "SavedMessages",
    profile: "#2233",
    preview: "",
    username: "Mettiuy",
    num: "09307041730",
    src: "ZZZ",
    active: "active",
    sliders: ["imgs/img1.jpg", "imgs/img2.jpg"],
    bio: "always on top",
    messageCount: 0 + "0",
  },
  {
    id: 2,
    name: "Mahyar",
    profile: "#2244",
    preview: "lorem ipusm salama",
    username: "MahyarOsix",
    num: "0915***3333",
    src: "ZZZ",
    sliders: ["imgs/img3.jpg", "imgs/img4.jpg"],
    bio: "test bio !!",
    messageCount: 20,
  },
  {
    id: 3,
    name: "Yasin",
    profile: "#9399",
    preview: "lorem ipusm salama",
    username: "Yasin1216",
    num: "0915***2222",
    src: "ZZZ",
    sliders: ["imgs/img5.jpg", "imgs/img6.jpg"],
    bio: "test bio !!",
    messageCount: 20,
  },
  {
    id: 4,
    name: "Ali ",
    profile: "#2422",
    preview: "lorem ipusm salama",
    username: "Ali-king",
    num: "0915***4444",
    src: "ZZZ",
    sliders: ["imgs/img7.jpg", "imgs/img8.jpg"],
    bio: "test bio !!",
    messageCount: 20,
  },
];

let chatNameElem = document.querySelector(".chat-name");
let chatProfileElem = document.querySelector(".chat-profile");
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();

// ham menu
let hamBtn = document.querySelector(".ham-btn");
let hamMenuElem = document.querySelector(".ham-menu");
let hamLiElems = document.querySelectorAll(".ham-menu li");

// ham menu2
let chatHamBtn = document.querySelector(".chat-ham");
let hamMenuElem2 = document.querySelector(".menu-num2");

// change theme
let themeContainerElem = document.querySelector(".theme-container");
let themeColorsElem = document.querySelectorAll(".theme");

//loading
let loadingElem = document.querySelector(".loading");

// setting
let settingElem = document.querySelector(".setting-container");
let closeSettingBtn = document.querySelector(".close-setting");
let setNumberElem = document.querySelector(".set-num");
let setNameElem = document.querySelector(".set-name");
let setBioElem = document.querySelector(".set-bio");
let settingImgContainer = document.querySelector(".setting-img-container");

//profile
let profileContainerElem = document.querySelector(".profile-container");
let closeProfileBtn = document.querySelector(".close-profile2");
let pNumElem = document.querySelector(".p-num");
let pNameElem = document.querySelector(".p-name");
let pBioElem = document.querySelector(".p-bio");
let profileImgContainer = document.querySelector(".profile-img-container");

// context Menu
let contextMenuElem = document.querySelector(".context-menu");

// editProfile
let editProfileContainerElem = document.querySelector(".editProfile-container");
let editChangesBtn = document.querySelector(".change-edit-submit");
let editNameInpt = document.querySelector(".change-edit-submit");
let editAboutInpt = document.querySelector(".edit-about");
let editUserNameInpt = document.querySelector(".edit-username");
let showEditBtn = document.querySelector(".show-edit");
let closeEditProfileBtn = document.querySelector(".close-editProfile");

// profile slider
let perSliderBtn = document.querySelector(".per-btn");
let nxtSliderBtn = document.querySelector(".nxt-btn");
// onload
let profileImgsArray = informationArray[0].sliders;

// create Message
function checkKey(event) {
  if (event.key == "Enter" && messageInpt.value !== "") {
    createMessage();
  }
}

function createMessage() {
  let inputValue = messageInpt.value;
  if (inputValue !== "") {
    let newMessage = document.createElement("div");
    newMessage.textContent = inputValue;
    newMessage.classList.add("newMessage");

    let readIcon = document.createElement("span");
    readIcon.classList.add("read-icon");

    let currentTimeElem = document.createElement("span");
    currentTimeElem.innerHTML = time;
    currentTimeElem.classList.add("current-time");

    newMessage.append(currentTimeElem);
    newMessage.append(readIcon);
    messagesElem.append(newMessage);
  }
  // scroll
  i++;
  if (i > 3) {
    console.log(messagesElem.scrollHeight);
    messagesElem.scrollTo(0, messagesElem.scrollHeight);
  }

  messageInpt.value = "";
}

// dynamic contactElem
informationArray.forEach(function (info) {
  createContactElements(info);
});

function createContactElements(info) {
  MainContactContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="contact-elem"><div class="clickME" onclick="findTargetElem(' +
      info.id +
      ')"></div><div class="contact-profile" style="background-image: url(' +
      info.sliders[0] +
      ') "></div><div class="contact-informations"><div class="contact-name">' +
      info.name +
      '</div><div class="contact-preview">' +
      info.preview +
      '</div></div><div class="contact-unRead">' +
      info.messageCount +
      '</div><div class="time">' +
      time +
      "</div></div>"
  );
}

// onload
setProfileInformation(informationArray[0]);
setSettingEdits(informationArray[0]);

function findTargetElem(infoId) {
  mainUser = informationArray.find(function (user) {
    return user.id == infoId;
  });

  setProfileInformation(mainUser);
}

function setProfileInformation(targetClickedArray) {
  profileContainerElem.style.filter = "blur(4px)";
  setTimeout(() => {
    profileContainerElem.style.filter = "blur(0px)";

    pNameElem.textContent = targetClickedArray.username;
    pNumElem.textContent = targetClickedArray.num;
    pBioElem.textContent = targetClickedArray.bio;
  }, 200);

  chatNameElem.textContent = targetClickedArray.name;
  chatProfileElem.style.backgroundImage =
    "url(" + targetClickedArray.sliders[0] + ")";

  changeSlider(targetClickedArray);
  loadingHandler();
}

//profile slider
function changeSlider(targetClickedArray) {
  profileImgsArray = targetClickedArray.sliders;
  profileImgContainer.style.backgroundImage =
    "url(" + targetClickedArray.sliders[0] + ")";
}

function setSettingEdits(targetArray) {
  setNumberElem.textContent = targetArray.num;
  setNameElem.textContent = targetArray.username;
  setBioElem.textContent = targetArray.bio;
}

// loading
function loadingHandler() {
  loadingElem.style.opacity = 1;
  setTimeout(function () {
    loadingElem.style.opacity = 0;
  }, 1900);
}

// ham menu
let isZindexAdeed = false;
function activeMenuHandler(menu) {
  if (isZindexAdeed == false) {
    menu.style.zIndex = "10";
    menu.style.display = "grid";
    isZindexAdeed = true;
    setTimeout(function () {
      menu.classList.add("ham-active");
    }, 100);
  } else if (isZindexAdeed == true) {
    setTimeout(function () {
      menu.style.zIndex = "-1";
      menu.style.display = "none";
    }, 100);
    menu.classList.remove("ham-active");
    isZindexAdeed = false;
  }
}

//change theme
hamLiElems.forEach(function (event) {
  event.addEventListener("click", ActiveThemeMenu);
});

//dark mode
let Isdark = false;
function ActiveThemeMenu(li) {
  if (li.target.id == 3) {
    showSetting();
  }

  if (li.target.id == 4) {
    themeContainerElem.classList.toggle("active-theme-container");
  }

  if (li.target.id == 5) {
    if (Isdark == false) {
      darkModeHandler();
    } else if (Isdark == true) {
      lightModeHandler();
    }
  }
}

function darkModeHandler() {
  document.documentElement.style.setProperty(
    "--dark-theme",
    "rgba(0, 0, 0, 0.916)"
  );
  document.documentElement.style.setProperty("--dark-color", "white");
  document.documentElement.style.setProperty(
    "--hover-color",
    "rgba(247, 233, 233, 0.304)"
  );
  document.documentElement.style.setProperty(
    "--linear-theme",
    " rgb(41, 40, 40)"
  );
  document.documentElement.style.setProperty(
    "--active-color",
    " rgba(247, 233, 233, 0.304)"
  );

  console.log("darked");
  Isdark = true;
  localStorage.setItem("Isdark", Isdark);
}

function lightModeHandler() {
  document.documentElement.style.setProperty("--dark-theme", "white");
  document.documentElement.style.setProperty("--dark-color", "black");
  document.documentElement.style.setProperty(
    "--hover-color",
    "rgba(0, 0, 0, 0.066)"
  );
  document.documentElement.style.setProperty(
    "--linear-theme",
    "rgb(234, 224, 224)"
  );
  document.documentElement.style.setProperty(
    "--active-color",
    "rgba(0, 0, 0, 0.103)"
  );

  console.log("lighted");
  Isdark = false;
  localStorage.setItem("Isdark", Isdark);
}

// change theme
let targetTheme;
themeColorsElem.forEach(function (event) {
  event.addEventListener("click", setTargetTheme);
});

function setTargetTheme(theme) {
  targetTheme = theme.target.id;
  colorThemeHandler(targetTheme);
}

function colorThemeHandler(targetTheme) {
  if (targetTheme == "red") {
    localStorage.setItem("color", targetTheme);

    document.documentElement.style.setProperty(
      "--purple-theme",
      "hsl(0, 87%, 56%)"
    );
  } else if (targetTheme == "green") {
    localStorage.setItem("color", targetTheme);

    document.documentElement.style.setProperty(
      "--purple-theme",
      "hsl(120, 61%, 50%)"
    );
  } else if (targetTheme == "purple") {
    localStorage.setItem("color", targetTheme);

    document.documentElement.style.setProperty("--purple-theme", "#a555ec");
  } else if (targetTheme == "blue") {
    localStorage.setItem("color", targetTheme);

    document.documentElement.style.setProperty(
      "--purple-theme",
      "hsl(183, 66%, 37%)"
    );
  }
  themeContainerElem.classList.remove("active-theme-container");
}

// getLocalStorage && zoomHandler
window.onload = function () {
  loadingHandler();

  let localIsdark = localStorage.getItem("Isdark");
  if (localIsdark == "true") {
    darkModeHandler();
  }
  let nowColor = localStorage.getItem("color");
  colorThemeHandler(nowColor);
};

// show & close  Setting
function showSetting() {
  settingElem.style.transform = "translateX(0)";
  setTimeout(function () {
    hamMenuElem.style.zIndex = "-1";
  }, 200);
  hamMenuElem.classList.remove("ham-active");
  isZindexAdeed = false;
}

function closeSetting() {
  settingElem.style.transform = "translateX(-430px)";
}

// showProfileWrapper
let targetName;
function showProfileWrapper() {
  profileContainerElem.style.transform = "translateX(0)";
  targetName = chatNameElem.innerHTML;
}

function closeProfileWrapper() {
  profileContainerElem.style.transform = "translateX(510px)";
}

// context Menu
function showContextMenu() {
  event.preventDefault();
  contextMenuElem.style.opacity = "0";

  let pageX = event.pageX;
  let pageY = event.pageY;

  contextMenuElem.style.zIndex = "99";
  setTimeout(() => {
    contextMenuElem.style.opacity = "1";
    contextMenuElem.style.left = pageX + "px";
    contextMenuElem.style.top = pageY + "px";
  }, 200);
}

function closeContextMenu() {
  contextMenuElem.style.zIndex = "-1";
  contextMenuElem.style.opacity = "0";
}

// edit profile changes
function setChangesOnProfile() {
  if (editAboutInpt.value !== "" && editUserNameInpt.value !== "") {
    informationArray[0].name = editUserNameInpt.value;
    informationArray[0].bio = editAboutInpt.value;
    informationArray[0].username = editUserNameInpt.value;
    setProfileInformation(informationArray[0]);
    setSettingEdits(informationArray[0]);
  } else {
    alert("Please fill the inputs :))");
  }
}
//show edit
function showEditWrapper() {
  editProfileContainerElem.style.transform = "translateX(0)";
}

function closeEditWrapper() {
  editProfileContainerElem.style.transform = "translateX(-430px)";
}

// profile slider
let sildeCounter = 0;
function nxtSlideHandler() {
  sildeCounter++;
  if (sildeCounter > profileImgsArray.length - 1) {
    sildeCounter = 0;
  }
  setSliderImgs(sildeCounter);
}

function perSlideHandler() {
  sildeCounter--;
  if (sildeCounter < 0) {
    sildeCounter = profileImgsArray.length - 1;
  }
  setSliderImgs(sildeCounter);
}

function setSliderImgs(sildeCounter) {
  let nowImg = profileImgsArray[sildeCounter];
  profileImgContainer.style.backgroundImage = "url(" + nowImg + ")";
}

messageInpt.addEventListener("keydown", checkKey);
sendBtn.addEventListener("click", createMessage);
hamBtn.addEventListener("click", function () {
  activeMenuHandler(hamMenuElem);
});
chatHamBtn.addEventListener("click", function () {
  activeMenuHandler(hamMenuElem2);
});
closeSettingBtn.addEventListener("click", closeSetting);
chatNameElem.addEventListener("click", showProfileWrapper);
chatProfileElem.addEventListener("click", showProfileWrapper);
closeProfileBtn.addEventListener("click", closeProfileWrapper);
messagesElem.addEventListener("click", closeContextMenu);
document.body.addEventListener("click", closeContextMenu);
messagesElem.addEventListener("contextmenu", showContextMenu);
document.body.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
editChangesBtn.addEventListener("click", setChangesOnProfile);
showEditBtn.addEventListener("click", showEditWrapper);
closeEditProfileBtn.addEventListener("click", closeEditWrapper);
perSliderBtn.addEventListener("click", perSlideHandler);
nxtSliderBtn.addEventListener("click", nxtSlideHandler);
/// going to a big refactor
