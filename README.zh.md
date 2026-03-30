<div align="center">

<img src="https://github.com/TonyBlur/tblu-bookmark/blob/main/assets/logo.svg?raw=true" width="96" height="96">

# tbluBookmark<br> - 基于Pintree的修改

[English](README.md) | [中文](README.zh.md)

tbluBookmark 是一个开源项目，旨在将浏览器书签导出成导航网站。通过简单的几步操作，就可以将书签转换成一个美观且易用的导航页面。

<img src="https://github.com/TonyBlur/tblu-bookmark/blob/main/assets/preview.png?raw=true">

</div>



## ✨ 项目功能和目标

- 导出浏览器书签
- 将书签文件转换成JSON格式
- 生成静态导航网站

## 🆚 与原版 Pintree 的区别

- 增加了搜索浮窗与 tag 筛选等交互。
- 增加了主题模式切换（`跟随系统 / 浅色 / 深色`）与语言切换。
- 增加可选的规则化 tag 配置文件：`json/tag-rules.json`。
- 支持在书签/文件夹数据中使用可选的 `tags` 字段进行手动标注。

## 🏷️ 书签 JSON 扩展字段说明

本项目兼容原版 Pintree 的 JSON 结构，同时支持可选的 `tags` 数组字段。

示例：

```json
{
  "type": "link",
  "title": "Example",
  "url": "https://example.com",
  "icon": "https://logo.clearbit.com/example.com",
  "tags": ["文档", "学习"]
}
```

Tag 生效优先级：
1. 若条目中存在 `tags`，优先直接使用手动 tags。
2. 若未提供 `tags`，则回退到 `json/tag-rules.json` 的规则匹配结果。

补充说明：
- 文件夹上的 tag 会自动继承给其下级文件夹和书签。
- `json/tag-rules.json` 支持 i18n tag 写法，例如：
  ```json
  { "tag": { "zh": "文件传输", "en": "File Transfer" } }
  ```

## 🚀 快速开始

### 方法1 - 使用Github Pages

### 步骤 1：下载浏览器书签

1. 安装 [Pintree Bookmarks Exporter](https://chromewebstore.google.com/detail/pintree-bookmarks-exporte/mjcglnkikjidokobpfdcdmcnfdicojce) 插件。
2. 使用插件导出浏览器书签，并保存 JSON 文件到本地。

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step1.png)

### 步骤 2：Fork 项目

1. 访问 [tbluBookmark GitHub 仓库](https://github.com/TonyBlur/tblu-bookmark)。
2. 点击页面右上角的 `Fork` 按钮，将项目的 `gh-pages` 分支 Fork 到您的 GitHub 账号中。

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step2.png)

### 步骤 3：替换 JSON 文件

1. 打开您 GitHub 账号中的 `tblu-bookmark` 仓库（即刚才 Fork 的项目）。
2. 点击仓库中的 `json` 文件夹。
3. 点击 `Upload files` 按钮，选择刚才下载的 JSON 文件，并上传。
4. 确保上传的文件命名为 `pintree.json`，并选择 `Commit changes`。

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step3.png)

### 步骤 4：启用 GitHub Pages

1. 在您的 `tblu-bookmark` 仓库页面，点击 `Settings`。
2. 找到 `Pages` 选项。
3. 在 `Source` 下拉菜单中，选择 `gh-pages` 分支，然后点击 `Save`。
4. 几分钟后，您的静态网站将会在 `https://yourusername.github.io/tblu-bookmark` 上可用。记得替换 `yourusername`。

![](https://github.com/Pintree-io/pintree/blob/main/assets/guide/step4.png)

---

### 方法2 - 部署到Vercel

您也可以使用 Vercel 免费部署 tbluBookmark 项目。点击下面的按钮，跟随指引即可轻松将项目部署到 Vercel 平台。

在Vercel上，您还可以通过设置环境变量 `BOOKMARK_DATA_URL` 来指定书签文件的URL。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTonyBlur%2Ftblu-bookmark%2Ftree%2Fmain&project-name=tblu-bookmark&repository-name=tblu-bookmark)

---

通过上述步骤，您已经完成了 tbluBookmark 项目的部署 🎉

## 🔧 使用技术

- HTML/CSS/JavaScript
- JSON格式处理
- 静态网站托管

## 🌐 i18n：新增与翻译你自己的语言

界面多语言文案在 `index.html` 的 `I18N` 对象里维护。

### 1）新增语言对象

找到：

```js
const I18N = {
  zh: { ... },
  en: { ... }
}
```

新增一个语言（示例：日语 `ja`）：

```js
ja: {
  clear: 'クリア',
  clearTags: 'タグをクリア',
  tagFilter: 'タグフィルター',
  searchPlaceholder: 'ブックマーク / タグ / URL を検索...',
  noResultsTitle: '一致する結果がありません',
  noResultsDesc: 'キーワードを短くするか、タグを切り替えてください。',
  searchResults: '検索結果',
  bookmark: 'ブックマーク',
  home: 'ホーム',
  records: '件',
  languageLabel: 'JA',
  close: '閉じる',
  folderTags: 'フォルダタグ',
  themeSystem: 'システム',
  themeLight: 'ライト',
  themeDark: 'ダーク',
  toggleSidebar: 'サイドバーを切り替え',
  searchButton: 'ブックマークを検索',
  switchLanguage: '言語を切り替え',
  switchTheme: 'テーマを切り替え',
  filterTagsButton: 'タグで絞り込み',
  backToTop: 'トップへ戻る',
  closeSidebar: 'サイドバーを閉じる',
  gridView: 'グリッド表示',
  listView: 'リスト表示'
}
```

### 2）在语言切换菜单增加入口

在 `#languageMenu` 中新增按钮：

```html
<button class="menu-item" data-locale="ja">日本語</button>
```

### 3）保证所有语言 key 一致

每种语言都应包含同样的 key。缺失时会回退到中文（`zh`）或直接显示 key 名称。

### 4）验证 title / aria 是否也已翻译

除了正文文案，项目还会本地化按钮的 `title` 与 `aria-label`（例如搜索、侧边栏切换、回到顶部、主题/语言切换等）。  
新增语言后请切换一次语言，检查这些提示文案是否全部正确。

## 🤝 贡献指南

欢迎贡献代码和提出建议！请遵循以下步骤参与项目：

1. Fork 本仓库：https://github.com/TonyBlur/tblu-bookmark/tree/main
2. 创建一个新的分支 (`git checkout -b feature/your-feature`)
3. 提交您的修改 (`git commit -am 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 提交一个 Pull Request

请注意，`main` 分支是项目的源代码分支，而 `gh-pages` 分支是打包出来的静态网站代码分支。请在 `main` 分支上进行开发和提交，然后我们会负责将代码打包并发布到 `gh-pages` 分支。

## ❤️ 鸣谢

- [Pintree](https://pintree.io/)

感谢使用和支持！
