const lists = document.querySelectorAll(".article-wrapper");
const breadcrumbs = document.querySelector(".breadcrumbs");
const header_wrapper = document.getElementById("header-wrapper");
const main_content = document.querySelector("#content-wrapper");
let grouping = [];
let t = [];

let myData = [];
let checkboxIssuesContainer = [];
let searchBoxInputValue = "";

mySticky = `
<div id="personalization" style="width: 130px; height: 130px; border-radius: 50%;background: linear-gradient(183deg, rgba(2,0,36,1) 0%, rgba(71,71,201,1) 45%, rgba(0,212,255,1) 100%); color: white; display: flex; align-items: center; justify-content: center; position: fixed; left: 220px;top: 10; z-index: 9999; ">
personalization#
</div>
`;
document.body.insertAdjacentHTML("afterbegin", mySticky);
// creating page
const paginationEl = document
  .querySelector(".pagination")
  .querySelector("ul")
  .querySelector("li:nth-last-of-type(2)")
  .querySelector("a").innerHTML;

let myStickyPage = false;
const paginationMainEl = document
  .querySelector(".pagination")
  .querySelector("ul")
  .querySelector("li:nth-last-of-type(2)")
  .querySelector("a").innerHTML;
//perpage options
const myStickyItems = `
  <div >
    <ul class="stickyUl">
      <li id="mySearchBox">
        <input type="search" >
        <button>Click</button>
      </li>
      <li style ="display: flex; align-items: center;gap:10px; flex-direction: column; ">
      <span style ="font-size: 15px; text-align:end">Choose how many items you want to see on each page</span> 
      <select class="optionsPerPage">
        <option  value="3">default</option>
        <option  value="5">5</option>
        <option  value="10">10</option>
        <option  value="15">15</option>
        <option  value="20">20</option>
        <option  value="45">45</option>
      </select>
      
      </li>
      
      <li id="paginationSticy">
        <button class="pageSelect" style="cursor: pointer; ">1</button>
        <button class="pageSelect" style="cursor: pointer;">2</button>
        <button class="pageSelect" style="cursor: pointer;">3</button>
        <button class="pageSelect" style="cursor: pointer;">4</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>
      </li>
      <li>
        <span>:Remove Advertising</span>
        <input type="checkbox" id="myCheckBox">
      </li>
      <li id="checkboxIssues_container">
        
        <div>
        <input type="checkbox" id="narmafzar" value="نرم افزا" class="myissues">
        <label for="narmafzar">نرم افزار</label>
        </div>
        <div>
        <input type="checkbox" id="bazi" value="بازی" class="myissues">
        <label for="bazi">بازی</label>
        </div>
        <div>
        <input type="checkbox" id="amoozesh" value="آموزش" class="myissues">
        <label for="amoozesh">آموزش</label>
        </div>
        <div>
        <input type="checkbox" id="mobile" value="موبایل" class="myissues">
        <label for="mobile">موبایل</label>
        </div>
        <div>
        <input type="checkbox" id="ketab" value="کتاب" class="myissues">
        <label for="ketab">کتاب</label>
        </div>
        <div>
        <input type="checkbox" id="film" value="فیلم" class="myissues">
        <label for="film">فیلم</label>
        </div>
        <div>
        <input type="checkbox" id="sout" value="صوت" class="myissues">
        <label for="sout">صوت</label>
        </div>
        <div>
        <input type="checkbox" id="graphics" value="گرافیک" class="myissues">
        <label for="graphics">گرافیک</label>
        </div>
        <div>
        <input type="checkbox" id="makintash" value="مکینتاش" class="myissues" >
        <label for="makintash">مکینتاش</label>
        </div>
        <div>
        <input type="checkbox" id="konsol" value="کنسول" class="myissues" >
        <label for="konsol">کنسول</label>
        </div>
        
      </li>
      
    </ul>
  </div>
`;

let myOptionIndexNumber = 0;
let perPageNumber = 3;
let pageNumber = 1;
const personalizationEl = document.getElementById("personalization");
//mysticky enter action

