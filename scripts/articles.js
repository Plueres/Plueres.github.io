document.querySelector("#filtericon").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector("#filterlist").classList.toggle("show");
});

document.querySelectorAll('tag').forEach(function (tag) {
  tag.addEventListener('click', function (event) {
    var checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;

    // Trigger the change event
    var changeEvent = new Event('change');
    checkbox.dispatchEvent(changeEvent);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let checkboxes = document.querySelectorAll('tag input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        // Checkbox is checked, add the class to the parent tag
        this.parentElement.classList.add('selected');
      } else {
        // Checkbox is not checked, remove the class from the parent tag
        this.parentElement.classList.remove('selected');
      }
    });
  });

  // Get the current URL
  let url = new URL(window.location.href);

  // Parse the URL to get the categories
  let categories = decodeURIComponent(url.searchParams.get('categories')).toLowerCase().split(',');

  // For each category, select the category element and add the class to it
  categories.forEach(function (category) {
    let categoryElements = document.querySelectorAll('tag input');
    categoryElements.forEach(function (element) {
      if (element.value.toLowerCase() === category) {
        element.parentElement.classList.add('selected');
        element.checked = true;
      }
    });
  });
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
      post.style.display = "flex";
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
