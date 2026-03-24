<div align="center">

<img src="https://github.com/TonyBlur/tblu-bookmark/blob/main/assets/logo.svg?raw=true" width="96" height="96">

# tbluBookmark<br> - Modified Based on Pintree

[English](README.md) | [中文](README.zh.md)

tbluBookmark is an open-source project that aims to convert browser bookmarks into a navigation website. With just a few simple steps, you can transform your bookmarks into a beautiful and user-friendly navigation page.

<img src="https://github.com/TonyBlur/tblu-bookmark/blob/main/assets/preview.png?raw=true">

</div>



## ✨ Features and Goals

- Export browser bookmarks
- Convert bookmark files to JSON format
- Generate a static navigation website

## 🆚 What's Different from Original Pintree

- Added built-in search modal with tag-based filtering and UI interactions tailored for this repository.
- Added theme mode selector (`system / light / dark`) and language switching.
- Added optional rule-based tag mapping file: `json/tag-rules.json`.
- Added support for optional manual `tags` field on each bookmark/folder item.

## 🏷️ Bookmark JSON Format (Extended)

This project is compatible with standard Pintree bookmark JSON, and also supports an optional `tags` array.

Example:

```json
{
  "type": "link",
  "title": "Example",
  "url": "https://example.com",
  "icon": "https://logo.clearbit.com/example.com",
  "tags": ["Docs", "Learning"]
}
```

Tag behavior priority:
1. If `tags` exists on an item, these tags are used directly.
2. If `tags` is missing, fallback rule matching from `json/tag-rules.json` is used.

Additional notes:
- Folder tags are inherited by child bookmarks/folders.
- `json/tag-rules.json` supports i18n tags via object format:
  ```json
  { "tag": { "zh": "文件传输", "en": "File Transfer" } }
  ```

## 🚀 Quick Start

### Method 1 - Use GitHub Pages

### Step 1: Download Browser Bookmarks

1. Install the [Pintree Bookmarks Exporter](https://chromewebstore.google.com/detail/pintree-bookmarks-exporte/mjcglnkikjidokobpfdcdmcnfdicojce) extension.
2. Use the extension to export browser bookmarks and save the JSON file locally.

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step1.png)

### Step 2: Fork the Project

1. Visit the [tbluBookmark GitHub repository](https://github.com/TonyBlur/tblu-bookmark).
2. Click the `Fork` button in the upper right corner of the page to fork the `gh-pages` branch of the project to your GitHub account.

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step2.png)

### Step 3: Replace the JSON File

1. Open the `tblu-bookmark` repository in your GitHub account (the one you just forked).
2. Click on the `json` folder in the repository.
3. Click the `Upload files` button, select the JSON file you downloaded earlier, and upload it.
4. Make sure the uploaded file is named `pintree.json`, and select `Commit changes`.

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step3.png)

### Step 4: Enable GitHub Pages

1. In your `tblu-bookmark` repository page, click on `Settings`.
2. Find the `Pages` option.
3. In the `Source` dropdown menu, select the `gh-pages` branch and click `Save`.
4. After a few minutes, your static website will be available at `https://yourusername.github.io/tblu-bookmark`. Remember to replace `yourusername`.

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step4.png)

---

### Method 2 - Deploy to Vercel

You can also deploy the tbluBookmark project for free using Vercel. Click the button below and follow the instructions to easily deploy the project to the Vercel platform.

On Vercel, you can also specify the URL of the bookmark file by setting the environment variable `BOOKMARK_DATA_URL`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTonyBlur%2Ftblu-bookmark%2Ftree%2Fmain&project-name=tblu-bookmark&repository-name=tblu-bookmark)

---

Now you can enjoy your own navigation website! 🎉

## 🔧 Technologies Used

- HTML/CSS/JavaScript
- JSON format processing
- Static website hosting

## 🤝 Contribution Guidelines

Contributions are welcome! Please follow these steps to participate in the project:

1. Fork this repository: https://github.com/TonyBlur/tblu-bookmark/tree/main
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Submit a Pull Request

Please note that the `main` branch is the source code branch of the project, while the `gh-pages` branch is the branch for the packaged static website code. Develop and submit changes on the `main` branch, and we will be responsible for packaging and publishing the code to the `gh-pages` branch.

## ❤️ Acknowledgements

- [Pintree](https://pintree.io/)

Thank you for using and supporting!
