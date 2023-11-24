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

  // Parse the URL to get the tags
  let tags = decodeURIComponent(url.searchParams.get('tags')).toLowerCase().split(',');
  // For each tag, select the tag element and add the class to it
  tags.forEach(function (tag) {
    let tagElements = document.querySelectorAll('tag input');
    tagElements.forEach(function (element) {
      if (element.value.toLowerCase() === tag) {
        element.parentElement.classList.add('selected');
        element.checked = true;
      }
    });
  });
});

function filterPosts() {
  var url = new URL(window.location.href);
  var tags = (url.searchParams.get("tags") || "")
    .toLowerCase()
    .split(",");

  tags.forEach(function (tag) {
    var checkbox = document.getElementById("tag-" + tag);
    if (checkbox) {
      checkbox.checked = true;
    }
  });

  var posts = document.querySelectorAll("#articles-grid article");
  posts.forEach(function (post) {
    var posttags = post
      .getAttribute("data-tag")
      .toLowerCase()
      .split("|")
      .map(tag => tag.replace(/ /g, '-')); // Replace spaces with hyphens

    if (
      tags.some((tag) =>
        posttags.some((posttag) => posttag.includes(tag))
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
      var tags = Array.from(checkedBoxes).map(function (box) {
        return box.value.toLowerCase(); // Ensure the tag is lowercased
      });
      var url = new URL(window.location.href);
      if (tags.length > 0) {
        url.searchParams.set("tags", tags.join(","));
      } else {
        url.searchParams.delete("tags");
      }
      window.history.replaceState({}, "", url);
      filterPosts();
    });
  });

document.getElementById("search-bar").addEventListener("input", function () {
  var searchTerm = this.value.toLowerCase();
  var articles = document.querySelectorAll("#articles-grid article");
  articles.forEach(function (article) {
    var title = article.querySelector("a h3").textContent.toLowerCase();
    var tags = article.getAttribute("data-tag").toLowerCase();
    if (title.includes(searchTerm) || tags.includes(searchTerm)) {
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

window.addEventListener('scroll', function () {
  var filterList = document.querySelector('#filtersheader');

  if (window.scrollY > 0) {
    filterList.classList.add('fixed');
  } else {
    filterList.classList.remove('fixed');
  }
});

window.addEventListener("load", filterPosts);
