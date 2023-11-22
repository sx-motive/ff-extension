import './main.scss';

function extractMainPageUrl(string: string | undefined) {
  const pattern = /(https?:\/\/[^/]+)/;
  if (!string) {
    return '/';
  }
  const match = string.match(pattern);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}

const app = document.getElementById('wrap');

const logo = `<img class='logo' src='./ff.svg' alt='firefox' />`;
const input = `<input class='search' placeholder='Search' name="q" />`;

async function getBookmarks() {
  let res = await browser.bookmarks.getTree();
  let toolbarBookmarks = res[0].children?.filter((item) => item.id === 'toolbar_____')[0].children;
  return `
    <ul class='bookmarks'>
      ${toolbarBookmarks
        ?.map(
          (item) =>
            `<li><a href='${item.url}'>
            <img src='${extractMainPageUrl(item.url)}/favicon.ico' alt=' ' />
            ${item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</a></li>`
        )
        .join('')}
    </ul>
    `;
}

async function render() {
  const bookmarksDOM = await getBookmarks();
  if (app)
    app.innerHTML = `
  ${bookmarksDOM ?? ''}
  <div class='input_wrap'>
  <div class='logo_wrap'>${logo}<span>Firefox</span></div>
  <form method='get' action='https://www.google.com/search'>
  ${input}
  </form>
  </div>
  `;
}

render();