personalizationEl.addEventListener("click", (e) => {
  e.stopPropagation();
  //menu created
  personalizationEl.classList.add("active");
  e.target.innerHTML = myStickyItems;
  //add mysticky edited
  myStickyPage
    ? (document.getElementById("paginationSticy").innerHTML = myStickyPage)
    : "";
  let g = [...document.querySelectorAll(".pageSelect")].filter(
    (elem) => +elem.innerHTML == +pageNumber
  );
  g[0].classList.add("pageActive");
  //my checkbox element
  const checkbox = document.querySelector(`#myCheckBox`);

  // my perpage element
  const optionsPerPage = document.querySelector(".optionsPerPage");
  optionsPerPage.options[myOptionIndexNumber].selected = true;
  //options changing action
  optionsPerPage.addEventListener("change", (e) => {
    e.stopPropagation()
    //
    perPageNumber = e.target.value;
    myOptionIndexNumber = optionsPerPage.options.selectedIndex;
    paginationUntilWhen(perPageNumber, pageNumber);
  });
  //page tag action
  const paginationSticyEl = document.getElementById("paginationSticy");
  paginationSticyEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("pageSelect")) {
      pageNumber = +e.target.innerHTML;

      paginationUntilWhen(perPageNumber, pageNumber);
      if (+e.target.innerHTML <= 3) {
        paginationSticyEl.innerHTML = `
      <button class="pageSelect" style="cursor: pointer; ">1</button>
      <button class="pageSelect" style="cursor: pointer;">2</button>
      <button class="pageSelect" style="cursor: pointer;">3</button>
      <button class="pageSelect" style="cursor: pointer;">4</button>
      <button class="pageSelect" style="cursor: none;">...</button>
      <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>
      `;

        myStickyPage = `<button class="pageSelect" style="cursor: pointer; ">1</button>
      <button class="pageSelect" style="cursor: pointer;">2</button>
      <button class="pageSelect" style="cursor: pointer;">3</button>
      <button class="pageSelect" style="cursor: pointer;">4</button>
      <button class="pageSelect" style="cursor: none;">...</button>
      <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>`;
      } else if (+e.target.innerHTML < paginationMainEl - 2) {
        console.log("ok");
        paginationSticyEl.innerHTML = `<button class="pageSelect" style="cursor: pointer;">1</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML - 2
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML - 1
        }</button>
        <button class="pageSelect pageActive" style="cursor: pointer;">${+e
          .target.innerHTML}</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML + 1
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML + 2
        }</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>`;

        myStickyPage = `<button class="pageSelect" style="cursor: pointer;">1</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML - 2
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML - 1
        }</button>
        <button class="pageSelect pageActive" style="cursor: pointer;">${+e
          .target.innerHTML}</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML + 1
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${
          +e.target.innerHTML + 2
        }</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>`;
      } else if (+e.target.innerHTML > paginationMainEl - 2) {
        paginationSticyEl.innerHTML = `
        <button class="pageSelect" style="cursor: pointer; ">1</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${
          paginationMainEl - 3
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${
          paginationMainEl - 2
        } </button>
        <button class="pageSelect" style="cursor: pointer;">${
          paginationMainEl - 1
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>
        `;
        myStickyPage = `
        <button class="pageSelect" style="cursor: pointer; ">1</button>
        <button class="pageSelect" style="cursor: none;">...</button>
        <button class="pageSelect" style="cursor: pointer;">${
          paginationMainEl - 3
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${
          paginationMainEl - 2
        } </button>
        <button class="pageSelect" style="cursor: pointer;">${
          paginationMainEl - 1
        }</button>
        <button class="pageSelect" style="cursor: pointer;">${paginationMainEl}</button>
        `;
      }
    }
    console.log("perpage is" + perPageNumber);
  });
  //checkbox issues

  const checkboxIssues_containerEl = document.getElementById(
    "checkboxIssues_container"
  );
  checkboxIssues_containerEl.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.classList.contains("myissues")) {
      if (e.target.checked) {
        e.target.classList.add("clicked");
        checkboxIssuesContainer = [...new Set(checkboxIssuesContainer)];
        checkboxIssuesContainer.push(e.target.value);
        createItemByCheckBox(pageNumber, perPageNumber);
        console.log("first" + checkboxIssuesContainer);
      } else if (e.target.classList.contains("clicked")) {
        e.target.classList.remove("clicked");
        let index = checkboxIssuesContainer.findIndex(
          (elem) => elem === e.target.value
        );
        console.log(index);
        checkboxIssuesContainer.splice(index, 1);
        paginationUntilWhen(perPageNumber, pageNumber);
        // createItemByCheckBox(pageNumber ,perPageNumber)
        console.log("second" + checkboxIssuesContainer);
      }
    }
  });
  //Advertising

  checkbox.addEventListener("click", (e) => {
    e.preventDefault()
    //
    e.target.classList.toggle("checkBox");
    if (e.target.classList.contains("checkBox")) {
      [
        ...document.querySelectorAll(
          ".scroll-hide, .blogroll-inner-wrapper, #sidebar , .tabliq-468 , .last-topics-wrapper , #kaprila_p30download_ir_related-top-post ,.blogroll , div#lun-notif , .last-topics , .scroll-hide display_none , div#lun-notif.scroll-hide"
        ),
      ].forEach((elem) => elem.classList.toggle("display_none"));
      document.getElementById("content").classList.add("contentActive");
    }
  });

  //mySearchBox
  const mySearchBox = document.querySelector("#mySearchBox");
  const inputEL = mySearchBox.querySelector("input");
  const buttonEl = mySearchBox.querySelector("button");
  
  buttonEl.addEventListener("click", (e) => {
    e.stopPropagation();
   
    searchBoxInputValue = inputEL.value;

    if (inputEL.value === "") inputEL.value = "";
    else {
      
      searchBox(pageNumber, perPageNumber, inputEL.value );
      
    }
    
  });
});

