const lists = document.querySelectorAll(".article-wrapper");
const breadcrumbs = document.querySelector(".breadcrumbs");
const header_wrapper = document.getElementById("header-wrapper");
const main_content = document.querySelector("#content-wrapper");
let grouping = [];
// navbar creating
const nav = `
<ul  style=" display: flex; align-items: center; justify-content: space-between; border: 1px solid black; padding: 20px; " class="test">
        <li  style="list-style-type: none;"><button  style="padding: 10px ; background-color: black; color: white; cursor: pointer;">نرم افزا</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">بازی</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">آموزش</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">موبایل</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">کتاب</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">فیلم</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">صوت</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">گرافیک</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">مکینتاش</button></li>
        <li style="list-style-type: none;"><button style="padding: 10px ; background-color: black; color: white; cursor: pointer;">کنسول</button></li>
    </ul>
`;
document.body.insertAdjacentHTML("afterbegin", nav);
let tagName = "";
//event navbar
document.querySelector(".test").addEventListener("click", (e) => {
  if (e.target.classList.contains("test")) {
    return;
  } else {
    grouping = []
    let html = "";
    //filtering items with its breadcrumbs
    lists.forEach((list, index) => {
      if (
        list
          .querySelector("header")
          .querySelector("ul")
          .querySelector(".breadcrumbs")
          .innerHTML.indexOf(e.target.innerHTML) > -1
      ) {
        grouping.push(list);
      }
    });
    //creating perpages items
    grouping.forEach((elem) => {
      html += elem.innerHTML;
    });
    main_content.innerHTML = html;
  }
  
});

//pagination

const paginationEl = `
<div>
  <h1>page number</h1>
  <div>
    <button class="btnsPage" value=1>1</button>
    <button class="btnsPage" value=2>2</button>
    <button class="btnsPage" value=3>3</button>
    <button class="btnsPage" value=4>4</button>
  </div>
  <div>
  <h1>per page</h1>
    <select class="optionsPerPage">
      <option  value="3">3</option>
      <option  value="8">8</option>
      <option  value="14">14</option>
    </select>
  </div>
</div>
`;
document.body.insertAdjacentHTML("afterbegin", paginationEl);

//perpage num
document.querySelector("select").addEventListener("change", (e) => {
  let html2 ='';
  grouping.slice(0, e.target.value).forEach((elem) => {
    html2 += elem.innerHTML;
  });
  main_content.innerHTML = html2;
});



