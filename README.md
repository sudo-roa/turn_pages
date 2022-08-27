# turn_pages.js
Create a book with HTML5 that allows you to turn the pages<br>
HTMLでめくることのできる本の作成

## Abstract

## Demo

## Usage

### HTML
挿入したい部分に記述
```html
<div id="tp_book"></div>
```

bodyの閉じタグ手前に記述
```html
<script type="text/javascript">
  page_num = 3;
</script>
<script type="text/javascript" src="https://raw.githack.com/sudo-roa/turn_pages/main/js/turn_pages.js"></script>
```
※page_numを変更することで本のページ数を変更できます

## Development note
### 実装済み機能
- 本の外枠(3ページまで)

### 今後実装する機能
- ページをめくる機能
- 複数ページ対応
- 本のページ内への記述
- 本のデザイン

## References
- [pure CSS3 Page Flip Effect](http://www.romancortes.com/blog/pure-css3-page-flip-effect/)
- [raw.githack.com](https://raw.githack.com/)
- [各種GitHub CDNでblobを配れるのか実験](https://qiita.com/okuoku/items/9c72a88662831d774742)

## License
turn_pages.js is under [MIT license](https://en.wikipedia.org/wiki/MIT_License)

## Auther
- [sudo-roa](https://github.com/sudo-roa/)
