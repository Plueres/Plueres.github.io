/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","e0100dc6a0fa0fff58cc387183de2485"],["Gemfile.lock","fe84351b9ce6a7f7b8ecfb434543a907"],["_articles/2023-10-31-welcome-to-jekyll copy.markdown","2025dc9e0e276700f755094c2910aa05"],["_articles/all-known-plc-commands.md","817c6522fce37fb718fc2fa69876d7f6"],["_articles/armored_elytra.md","e8525bd558d7bdef82167201b9592ae4"],["_articles/article1.md","c1280330d6bf8102ed921d76cc9b5aa0"],["_articles/custom-context-menu.md","373f3926d18650f0b1f4cb207a799cce"],["_articles/no-time-quick-menu-mini-script.md","82f8d0b9e98564beaabfab8a8129376a"],["_articles/no-time-quick-menu-script.md","c609ba9137515a6ac52e7c1c9efb045d"],["_articles/post1.md","4cc6a02af5665fb7d1f51c02f6ef9470"],["_articles/postname1.md","fd48dc4b0bd2e8c887043cd0d10855b9"],["_articles/second_post.md","59c1683d06ecb6bb0414177566cda369"],["_articles/test.md","3a3cbe8c143095b5880951031725201d"],["_articles/visual_attributes.md","5a5b8218f277f80c98f0690897fd2eab"],["_config.yml","2b28244162ec30a72b6f27f980b0d559"],["_data/changelogs/visual_attributes.yml","b06ed0f6245bc3b6d695c52e371eeca8"],["_data/games.yml","a1b46427ebf8c4c526a1b8ecebcb9936"],["_data/lists.yml","a558ad99178ead13ce11dabe540fb866"],["_data/minecraft.yml","005945542eb922830d5b0659d91cf77a"],["_data/movies.yml","445ab53e2f188a422f6af09b7847b88f"],["_data/quick_menu.yml","ccdec9c43634f96eca7bd57004471df3"],["_data/quick_menu_mini.yml","89cf59d5691fb651b12b7ff77cde1192"],["_data/shows.yml","dfa774a59505f23339e889ff0d9f1b95"],["_data/wishlists.yml","76a10327f658cfc2863f802fd0c62bf6"],["_includes/aboutpage.md","a3e5c274d508e0d601fbe98a5894f73a"],["_includes/articlespage.md","667c152640b9b9c356a933ff81637ef0"],["_includes/codeblockbuttons.html","4ea808fa4db23ebd7ab8766fe9053fb2"],["_includes/disqus_comments.html","49ba970856006bda57e3edb84fd9320b"],["_includes/footer.html","f3508c27d173f9b53eee1497270068c6"],["_includes/head.html","7197a7e87988230c13043ed98f458304"],["_includes/header-pages.html","b4869211929215d55d4dd0cdd01b99e0"],["_includes/header.html","a066b254ef4882514cf971a8b49b329b"],["_includes/listspage.md","9d86920d69622c36a63742598d334a58"],["_layouts/article.html","53c4e9278927fda0a135f263a88dc522"],["_layouts/default.html","e26173f94c61d1393e05b11f91ce879e"],["_layouts/homepage.html","5dd2c741725a959c8e8cab851e040a51"],["_layouts/lists.html","18bcdbb7f044382dcb4c476b809d0aae"],["_layouts/minecraftpost.html","99ca4559387d7b2ba1e28a2b0d476c25"],["_layouts/pages.html","60dffd30c9f3f85c1976f5faab969bad"],["_layouts/personallist.html","3944104a312b2134333efe08e559e325"],["_layouts/wishlist.html","2f33ba3d40dac3cbe28e31d8101053cf"],["_posts/2023-10-31-1.md","abc94b49dd3880ef1d2853bcf07255b2"],["_posts/2023-10-31-2.md","37f8049f8d196d866fc83b4d9f1733b7"],["_posts/2023-10-31-welcome-to-jekyll.markdown","195acb32f0c1115f8726dfd233446909"],["_sass/minima.scss","4ddf269576a9eb427c1973df524b8988"],["_sass/minima/_base.scss","4c90788a8a1984400ed0423dbeeb3ae4"],["_sass/minima/_default.scss","ffd92d7b1a0504d29108a63eec385d51"],["_sass/minima/_header.scss","326197ea477701bee90674717630466c"],["_sass/minima/_syntax-highlighting.scss","07bdd10811adc010297a5f7adc3fcaff"],["_sass/plueres.scss","cd74dbca93ed14c981419bcc5c2bbb8b"],["_sass/plueres/UNUSEDaboutpage.scss","ef5f5799c727e35de10b079e1acb0d69"],["_sass/plueres/base.scss","9bc4f5e270df4912f31a0f278aa61fce"],["_sass/plueres/footer.scss","5032a8999d0e55af793d15ddd56502cf"],["_sass/plueres/header.scss","2c0cd37064f36f0f0e1f27b700d55467"],["_sass/plueres/mainpages.scss","320f107b318292a92dd17830ec77464a"],["_sass/plueres/pages.scss","362802612a1764196b3a958728fa0655"],["_sass/plueres/personal.scss","4ea03f8c594e9e9b85b371535a72ad46"],["_sass/plueres/posts.scss","168f4f99ac0871d1b59bd517de31c6f6"],["_site/1/index.html","2458276e8b45a13e5748bcee3e80bf1b"],["_site/2/index.html","a710067e28d0fcb50401db5ce9c701ba"],["_site/404.html","0c88c3c30209f022f08f129edabb545d"],["_site/admin/config.yml","38ae3cac8dd542fc6dffc49be24fdc20"],["_site/admin/index.html","2bc60695c3e65b2f24d60623c62da586"],["_site/all-known-plc-commands/index.html","ca4440d88c5526d15aae700552166d64"],["_site/article1/index.html","7292e5d407602647e759f7f34755461a"],["_site/articles.html","986fa9916c0d2a23054a26eb3caf4550"],["_site/assets/images/bedrocklaunchernew3d.png","fa64a8da1b3968f4eec26b0ee517aa3b"],["_site/assets/images/header.jpg","3b072733722d4d820494d9d7dedbe147"],["_site/assets/images/no_time/quick-menu-mini-plc-overview.jpg","fe5ac56aa976dc3ec34491122616ad79"],["_site/assets/images/no_time/quick-menu-mini-plc-run.jpg","d3e504d6287390b10083378573fd130c"],["_site/assets/images/no_time/quick-menu-plc-overview.jpg","e0fd5fd221f262d516899f1b0a4ca66c"],["_site/assets/images/no_time/quick-menu-plc-run-coco.jpg","f9e6b0cd09f445f9c93302db26ab6f5d"],["_site/assets/images/no_time/quick-menu-plc-run-new.jpg","e34cf4c34ac4b5359ff61bbbfabdfeab"],["_site/assets/images/no_time/quick-menu-plc-run.jpg","a3ad9d31e517507575b0cea70d8a11e5"],["_site/assets/images/no_time/quick-menu-plc.jpg","593df17679f3d7330a61683c16e4a5ba"],["_site/assets/main.css","be5399c7d1c9bf080a3a014ac17291d0"],["_site/assets/minima-social-icons.svg","3a70b871c930a7ed8af27caa162af123"],["_site/create_post.sh","79f646fb4daa698b8048231fad52f6cc"],["_site/custom-context-menu/index.html","51556f47286e9f6977035543b4b7f158"],["_site/feed.xml","10b1e23b2f0b07ebaab6ac8c333da8b9"],["_site/files/visual_attributes_1.0.mcpack","b3ce4dc124567314001a35015fce2b30"],["_site/index.html","45d4da05016b0135875067e0945c4785"],["_site/list/gameslist.html","5a0afbfef18553b3c1d3eda2e7606671"],["_site/list/movielist.html","0f69477a052ea72efc29309340a754fa"],["_site/list/showslist.html","ec7c4b74386b21804c0409fcc0a6730c"],["_site/lists.html","702b2e1b9c8b7a85ee64788bb028cea1"],["_site/manifest.json","4416f5b21398e312cd7f4683e9056176"],["_site/minecraft/armored-elytra.html","b7545047b2db359766cff745a9c1a3d9"],["_site/minecraft/visual-attributes.html","6cabb695376abd50bbe98d116d3cff94"],["_site/no-time-quick-menu-mini-script/index.html","6947c0d4ab3e26cd637696bb56a3255f"],["_site/no-time-quick-menu-script/index.html","ae29030a62097b060e123f810e4670f8"],["_site/personal/bucketlist.html","40580e25217d0a36b31333e3eb36f00b"],["_site/personal/homepage.html","b939200acfc246269e167bff662d0056"],["_site/personal/wishlist.html","eb024b7c2577ff3250cf473c1fa50dd7"],["_site/personal/wishlist/kerstlijst.html","57033d618cd2452b3e6947750a822fb1"],["_site/personal/wishlist/wishlist.html","ae9da0aadf619931b0922e3f6e9dfea4"],["_site/portfolio.html","4b891c39fc41b1f946925571813a1bb6"],["_site/post/second_post.html","6e332bba67f9c75388e7ed88ff676829"],["_site/post1/index.html","f4609ac908f4d72f54799f8084da5956"],["_site/postname1/index.html","7d37fed9672005a8b99797c1c1483e67"],["_site/scripts/article.js","55b4e40c39cba53c7361de884b12ec9d"],["_site/scripts/articles.js","fe89be587beff4d1670dbd92ac2364a4"],["_site/scripts/global.js","8efbe75f291397a3362e3efa590ea19b"],["_site/scripts/header.js","18e623a8cb33c555d97a04695145ef8a"],["_site/scripts/homepage.js","6205714b132780309ca60a28d622ca77"],["_site/scripts/protectedpage.js","0cebce6bb75bbc0f66db2362abc3526f"],["_site/scripts/script.js","58f530ced918876ae3860e6a88010fe2"],["_site/service-worker.js","847f688c0e785ea0ef76e45f34063f30"],["_site/test/index.html","cedf01b11b0edac25fe563531dba82b0"],["_site/welcome-to-jekyll-copy/index.html","a0c85f112af310e1302188cafe012c61"],["_site/welcome-to-jekyll/index.html","a73d2f1d8eb402f9b70c7b9c10a268de"],["_wishlists/kerstlijst.md","99cf07322024ef27746efbaf2746020e"],["_wishlists/wishlist.md","ddfd2e5c8759e81d32e6c3418b4e81c0"],["admin/config.yml","38ae3cac8dd542fc6dffc49be24fdc20"],["admin/index.html","2bc60695c3e65b2f24d60623c62da586"],["assets/images/bedrocklaunchernew3d.png","fa64a8da1b3968f4eec26b0ee517aa3b"],["assets/images/header.jpg","3b072733722d4d820494d9d7dedbe147"],["assets/images/no_time/quick-menu-mini-plc-overview.jpg","fe5ac56aa976dc3ec34491122616ad79"],["assets/images/no_time/quick-menu-mini-plc-run.jpg","d3e504d6287390b10083378573fd130c"],["assets/images/no_time/quick-menu-plc-overview.jpg","e0fd5fd221f262d516899f1b0a4ca66c"],["assets/images/no_time/quick-menu-plc-run-coco.jpg","f9e6b0cd09f445f9c93302db26ab6f5d"],["assets/images/no_time/quick-menu-plc-run-new.jpg","e34cf4c34ac4b5359ff61bbbfabdfeab"],["assets/images/no_time/quick-menu-plc-run.jpg","a3ad9d31e517507575b0cea70d8a11e5"],["assets/images/no_time/quick-menu-plc.jpg","593df17679f3d7330a61683c16e4a5ba"],["assets/main.scss","4963fd5c44131d31098902c66bd65be4"],["create_post.sh","79f646fb4daa698b8048231fad52f6cc"],["feed.xml","350a6c60a866fe8db8507014659369a6"],["files/visual_attributes_1.0.mcpack","b3ce4dc124567314001a35015fce2b30"],["index.markdown","6f8d37c55d99168f4ba3e4f95a5c4e75"],["manifest.json","4416f5b21398e312cd7f4683e9056176"],["pages/articles.md","85441188eb81b4ad5b8dc631b54507fb"],["pages/gameslist.md","86dad1cce2ff5767cfc37dc0f6a1ba52"],["pages/lists.md","2c11ad937dd4bf07608caf0cdf504640"],["pages/movielist.md","d364900378b97c0d84a4adc54211e85b"],["pages/personallists.md","8f0c9b74efcdcf4ec6e3e05164e7ba89"],["pages/portfolio.md","e0de2ac87d39d3b37499d5ff321e4429"],["pages/showslist.md","7a47a9e84c1ba3fd148d3684278e68ee"],["personal/bucketlist.md","fea58a259517a2b1c8f02dc3dedc2250"],["personal/wishlist.md","80c0d22c63c0c111e2cc9147e13652b0"],["scripts/article.js","55b4e40c39cba53c7361de884b12ec9d"],["scripts/articles.js","fe89be587beff4d1670dbd92ac2364a4"],["scripts/global.js","8efbe75f291397a3362e3efa590ea19b"],["scripts/header.js","18e623a8cb33c555d97a04695145ef8a"],["scripts/homepage.js","6205714b132780309ca60a28d622ca77"],["scripts/protectedpage.js","0cebce6bb75bbc0f66db2362abc3526f"],["scripts/script.js","58f530ced918876ae3860e6a88010fe2"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request).then(function(networkResponse) {
            // Check if the status is 404 and handle it.
            if (networkResponse.status === 404) {
              console.log('File not found: ' + event.request.url);
              // You can decide what to do here. For example, you might want to cache a default file instead.
              return caches.match('/default-file.html');
            }
            // Create a new response to make sure the promise is resolved even if the status is not OK.
            return new Response(networkResponse.body, {
              status: networkResponse.status,
              statusText: networkResponse.statusText,
              headers: networkResponse.headers
            });
          });
        }).catch(function() {
          // If both fail, show a generic fallback:
          return caches.match('/404.html');
        })
      );
    }
  }
});