# OTUS Superpack

![logo](src/img/video-128.png)

Расширение функционала платформы ОТУС: навигация по видео вебинаров на https://otus.ru/

## Использование

Пока расширение в режиме разработки - установка осуществляется через 'unpacked extension'.
 
 - Скачать release_packed_ext/v0.3.zip
 - распаковать в папку
 - `chrome://extensions/` ---> `Developer mode`  ----> `Load unpacked extension`

## Разработка

### Dev mode
1. Run `npm run start`
2. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.
3. Have fun.

### Packing
After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```
Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Credentials

Svelte boilerplate: https://github.com/d-lowl/chrome-extension-svelte-boilerplate