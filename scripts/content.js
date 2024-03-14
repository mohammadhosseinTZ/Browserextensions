

const paginationEl = document
  .querySelector(".pagination")
  .querySelector("ul")
  .querySelector("li:nth-last-of-type(2)")
  .querySelector("a").innerHTML;
//element

const main_content = document.getElementById("main-content");
const blogroll = document.querySelector(".blogroll");
const tabliq_468 = document.querySelector(".tabliq-468");
const last_topics = document.querySelector(".last-topics");
//my variables
let pageNumber = 1;
let checkboxIssuesContainer = [];
let checkboxIssuesContainer2 = [];
const breadcrumbs = document.querySelector(".breadcrumbs");
let i = 1;
let perPageNumber = 17;
let paginationNumberOfEndPage = perPageNumber/17;
let newData = [];
let html = "";
let searchItem = "";
let perPageClicked = false;
let calledOnlyOnce = true;
let pageScrollNum = 1;
if (calledOnlyOnce) {
  showingItems(pageNumber, pageNumber);
  calledOnlyOnce = false;
}
//if perpage === 17
let myPaginationEl = `<div style="margin: 30px;" id="paginationSticy">
<button class="pageSelect pageActive" style="cursor: pointer; ">1</button>
 <button class="pageSelect"  style="cursor: pointer;">2</button>
 <button class="pageSelect"  style="cursor: pointer;">3</button>
 <button class="pageSelect"  style="cursor: pointer;">4</button>
 <button class="pageSelect"  style="cursor: none;">...</button>
 <button class="pageSelect"  style="cursor: pointer;">${paginationEl}</button>
</div>`;

main_content.innerHTML = `
${blogroll.innerHTML}
${tabliq_468.innerHTML}
${last_topics.innerHTML}
${myPaginationEl}
`;

//icon2
const myIcon2 = document.createElement("div");
myIcon2.style = style =
  "width: 300px; height: 100%; background-color: darkgrey;;position: fixed; left:-400px;; z-index: 9999;padding: 10px; align-items: center;";
myIcon2.classList.add("hide_icon2");
myIcon2.innerHTML = `<div id="myIcon2">
  <span id="close_item" style="cursor: pointer"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span>
  <div id="mySearchBox">
      <input type="search" placeholder="serach by value" width="200px" >
      <button>SEARCH</button>
  </div>
  <div style="text-align: center;">
    <span>:Remove Advertising</span>
    <input type="checkbox" id="myCheckBox" > 
  </div>
  <div id="pagesNum">
     <span style ="font-size: 12px; text-align:end">Choose how many pages you want to see on each page</span>
     <select class="optionsPerPage">
        <option  value="17" >default- 1 pages</option>
        <option  value="51">Pages-3  </option>
        <option  value="102">6-Pages  </option>
        <option  value="170">10-Pages  </option>
        <option  value="255">15-Pages  </option>
      </select>
  </div>
  
  <div id="checkboxIssues_container" style="padding: 5px;border: 1px solid black;">
    <div >
    <input type="checkbox" id="narmafzar" value="نرم افزا"  class="myissues">
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
    <input type="checkbox" id="sout" value=" صوت "   class="myissues">
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
  </div>
  <div style="text-align: end;">
    <span >Tell me which category you don't want to see</span>
    <div id="checkboxIssues_container2" style="padding: 5px;border: 1px solid black;">
    <div >
    <input type="checkbox" id="narmafzar2" value="نرم افزا" class="myissues2">
    <label for="narmafzar2">نرم افزار</label>
    </div>
    <div>
    <input type="checkbox" id="bazi2" value="بازی" class="myissues2">
    <label for="bazi2">بازی</label>
    </div>
    <div>
    <input type="checkbox" id="amoozesh2" value="آموزش" class="myissues2">
    <label for="amoozesh2">آموزش</label>
    </div>
    <div>
    <input type="checkbox" id="mobile2" value="موبایل" class="myissues2">
    <label for="mobile2">موبایل</label>
    </div>
    <div>
    <input type="checkbox" id="ketab2" value="کتاب" class="myissues2">
    <label for="ketab2">کتاب</label>
    </div>
    <div>
    <input type="checkbox" id="film2" value="فیلم" class="myissues2">
    <label for="film2">فیلم</label>
    </div>
    <div>
    <input type="checkbox" id="sout2" value=" صوت "   class="myissues2">
    <label for="sout2">صوت</label>
    </div>
    <div>
    <input type="checkbox" id="graphics2" value="گرافیک" class="myissues2">
    <label for="graphics2">گرافیک</label>
    </div>
    <div>
    <input type="checkbox" id="makintash2" value="مکینتاش" class="myissues2" >
    <label for="makintash2">مکینتاش</label>
    </div>
    <div>
    <input type="checkbox" id="konsol2" value="کنسول" class="myissues2" >
    <label for="konsol2">کنسول</label>
    </div>
    </div>
  </div>      
</div>`;

