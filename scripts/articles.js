document.querySelector("#filtericon").addEventListener("click", function () {
  document.querySelector("#filters").classList.toggle("show");
});

document.querySelector("#articles-grid").addEventListener("scroll", function () {
  var header = document.querySelector(".site-header");
  var style = window.getComputedStyle(header);
  var marginTop = parseInt(style.getPropertyValue('margin-top'));
  var marginBottom = parseInt(style.getPropertyValue('margin-bottom'));
  var headerHeight = header.offsetHeight + marginTop + marginBottom;
  var viewportHeight = window.innerHeight;
  var bottomValue = (viewportHeight - headerHeight) / viewportHeight * 100;

  if (this.scrollTop + this.clientHeight >= this.scrollHeight - 1) {
    header.style.top = "0";
    header.style.bottom = `${bottomValue}vh`;
  } else {
    header.style.top = `${bottomValue}vh`;
    header.style.bottom = "0";
  }
});

function filterPosts() {
  var url = new URL(window.location.href);
  var categories = (url.searchParams.get("categories") || "")
    .toLowerCase()
    .split(",");

  categories.forEach(function (category) {
    var checkbox = document.getElementById("category-" + category);
    if (checkbox) {
      checkbox.checked = true;
    }
  });

  var posts = document.querySelectorAll("#articles-grid article");
  posts.forEach(function (post) {
    var postCategories = post
      .getAttribute("data-category")
      .toLowerCase()
      .split(" ");
    if (
      categories.some((category) =>
        postCategories.some((postCategory) => postCategory.includes(category))
      )
    ) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

document
  .querySelectorAll("#filters input[type=checkbox]")
  .forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      var checkedBoxes = document.querySelectorAll(
        "#filters input[type=checkbox]:checked"
      );
      var categories = Array.from(checkedBoxes).map(function (box) {
        return box.value.toLowerCase();
      });
      var url = new URL(window.location.href);
      if (categories.length > 0) {
        url.searchParams.set("categories", categories.join(","));
      } else {
        url.searchParams.delete("categories");
      }
      window.history.replaceState({}, "", url);
      filterPosts();
    });
  });

document.getElementById("search-bar").addEventListener("input", function () {
  var searchTerm = this.value.toLowerCase();
  var articles = document.querySelectorAll("#articles-grid article");
  articles.forEach(function (article) {
    var title = article.querySelector("h3 a").textContent.toLowerCase();
    var categories = article.getAttribute("data-category").toLowerCase();
    if (title.includes(searchTerm) || categories.includes(searchTerm)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });

  var url = new URL(window.location.href);
  if (searchTerm) {
    url.searchParams.set("search", searchTerm);
  } else {
    url.searchParams.delete("search");
  }
  window.history.replaceState({}, "", url);
});

window.addEventListener("load", function () {
  var url = new URL(window.location.href);
  var searchParam = url.searchParams.get("search");
  if (searchParam) {
    document.getElementById("search-bar").value = searchParam;
    var event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    document.getElementById("search-bar").dispatchEvent(event);
  }
  filterPosts();
});

window.addEventListener("load", filterPosts);

document.querySelectorAll("category").forEach((category) => {
  const categoryName = category.textContent.trim();
  var textColor;
  var brColor;

  switch (categoryName.toLowerCase()) {
    case "minecraft":
      textColor = "rgba(0, 112, 40, 1)";
      brColor = "rgba(0, 112, 40, 0.2)";
      break;
    case "another-category":
      textColor = "blue";
      brColor = "black";
      break;
    case "yet-another-category":
      textColor = "red";
      brColor = "black";
      break;
    default:
      textColor = "white";
      brColor = "gray";
      break;
  }
  category.style.color = textColor;
  category.style.backgroundColor = brColor;
});