//mysticky leave action
personalizationEl.addEventListener("mouseleave", (e) => {
  e.target.classList.remove("active");
  personalizationEl.innerHTML = `#personalization`;
});
// taking items from pcdownload , async
let i = 1;
async function paginationUntilWhen(perPage, page) {
  myData = [];

  switch (perPage) {
    case perPage <= 17:
      i = 1;
      break;
    case 17 < perPage <= 34:
      i = 2;

      break;
    case 34 < perPage <= 51:
      i = 3;

      break;
  }
  for (let f = page; f < page + i; f++) {
    const res = await fetch(`https://p30download.ir/page/` + f);
    const data = await res.text();
    const parser = new DOMParser();
    const document = parser.parseFromString(data, "text/html");
    myData.push(...document.querySelectorAll(".article-wrapper"));
  }
  createPerPage(myData, perPage);
}
//showing item , perpage
function createPerPage(data, numberOfItems) {
  let html = "";

  const mainContentEl = document.getElementById("main-content");
  console.log(searchBoxInputValue);
  if (searchBoxInputValue !== "") {
    searchBox(pageNumber, numberOfItems, searchBoxInputValue);
    console.log("okye");
  } else if (new Set(checkboxIssuesContainer).size !== 0) {
    createItemByCheckBox(pageNumber, perPageNumber);
    console.log("ok2");
  } else if (new Set(checkboxIssuesContainer).size === 0) {
    console.log("ok3");
    for (let i = 0; i < numberOfItems; i++) {
      html += data[i].innerHTML;
    }
    if (data.length < numberOfItems) console.log("yaft nashod");
    else mainContentEl.innerHTML = html;
  }
}
// checkbox
async function createItemByCheckBox(page, perPage) {
  console.log(perPage);
  myData = [];
  let newMyData1 = [];
  let newMyData2 = [];
  let html = "";
  const mainContentEl = document.getElementById("main-content");
  for (let f = page; f < paginationMainEl; f++) {
    console.log(f);
    const res = await fetch(`https://p30download.ir/page/` + f);
    const data = await res.text();
    const parser = new DOMParser();
    const document = parser.parseFromString(data, "text/html");
    newMyData1.push(...document.querySelectorAll(".article-wrapper"));

    for (let i = 0; i < new Set(checkboxIssuesContainer).size; i++) {
      newMyData1.forEach((elem) => {
        if (
          elem
            .querySelector("header")
            .querySelector("ul")
            .querySelector(".breadcrumbs")
            .innerHTML.indexOf([...new Set(checkboxIssuesContainer)][i]) > -1
        ) {
          newMyData2.push(elem);
        }
        newMyData2 = [...new Set(newMyData2)];
      });
    }
    //if everything thing be good (perpageItem we want to see)
    if (newMyData2.length > perPage) {
      console.log("its eaual");
      for (let i = 0; i < perPage; i++) {
        html += newMyData2[i].innerHTML;
      }

      mainContentEl.innerHTML = html;
      return;
    }
    // else {
    //   mainContentEl.innerHTML = `<span style="font-size: 80px; color: red;">NOT FOUND!!!</span>`;
    // }
  }
  if (newMyData2.length < perPage)
    mainContentEl.innerHTML = `<span style="font-size: 80px; color: red;">NOT FOUND!!!</span>`;
}

// serarch box

async function searchBox(page, perPage, inputELValue ) {
  myData = [];
  console.log(page + "page");
  let newMyData1 = [];
  let newMyData2 = [];
  let html = ""; 
  
  const mainContentEl = document.getElementById("main-content");
  mainContentEl.innerHTML="<spa>please wait to fetch</spa>"
  for (let f = page; f < 3000; f++) {
    newMyData1 =[]
    const res = await fetch(`https://p30download.ir/page/` + f);
    
    console.log(f);
    const data = await res.text();
    const parser = new DOMParser();
    const document = parser.parseFromString(data, "text/html");
    newMyData1.push(...document.querySelectorAll(".article-wrapper"));
    newMyData1.forEach((elem) => {
      console.log(elem.textContent);
      if(elem.textContent.includes(inputELValue)){
        newMyData2.push(elem);
        newMyData2 = [...new Set(newMyData2)];
      }
    });
    
    console.log(newMyData2.length + "lrnght");
    console.log(perPage + "perpage");
    if (newMyData2.length > perPage) {
      for (let i = 0; i < perPage; i++) {
        html += newMyData2[i].innerHTML;
      }
      
      mainContentEl.innerHTML = html;
      return;
    }
    // else {
    //   console.log("omadam paeen" + searchBoxInputValue);
    //   mainContentEl.innerHTML = ` <span style="font-size: 80px; color: red;">!!!NOT FOUND</span>
    //   <span style="display: block;font-size: 30px;color: red;">...wait a moment</span>`;
    //   searchBoxInputValue = "";
    //   paginationUntilWhen(perPageNumber, pageNumber);
    //   return;
    // }
  }
}