document.body.prepend(myIcon2);
document.getElementById("close_item").addEventListener("click", () => {
  myIcon2.classList.remove("active_icon2");
  myIcon2.classList.add("hide_icon2");
  myIcon.classList.remove("d-none");
  setTimeout(() => {
    myIcon.classList.add("d-flex");
  }, 1000);
});
//icon
const myIcon = document.createElement("div");
myIcon.style =
  "display: flex; align-items: center ; justify-content: center;background-color: white; width: 130px; height: 130px; border-radius:30px; position: fixed; left: 60px;top: 40; z-index: 9999;cursor: pointer";
myIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="54" viewBox="0 -960 960 960" width="54"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>`;
document.body.prepend(myIcon);
myIcon.addEventListener("click", () => {
  myIcon.classList.add("d-none");
  myIcon.classList.remove("d-flex");
  myIcon2.classList.add("active_icon2");
  myIcon2.classList.remove("hide_icon2");
});
// creating pagination

const paginationSticyEl = document.getElementById("paginationSticy");

//we need number of  initial page and number of the end page
const createItems = document.createElement("div");
const createResult = document.createElement("div");

async function showingItems(initialPage, howManyPage) {
  newData = [];
  pageScrollNum = 0;
  html = "";
  let stepperNUmCheckBox = 0;
  let stepperNUmCheckBox2 = 0;
  let stepperNUmCheckBox3 =0
  let stepperNUmCheckBoxArry = [];
  let searchNewData = [];
  let myCheckoxNewArray = [];
  let myCheckoxNewArray2 =[]
  let myCheckoxNewArray3 =[]
  let myCheckoxNewArrayIndex = 0;
  let myCheckoxNewArrayIndex2 = 0;
  let myCheckoxNewArrayIndex3 = 0;
  let myCheckoxNewArray2Length =0
 
  

  document.body.insertAdjacentHTML(
    "beforebegin",
    `
  <div class="sttepper">
      <div class="stteps"> 
      </div>
      <div class="myEnd">  
      </div>
   </div>`
  );

  document.querySelector(".sttepper").addEventListener("click", (e) => {
    if (e.target.classList.contains("sttep")) {
      document.querySelectorAll(".pageScrolled").forEach((elem) => {
        if (elem.querySelector("span").innerHTML === e.target.innerHTML) {
          elem.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      if (
        e.target.innerHTML ===
        document.querySelector(".pageScrolled").querySelector("span").innerHTML
      ) {
        document
          .querySelector(".pageScrolled")
          .querySelector("span")
          .scrollIntoView({ bahavior: "smooth", block: "center" });
      }
    }
  });
  //landing page
  const divLanding = document.createElement("div")
  divLanding.innerHTML="<h1>... PLEASE WAIT</h1>"
  divLanding.classList.add("landingDiv")
  document.body.after(divLanding)

  const steps = document.querySelector(".stteps");
  const myEnd = document.querySelector(".myEnd");
  steps.innerHTML = "";
  myEnd.innerHTML = "";
  myEnd.insertAdjacentHTML("beforeend", `<div class="sttepEnd" >PAGE</div>`);
  for (let f = initialPage; f <= howManyPage; f++) {
    const res = await fetch(`https://p30download.ir/page/` + f);
    const data = await res.text();
    const parser = new DOMParser();
    const document = parser.parseFromString(data, "text/html");
    

    newData.push(...document.querySelectorAll(".article-wrapper"));
    let xmlString = `<div><div class="pageScrolled"><span>${f}</span> <span>:PAGE</span> </div></div>`;
    let doc = new DOMParser().parseFromString(xmlString, "text/html");
    doc.querySelector("body").querySelector("div").classList.add(`doc${f}`);
    newData.push(doc.querySelector("body").querySelector("div"));
    //stepper

    if (!checkboxIssuesContainer.length > 0 && !checkboxIssuesContainer2.length > 0 && searchItem === "") {
      steps.insertAdjacentHTML(
        "beforeend",
        `
        <div class="myStteps" >
            <div class="sttep acttive" >${f}</div>
            <div class="linee" style="height: ${
              (500 - perPageNumber) / 14
            }px; "></div>
          </div>
        `
      );
    }
    //error when you have checkboxIssuesContainer && checkboxIssuesContainer2 together
    if(checkboxIssuesContainer.length > 0 && checkboxIssuesContainer2.length > 0)alert("OH SHIT!! YOU CAN`T DO IT.")
    //if we had a checkbox issues
    if (checkboxIssuesContainer.length > 0 && !checkboxIssuesContainer2.length > 0) {
      for (let i = 0; i < checkboxIssuesContainer.length; i++) {
        newData.forEach((elem) => {
          if (
            elem.classList.contains("article-wrapper") &&
            elem
              .querySelector("header")
              .querySelector("ul")
              .querySelector(".breadcrumbs")
              .innerHTML.indexOf(checkboxIssuesContainer[i]) > -1
          ) {
            myCheckoxNewArray.push(elem);
            stepperNUmCheckBoxArry.push(elem);
            
          }
          if (elem.classList.contains(`doc${f}`)) {
            myCheckoxNewArray.push(elem);
          }
        });
      }
      
   
      myCheckoxNewArray = [...new Set(myCheckoxNewArray)];
      //stepper
      
      stepperNUmCheckBoxArry.forEach((elem) => {
        elem.classList.contains("article-wrapper") ? stepperNUmCheckBox++ : "";
        stepperNUmCheckBoxArry.push(elem);
      });
      stepperNUmCheckBoxArry = [...new Set(stepperNUmCheckBoxArry)];
      steps.insertAdjacentHTML(
        "beforeend",
        `
        <div class="myStteps" >
            <div class="sttep acttive" >${f}</div>
            <div class="linee" style="height: ${
              ((stepperNUmCheckBox - stepperNUmCheckBox2) * 280) / perPageNumber
            }px; "></div>
          </div>
        `
      );

      if (myCheckoxNewArrayIndex + 1 >= myCheckoxNewArray.length) {
        const emptyString = `<div>"we did not find any articles on this page"</div>`;
        let doc = new DOMParser().parseFromString(emptyString, "text/html");
        const index = myCheckoxNewArrayIndex;
        myCheckoxNewArray.splice(index, 0, doc.querySelector("div"));
      }

      myCheckoxNewArrayIndex = myCheckoxNewArray.length;
      stepperNUmCheckBox2 = stepperNUmCheckBox;
      stepperNUmCheckBoxArry = [];
      stepperNUmCheckBox = 0;
      
     
    }
    //if we want to remove special item
    if (checkboxIssuesContainer2.length > 0 && !checkboxIssuesContainer.length > 0) {
      myCheckoxNewArray2 = newData;
      for (let i = 0; i < checkboxIssuesContainer2.length; i++) {
        myCheckoxNewArray3=[]
      
        myCheckoxNewArray2.forEach(elem =>{
          if(elem.classList.contains("article-wrapper")){
            if(elem
              .querySelector("header")
              .querySelector("ul")
              .querySelector(".breadcrumbs")
              .innerHTML.includes(checkboxIssuesContainer2[i]) === false){
                myCheckoxNewArray3.push(elem)
                stepperNUmCheckBoxArry.push(elem);
              }
          }
          if (elem.innerHTML.includes(`PAGE`)) {
          
            myCheckoxNewArray3.push(elem);
           
          }
        })
       
        myCheckoxNewArray2 =myCheckoxNewArray3
      }
      myCheckoxNewArray2 = [...new Set(myCheckoxNewArray2)];

      //stepper
     
      stepperNUmCheckBoxArry.forEach((elem) => {
        elem.classList.contains("article-wrapper") ? stepperNUmCheckBox++ : "";
        stepperNUmCheckBoxArry.push(elem);
      });
      stepperNUmCheckBoxArry = [...new Set(stepperNUmCheckBoxArry)];
      
      
      steps.insertAdjacentHTML(
        "beforeend",
        `
        <div class="myStteps" >
            <div class="sttep acttive" >${f}</div>
            <div class="linee" style="height: ${
              ((myCheckoxNewArray2.length  -myCheckoxNewArray2Length -1) * 20) /  stepperNUmCheckBox
            }px; "></div>
          </div>
        `
      );
      myCheckoxNewArray2Length = myCheckoxNewArray2.length 
      if (myCheckoxNewArrayIndex2 + 1 >= myCheckoxNewArray2.length) {
        const emptyString = `<div>"we did not find any articles on this page"</div>`;
        let doc = new DOMParser().parseFromString(emptyString, "text/html");
        const index = myCheckoxNewArrayIndex2;
        myCheckoxNewArray2.splice(index, 0, doc.querySelector("div"));
      }

      myCheckoxNewArrayIndex2 = myCheckoxNewArray2.length;
      stepperNUmCheckBox3 = stepperNUmCheckBox;
      stepperNUmCheckBoxArry = [];
      stepperNUmCheckBox3 = 0;
      
    }
    //if we had a search item
    if (searchItem !== ""&& !myCheckoxNewArray2.length > 0 && !myCheckoxNewArray.length > 0) {
     
      newData.forEach((elem) => {
        if (elem.textContent.includes(searchItem)) {
          searchNewData.push(elem);
          stepperNUmCheckBoxArry.push(elem);
        }
        if (elem.innerHTML.includes(`PAGE`)) {
          
          searchNewData.push(elem);
         
        }
        
        searchNewData = [...new Set(searchNewData)];
      });
         //stepper
      
         stepperNUmCheckBoxArry.forEach((elem) => {
          elem.classList.contains("article-wrapper") ? stepperNUmCheckBox++ : "";
          stepperNUmCheckBoxArry.push(elem);
        });
        stepperNUmCheckBoxArry = [...new Set(stepperNUmCheckBoxArry)];
        steps.insertAdjacentHTML(
          "beforeend",
          `
          <div class="myStteps" >
              <div class="sttep acttive" >${f}</div>
              <div class="linee" style="height: ${
                ((stepperNUmCheckBox - stepperNUmCheckBox2) * 280) / perPageNumber
              }px; "></div>
            </div>
          `
        );
  
        if (myCheckoxNewArrayIndex3 + 1 >= searchNewData.length) {
          const emptyString = `<div>"we did not find any articles on this page"</div>`;
          let doc = new DOMParser().parseFromString(emptyString, "text/html");
          const index = myCheckoxNewArrayIndex3;
          searchNewData.splice(index, 0, doc.querySelector("div"));
        }
  
        myCheckoxNewArrayIndex3 = searchNewData.length;
        stepperNUmCheckBox2 = stepperNUmCheckBox;
        stepperNUmCheckBoxArry = [];
        stepperNUmCheckBox = 0;
    }
    
  }
  
  searchItem !== ""&& !myCheckoxNewArray2.length > 0 && !myCheckoxNewArray.length > 0  ? (newData = searchNewData) : "";
  
  if(myCheckoxNewArray.length > 0){
    newData = myCheckoxNewArray;
    if(searchItem != ""){
      
      newData.forEach((elem) => {
        if (elem.textContent.includes(searchItem)) {
          searchNewData.push(elem);
          stepperNUmCheckBoxArry.push(elem);
        }
        if (elem.innerHTML.includes(`PAGE`)) {
          
          searchNewData.push(elem);
         
        }
        
        searchNewData = [...new Set(searchNewData)];
      });
         //stepper
      
         stepperNUmCheckBoxArry.forEach((elem) => {
          elem.classList.contains("article-wrapper") ? stepperNUmCheckBox++ : "";
          stepperNUmCheckBoxArry.push(elem);
        });
        stepperNUmCheckBoxArry = [...new Set(stepperNUmCheckBoxArry)];
        steps.insertAdjacentHTML(
          "beforeend",
          `
          <div class="myStteps" >
              <div class="sttep acttive" >${f}</div>
              <div class="linee" style="height: ${
                ((stepperNUmCheckBox - stepperNUmCheckBox2) * 280) / perPageNumber
              }px; "></div>
            </div>
          `
        );
  
        if (myCheckoxNewArrayIndex3 + 1 >= searchNewData.length) {
          const emptyString = `<div>"we did not find any articles on this page"</div>`;
          let doc = new DOMParser().parseFromString(emptyString, "text/html");
          const index = myCheckoxNewArrayIndex3;
          searchNewData.splice(index, 0, doc.querySelector("div"));
        }
  
        myCheckoxNewArrayIndex3 = searchNewData.length;
        stepperNUmCheckBox2 = stepperNUmCheckBox;
        stepperNUmCheckBoxArry = [];
        stepperNUmCheckBox = 0;
    }
  }
  
  if(myCheckoxNewArray2.length > 0){
    newData = myCheckoxNewArray2
    if(searchItem != ""){
      newData.forEach((elem) => {
        if (elem.textContent.includes(searchItem)) {
          searchNewData.push(elem);
          stepperNUmCheckBoxArry.push(elem);
        }
        if (elem.innerHTML.includes(`PAGE`)) {
          
          searchNewData.push(elem);
         
        }
        
        searchNewData = [...new Set(searchNewData)];
      });
         //stepper
      
         stepperNUmCheckBoxArry.forEach((elem) => {
          elem.classList.contains("article-wrapper") ? stepperNUmCheckBox++ : "";
          stepperNUmCheckBoxArry.push(elem);
        });
        stepperNUmCheckBoxArry = [...new Set(stepperNUmCheckBoxArry)];
        steps.insertAdjacentHTML(
          "beforeend",
          `
          <div class="myStteps" >
              <div class="sttep acttive" >${f}</div>
              <div class="linee" style="height: ${
                ((stepperNUmCheckBox - stepperNUmCheckBox2) * 280) / perPageNumber
              }px; "></div>
            </div>
          `
        );
  
        if (myCheckoxNewArrayIndex3 + 1 >= searchNewData.length) {
          const emptyString = `<div>"we did not find any articles on this page"</div>`;
          let doc = new DOMParser().parseFromString(emptyString, "text/html");
          const index = myCheckoxNewArrayIndex3;
          searchNewData.splice(index, 0, doc.querySelector("div"));
        }
  
        myCheckoxNewArrayIndex3 = searchNewData.length;
        stepperNUmCheckBox2 = stepperNUmCheckBox;
        stepperNUmCheckBoxArry = [];
        stepperNUmCheckBox = 0;
    }
  }
  newData.forEach((elem) => {
    html += elem.innerHTML;
  });
  if (searchItem !== "") {
    let pattern = new RegExp(searchItem, "ig");

    html = html.replace(
      pattern,
      `<span style="color: red;font-size: 17px;">${searchItem}</span>`
    );
  }
  searchItem = "";
  //items
  const items = `<div class="myItems">${html}</div>`;
  createItems.classList.add("hi");
  createItems.innerHTML = items;
  paginationSticyEl.before(createItems);
  //perpage number firstline

  newData.forEach((elem) => {
    elem.classList.contains("article-wrapper") ? pageScrollNum++ : "";
  });

  createResult.innerHTML = `<span> articles</span>${pageScrollNum} `;
  createResult.classList.add("createResult");
  createItems.before(createResult);
  divLanding.remove()
}

//optionsPerPage
document.querySelector(".optionsPerPage").addEventListener("change", (e) => {
  perPageClicked = true;
  newData = [];
  pageNumber = 1;
  perPageNumber = +e.target.value;

  if (perPageNumber == 17) {
    i = 1;
    paginationSticyEl.innerHTML = `<div style="margin: 30px;" id="paginationSticy">
    <button class="pageSelect pageActive" style="cursor: pointer; ">1</button>
     <button class="pageSelect"  style="cursor: pointer;">2</button>
     <button class="pageSelect"  style="cursor: pointer;">3</button>
     <button class="pageSelect"  style="cursor: pointer;">4</button>
     <button class="pageSelect"  style="cursor: none;">...</button>
     <button class="pageSelect"  style="cursor: pointer;">${paginationEl}</button>
    </div>`;
    showingItems(pageNumber, i);
  }
  if (perPageNumber == 102) {
    i = 7;
    let iplus = 6;
    paginationSticyEl.innerHTML = `<div style="margin: 30px;" id="paginationSticy">
    <button class="pageSelect pageActive" style="cursor: pointer; "><span>1</span> - <span>6</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>6</span> - <span>12</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>12</span> - <span>18</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>18</span> - <span>24</span></button>
     <button class="pageSelect"  style="cursor: none;">...</button>
     <button class="pageSelect"  style="cursor: pointer;"><span>${
       Math.ceil((paginationEl * 17) / perPageNumber) - 6
     }</span> - <span>${Math.ceil(
      (paginationEl * 17) / perPageNumber
    )}</span></button>
    </div>`;

    showingItems(pageNumber, iplus);
  }
  if (perPageNumber == 170) {
    i = 11;
    let iplus = 10;
    paginationSticyEl.innerHTML = `<div style="margin: 30px;" id="paginationSticy">
    <button class="pageSelect pageActive" style="cursor: pointer; "><span>1</span> - <span>10</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>10</span> - <span>20</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>20</span> - <span>30</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>30</span> - <span>40</span></button>
     <button class="pageSelect"  style="cursor: none;">...</button>
     <button class="pageSelect"  style="cursor: pointer;"><span>${
       Math.ceil((paginationEl * 17) / perPageNumber) - 10
     }</span> - <span>${Math.ceil(
      (paginationEl * 17) / perPageNumber
    )}</span></button>
    </div>`;

    showingItems(pageNumber, iplus);
  }
  if (perPageNumber == 255) {
    i = 16;
    let iplus = 15;
    paginationSticyEl.innerHTML = `<div style="margin: 30px;" id="paginationSticy">
    <button class="pageSelect pageActive" style="cursor: pointer; "><span>1</span> - <span>15</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>15</span> - <span>30</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>30</span> - <span>45</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>45</span> - <span>60</span></button>
     <button class="pageSelect"  style="cursor: none;">...</button>
     <button class="pageSelect"  style="cursor: pointer;"><span>${
       Math.ceil((paginationEl * 17) / perPageNumber) - 15
     }</span> - <span>${Math.ceil(
      (paginationEl * 17) / perPageNumber
    )}</span></button>
    </div>`;

    showingItems(pageNumber, iplus);
  }
  if (perPageNumber == 51) {
    i = 4;
    let iplus = 3;
    paginationSticyEl.innerHTML = `<div style="margin: 30px;" id="paginationSticy">
    <button class="pageSelect pageActive" style="cursor: pointer; "><span>1</span> - <span>3</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>3</span> - <span>6</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>6</span> - <span>9</span></button>
     <button class="pageSelect"  style="cursor: pointer;"><span>9</span> - <span>12</span></button>
     <button class="pageSelect"  style="cursor: none;">...</button>
     <button class="pageSelect"  style="cursor: pointer;"><span>${
       Math.ceil((paginationEl * 17) / perPageNumber) - 3
     }</span> - <span>${Math.ceil(
      (paginationEl * 17) / perPageNumber
    )}</span></button>
    </div>`;

    showingItems(pageNumber, iplus);
  }
});
//pagePagination

paginationSticyEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("pageSelect")) {
    if (perPageNumber === 17) {
      pageNumber = 0;

      pageNumber = +e.target.innerHTML;
      showingItems(pageNumber, pageNumber);
      if (+e.target.innerHTML <= 3) {
        if (+e.target.innerHTML === 1) {
          paginationSticyEl.innerHTML = `
              <button class="pageSelect pageActive" style="cursor: pointer; ">${+e
                .target.innerHTML}</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML + 1
              }</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML + 2
              }</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML + 3
              }</button>
              <button class="pageSelect" style="cursor: none;">...</button>
              <button class="pageSelect" style="cursor: pointer;">${paginationEl}</button>
              `;
        } else if (+e.target.innerHTML === 2) {
          paginationSticyEl.innerHTML = `
              <button class="pageSelect" style="cursor: pointer; ">${
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
              <button class="pageSelect" style="cursor: pointer;">${paginationEl}</button>
              `;
        } else if (+e.target.innerHTML === 3) {
          paginationSticyEl.innerHTML = `
              <button class="pageSelect" style="cursor: pointer; ">${
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
              <button class="pageSelect" style="cursor: none;">...</button>
              <button class="pageSelect" style="cursor: pointer;">${paginationEl}</button>
              `;
        }
      } else if (+e.target.innerHTML < paginationEl - 2) {
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
              <button class="pageSelect" style="cursor: pointer;">${paginationEl}</button>`;
      } else if (+e.target.innerHTML >= paginationEl - 2) {
        if (e.target.innerHTML === paginationEl) {
          paginationSticyEl.innerHTML = `
              <button class="pageSelect" style="cursor: pointer; ">1</button>
              <button class="pageSelect" style="cursor: none;">...</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML - 3
              }</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML - 2
              } </button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML - 1
              }</button>
              <button class="pageSelect pageActive" style="cursor: pointer;">${+e
                .target.innerHTML}</button>
              `;
        } else if (+e.target.innerHTML === paginationEl - 1) {
          paginationSticyEl.innerHTML = `
              <button class="pageSelect" style="cursor: pointer; ">1</button>
              <button class="pageSelect" style="cursor: none;">...</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML - 2
              }</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML - 1
              } </button>
              <button class="pageSelect pageActive" style="cursor: pointer;">${+e
                .target.innerHTML}</button>
              <button class="pageSelect " style="cursor: pointer;">${
                +e.target.innerHTML + 1
              }</button>
              `;
        } else if (+e.target.innerHTML === paginationEl - 2) {
          paginationSticyEl.innerHTML = `
              <button class="pageSelect" style="cursor: pointer; ">1</button>
              <button class="pageSelect" style="cursor: none;">...</button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML - 1
              }</button>
              <button class="pageSelect pageActive" style="cursor: pointer;">${+e
                .target.innerHTML} </button>
              <button class="pageSelect" style="cursor: pointer;">${
                +e.target.innerHTML + 1
              }</button>
              <button class="pageSelect " style="cursor: pointer;">${
                +e.target.innerHTML + 2
              }</button>
              `;
        }
      }
    } else {
      pageNumber = 0;
      
      pageNumber = +e.target.querySelector("span:nth-of-type(1)").innerHTML;
      showingItems(
        pageNumber === 1 ? 1 : pageNumber + 1,
        +e.target.querySelector("span:nth-of-type(2)").innerHTML
      );
      paginationNumberOfEndPage = +e.target.querySelector("span:nth-of-type(2)")
        .innerHTML;
        
      if (pageNumber <= (perPageNumber * 2) / 17) {
        if (pageNumber === 1) {
          paginationSticyEl.innerHTML = `
                <button class="pageSelect pageActive" style="cursor: pointer; "><span>1</span> - <span>${
                  perPageNumber / 17
                }</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  perPageNumber / 17
                }</span> - <span>${(perPageNumber * 2) / 17}</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  (perPageNumber * 2) / 17
                }</span> - <span>${(perPageNumber * 3) / 17}</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  (perPageNumber * 3) / 17
                }</span> - <span>${(perPageNumber * 4) / 17}</span></button>
                <button class="pageSelect" style="cursor: none;">...</button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  Math.ceil((paginationEl * 17) / perPageNumber) -
                  perPageNumber / 17
                }</span> - <span>${Math.ceil(
            (paginationEl * 17) / perPageNumber
          )}</span></button>
                `;
        } else if (pageNumber === perPageNumber / 17) {
          paginationSticyEl.innerHTML = `
          <button class="pageSelect " style="cursor: pointer; "><span>1</span> - <span>${
            perPageNumber / 17
          }</span></button>
          <button class="pageSelect pageActive" style="cursor: pointer;"><span>${
            perPageNumber / 17
          }</span> - <span>${(perPageNumber * 2) / 17}</span></button>
          <button class="pageSelect" style="cursor: pointer;"><span>${
            (perPageNumber * 2) / 17
          }</span> - <span>${(perPageNumber * 3) / 17}</span></button>
          <button class="pageSelect" style="cursor: pointer;"><span>${
            (perPageNumber * 3) / 17
          }</span> - <span>${(perPageNumber * 4) / 17}</span></button>
          <button class="pageSelect" style="cursor: none;">...</button>
          <button class="pageSelect" style="cursor: pointer;"><span>${
            Math.ceil((paginationEl * 17) / perPageNumber) - perPageNumber / 17
          }</span> - <span>${Math.ceil(
            (paginationEl * 17) / perPageNumber
          )}</span></button>
          `;
        } else if (pageNumber === (perPageNumber * 2) / 17) {
          paginationSticyEl.innerHTML = `
          <button class="pageSelect " style="cursor: pointer; "><span>1</span> - <span>${
            perPageNumber / 17
          }</span></button>
          <button class="pageSelect " style="cursor: pointer;"><span>${
            perPageNumber / 17
          }</span> - <span>${(perPageNumber / 17) * 2}</span></button>
          <button class="pageSelect pageActive" style="cursor: pointer;"><span>${
            (perPageNumber * 2) / 17
          }</span> - <span>${(perPageNumber * 3) / 17}</span></button>
          <button class="pageSelect" style="cursor: pointer;"><span>${
            (perPageNumber * 3) / 17
          }</span> - <span>${(perPageNumber * 4) / 17}</span></button>
          <button class="pageSelect" style="cursor: none;">...</button>
          <button class="pageSelect" style="cursor: pointer;"><span>${
            Math.ceil((paginationEl * 17) / perPageNumber) - perPageNumber / 17
          }</span> - <span>${Math.ceil(
            (paginationEl * 17) / perPageNumber
          )}</span></button>
          `;
        }
      } else if (
        pageNumber <
        Math.ceil((paginationEl * 17) / perPageNumber) -
          (perPageNumber * 3) / 17
      ) {
        paginationSticyEl.innerHTML = `<button class="pageSelect" style="cursor: pointer;"><span>1</span> - <span>${
          perPageNumber / 17
        }</span></button>
                <button class="pageSelect" style="cursor: none;">...</button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber - (perPageNumber * 2) / 17
                }</span> - <span>${
          pageNumber - perPageNumber / 17
        }</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber - perPageNumber / 17
                }</span> - <span>${pageNumber}</span></button>
                <button class="pageSelect pageActive" style="cursor: pointer;"><span>${pageNumber}</span> - <span>${
          pageNumber + perPageNumber / 17
        }</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber + perPageNumber / 17
                }</span> - <span>${
          pageNumber + (perPageNumber * 2) / 17
        }</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber + (perPageNumber * 2) / 17
                }</span> - <span>${
          pageNumber + (perPageNumber * 3) / 17
        }</span></button>
                <button class="pageSelect" style="cursor: none;">...</button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  Math.ceil((paginationEl * 17) / perPageNumber) -
                  perPageNumber / 17
                }</span> - <span>${Math.ceil(
          (paginationEl * 17) / perPageNumber
        )}</span></button>`;
      } else if (
        pageNumber >=
        Math.ceil((paginationEl * 17) / perPageNumber) -
          (perPageNumber * 3) / 17
      ) {
        if (
          pageNumber ==
          Math.ceil((paginationEl * 17) / perPageNumber) - perPageNumber / 17
        ) {
          paginationSticyEl.innerHTML = `
                <button class="pageSelect" style="cursor: pointer; "><span>1</span> - <span>${
                  perPageNumber / 17
                }</span></button>
                <button class="pageSelect" style="cursor: none;">...</button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber -
                  perPageNumber / 17 -
                  perPageNumber / 17 -
                  perPageNumber / 17
                }</span> - <span>${
            pageNumber - perPageNumber / 17 - perPageNumber / 17
          }</span></button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber - perPageNumber / 17 - perPageNumber / 17
                }</span> - <span>${
            pageNumber - perPageNumber / 17
          }</span> </button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber - perPageNumber / 17
                }</span> - <span>${pageNumber}</span></button>
                <button class="pageSelect pageActive" style="cursor: pointer;"><span>${pageNumber}</span> - <span>${
            pageNumber + perPageNumber / 17
          }</span></button>
                `;
        } else if (
          pageNumber ==
          Math.ceil((paginationEl * 17) / perPageNumber) -
            (perPageNumber / 17) * 2
        ) {
          paginationSticyEl.innerHTML = `
                <button class="pageSelect" style="cursor: pointer; "><span>1</span> - <span>${
                  perPageNumber / 17
                }</span></button>
                <button class="pageSelect" style="cursor: none;">...</button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber - perPageNumber / 17 - perPageNumber / 17
                }</span> - <span>${
            pageNumber - perPageNumber / 17
          }</span></button>
                <button class="pageSelect " style="cursor: pointer;"><span>${
                  pageNumber - perPageNumber / 17
                }</span> - <span>${pageNumber}</span> </button>
                <button class="pageSelect pageActive " style="cursor: pointer;"><span>${pageNumber}</span> - <span>${
            pageNumber + perPageNumber / 17
          }</span></button>
                <button class="pageSelect " style="cursor: pointer;"><span>${
                  pageNumber + perPageNumber / 17
                }</span> - <span>${
            pageNumber + perPageNumber / 17 + perPageNumber / 17
          }</span></button>
                `;
        } else if (
          pageNumber ==
          Math.ceil((paginationEl * 17) / perPageNumber) -
            (perPageNumber / 17) * 3
        ) {
          paginationSticyEl.innerHTML = `
                <button class="pageSelect" style="cursor: pointer; "><span>1</span> - <span>${
                  perPageNumber / 17
                }</span></button>
                <button class="pageSelect" style="cursor: none;">...</button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber - perPageNumber / 17
                }</span> - <span>${pageNumber}</span> </button>
                <button class="pageSelect pageActive" style="cursor: pointer;"><span>${pageNumber}</span> - <span>${
            pageNumber + perPageNumber / 17
          }</span> </button>
                <button class="pageSelect" style="cursor: pointer;"><span>${
                  pageNumber + perPageNumber / 17
                }</span> - <span>${
            pageNumber + perPageNumber / 17 + perPageNumber / 17
          }</span></button>
                <button class="pageSelect " style="cursor: pointer;"><span>${
                  pageNumber + perPageNumber / 17 + perPageNumber / 17
                }</span> - <span>${
            pageNumber +
            perPageNumber / 17 +
            perPageNumber / 17 +
            perPageNumber / 17
          }</span></button>
                `;
        }
      }
    }
  }
});

//checkbox issues
const checkboxItems = document.getElementById("checkboxIssues_container");
checkboxItems.addEventListener("click", (e) => {
  
  paginationNumberOfEndPage ===1 ?paginationNumberOfEndPage=perPageNumber/17 :""
  if (e.target.classList.contains("myissues")) {
    if (e.target.checked) {
      e.target.classList.add("clicked");
      checkboxIssuesContainer = [...new Set(checkboxIssuesContainer)];
      checkboxIssuesContainer.push(e.target.value);
     
      perPageNumber === 17
        ? showingItems(pageNumber, pageNumber)
        : showingItems(
            pageNumber === 1 ? 1 : pageNumber + 1,
            paginationNumberOfEndPage
          );
    } else {
      e.target.classList.remove("clicked");
      let index = checkboxIssuesContainer.findIndex(
        (elem) => elem === e.target.value
      );
 
      checkboxIssuesContainer.splice(index, 1);

      perPageNumber === 17
        ? showingItems(pageNumber, pageNumber)
        : showingItems(
            pageNumber === 1 ? 1 : pageNumber + 1,
            paginationNumberOfEndPage
          );
    }
  }
});
//checkbox issues you dont want to see
const checkboxItems2 = document.getElementById("checkboxIssues_container2");
checkboxItems2.addEventListener("click", (e) => {
 
  paginationNumberOfEndPage ===1 ?paginationNumberOfEndPage=perPageNumber/17 :""
  if (e.target.classList.contains("myissues2")) {
    if (e.target.checked) {
      e.target.classList.add("clicked");
      checkboxIssuesContainer2 = [...new Set(checkboxIssuesContainer2)];
      checkboxIssuesContainer2.push(e.target.value);
     
      perPageNumber === 17
        ? showingItems(pageNumber, pageNumber)
        : showingItems(
            pageNumber === 1 ? 1 : pageNumber + 1,
            paginationNumberOfEndPage
          );
    } else {
      e.target.classList.remove("clicked");
      let index = checkboxIssuesContainer2.findIndex(
        (elem) => elem === e.target.value
      );
 
      checkboxIssuesContainer2.splice(index, 1);

      perPageNumber === 17
        ? showingItems(pageNumber, pageNumber)
        : showingItems(
            pageNumber === 1 ? 1 : pageNumber + 1,
            paginationNumberOfEndPage
          );
    }
  }
});
//searchInput
const mySearchBox = document.querySelector("#mySearchBox");
const inputEL = mySearchBox.querySelector("input");
const buttonEl = mySearchBox.querySelector("button");

buttonEl.addEventListener("click", (e) => {
  paginationNumberOfEndPage ===1 ?paginationNumberOfEndPage=perPageNumber/17 :""
 
  
  searchItem = inputEL.value;
  inputEL.value = "";
  perPageNumber === 17
    ? showingItems(pageNumber, pageNumber)
    : showingItems(
        pageNumber === 1 ? 1 : pageNumber + 1,
        paginationNumberOfEndPage
      );
});

//Advertising
const checkbox = document.querySelector(`#myCheckBox`);
checkbox.addEventListener("change", (e) => {
  e.target.classList.toggle("checkBox");
  if (e.target.classList.contains("checkBox")) {
    [
      ...document.querySelectorAll(
        ".scroll-hide, .blogroll-inner-wrapper, #sidebar , .tabliq-468 , .last-topics-wrapper , #kaprila_p30download_ir_related-top-post ,.blogroll , div#lun-notif , .last-topics , .scroll-hide display_none , div#lun-notif.scroll-hide , #content-wrapper>#content>#main-content>h4"
      ),
    ].forEach((elem) => elem.classList.add("display_none"));
    document.getElementById("content").classList.add("contentActive");
  } else {
    [
      ...document.querySelectorAll(
        ".scroll-hide, .blogroll-inner-wrapper, #sidebar , .tabliq-468 , .last-topics-wrapper , #kaprila_p30download_ir_related-top-post ,.blogroll , div#lun-notif , .last-topics , .scroll-hide display_none , div#lun-notif.scroll-hide"
      ),
    ].forEach((elem) => elem.classList.remove("display_none"));
    document.getElementById("content").classList.remove("contentActive");
  }
});
