---
title: Start From Here👋 Site Building History 
description: The first post about how this website wants to share and introduce the site Building History
summary: 🎉 值得慶祝的第一篇文章
published: '2022-12-26T00:00:00.000+08:00'
updated: '2023-02-25T14:00:00.000+08:00'
cover: ./cover.jpg
coverStyle: 'TOP'
coverCaption: Photo by <a href="https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Etienne Girardet</a> on <a href="https://unsplash.com/s/photos/motivation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
tags:
  - [QWER]
---

<script lang="ts">
  import Youtube from '$lib/components/youtube.svelte'
  import Spotify from '$lib/components/spotify.svelte'
  import Custom from '$custom/custom.svelte'
  const const_variable = 999;

  import Folder from '$lib/components/folder.svelte'

  let configFolder = [
    { name: 'QWER.config.js', icon: 'i-vscode-icons-file-type-typescript-official' },
    { name: 'site.ts', icon: 'i-bxs-file-js' }
  ]
</script>

## 🚀 Foreword
:::tip
Welcome! <br/>
這裡會放放平常本業的踩坑紀錄及新發現的酷東西<br/>
除此之外還會放放吃吃ㄏㄏ跑跑跳跳聽聽畫畫的紀錄<br/>
可以利用首頁上面的🔍或旁邊的<kbd>tag</kbd>🏷️找找有沒有能幫上忙的東西<br/>
:::

> <h2>這篇文章會簡單紀錄這個網站出生的過程</h2>

## 挑個喜歡的域名
> 幫網站挑個順眼又好記的名子吧

我這邊是選擇 namecheap 他們家的服務，通常越短的名子越好記~~廢話~~但也會比較貴<br/>
當然你想要更炫泡的中文域名也自然是沒問題
<ImgZoom src="/tech/first_post/namecheap.webp" alt="namecheap" class="h-full object-cover" width="500"/>

<br/>

接著只要拿出魔法小卡施法一下就可以進入DashBoard頁面管理域名了
<ImgZoom src="/tech/first_post/namecheap_manage.webp" alt="Namecheap_manage" class="h-full object-cover" width="500"/>



## 申請主機
> 幫網站找個家

決定好名子後，我們就可以前往馬斯洛需求金字塔的第二層了，不要讓網站流落街頭<br/>
**這部份選擇就很多了，可以選擇花錢消災或是多花點工夫找找有沒有能~~白嫖的~~**<br/>

### 規格及OCI註冊
終於，一心白嫖的我找到甲骨文雲端服務 Oracle Cloud Infrastructure (OCI) 這盞明燈，來看看他的規格吧<br/>

:::info 
CPU Arm Ampere A1 `4 OCPU` 、 `24GB` 記憶體 、`200GB`儲存空間 及 每月10TB免費流量 
:::

挖屋~這種規格如果換作是一般付費的VPS也是要 500 NTD/月 以上了<br/>
OK! 既然決定了就開始申請。 來吧!!! 夢開始的地方
[OCI free VPS 申請入口](https://www.oracle.com/cloud/free/)
<ImgZoom src="/tech/first_post/OCI.webp" alt="OCI" class="h-full object-cover" width="500"/>


從上面的<kbd>Start for free</kbd>Button開始你的旅程，下方條列了一些可能碰到的狀況及解決方法<br/>

- 註冊收不到驗證信 <kbd>→</kbd> 這個有點玄，只能重寄幾次或換個信箱了
- 信用卡被扣錢了 <kbd>→</kbd> 註冊過程中是需要提供信用卡信息的，他會先扣一塊美金之後會再轉還給你
- 帳戶創建失敗 <kbd>→</kbd> 盡量不要在同一台設備進行不同的帳號註冊，手機號碼跟信用卡資訊同理

:::caution 極。度。重。要
在選Region的時候盡量不要挑日本、新加坡等地，因為免費總是能吸引到一堆像我這樣的人(? <br/>
而這些離台灣較近機房的資源往往都是最早被搶光的<br/>
這邊比較建議南韓的選項
:::

### 創建VPS
創建成功後我們就可以開始申請主機空間啦<br/>
創建的內容可以參考下方的圖例<br/>
1. Get Started<kbd>→</kbd>滾輪往下滑點選 Create a VM instance
![OCI_Start](/tech/first_post/oci_start.mp4)

2. 決定你vps的名稱
3. Image and shape<kbd>→</kbd>Change image 選擇你要的OS<kbd>→</kbd>Change shape 選擇A1.Flex 然後拉滿
> 這裡如果想切複數個vps，可以在這邊調配資源，不過如果只想拉一個練習就全灌滿吧

4. Add SSH keys <kbd>→</kbd> Generate a key pair to me <kbd>→</kbd> Save private and public key
> 這個步驟也很重要喔!! OCI VPS僅提供ssh登入，沒把key存好到時登不進去就GG惹

![choose_shape](/tech/first_post/choose_shape.mp4)
<ImgZoom src="/tech/first_post/vps_all.webp" alt="OCI_Get_Started" class="h-full object-cover" width="500"/>



完成上述的操作後按下<kbd>Create</kbd> <br/>
這時就是考驗運氣的時候了，如果他不給過，你有以下幾項選擇
1. 出去多扶扶幾位老奶奶過馬路
2. 換一個Region再來一次
3. 硬碰硬，create到過為止 <kbd>→</kbd>這個部分可以寫腳本解決，但我們改天再聊吧

### Putty登入設定
天啊! 恭喜熬過最靠賽的階段<br/>
先來看看目前的成果吧! 我們可以觀察目前vps的狀態及相關資訊，其中可以先把public IP記起來，等等登入就會用到了<br/>
<ImgZoom src="/tech/first_post/vps_status.webp" alt="VPS_status" class="h-full object-cover" width="500"/>

剩下就把private key透過 PuTTY Key Generator轉換成putty能看懂的.ppk格式就可以登入了<br/>
- 下載並開啟PuTTY Key Generator <kbd>→</kbd> 替換ppk file version to 2 <kbd>→</kbd> load and save to .ppk file
<ImgZoom src="/tech/first_post/putty_key_gen.webp" alt="Putty_Key_Gen" class="h-full object-cover" width="500"/>
- 輸入剛剛提到的public IP <kbd>→</kbd> 在Auth載入剛剛生成的.ppk <kbd>→</kbd> 點選<kbd>Open</kbd>進行連線
<ImgZoom src="/tech/first_post/putty_login.webp" alt="PuttPutty_Login_OK" class="h-full object-cover" width="500"/>
🎉🎉🎉 終於成功登入惹🎉🎉🎉
<ImgZoom src="/tech/first_post/putty_ok.png" alt="Putty_OK" class="h-full object-cover" width="500"/>

## 部署部落格
這是我在GITHUB PAGES尋尋覓覓時發現的好料<br/>
有別於常見的前端框架三巨頭 React、Vue、Angular在面臨Virtual DOM的效能問題<br/>
該模板使用的是Svelte，簡單粗暴地透過靜態編譯的方式捨棄了Virtual DOM的操作<br/>
著實是個練習的好對象<br/>
### 隆重介紹

:::tip
[QWER](https://github.com/kwchang0831/svelte-QWER)

使用 SvelteKit 與 ❤ 打造的部落格生成器，簡單好用，好評推廣中。
<ImgZoom src="/tech/first_post/preview.webp" alt="QWER" class="h-full object-cover" width="500"/>
:::
### 事前準備
又要準備了又要準備了$#^%^&#$%$<br/>
別打我大哥這次真的很快

1. 檢查更新
   ```sh
   sudo apt-get update
   ```
2. 安裝最新版全域NodeJS

   ```sh
   sudo apt-get install -g nodejs latest
   ```
3. 安裝degit<br/>
   這個套件可以完整複製gits的內容並撇除掉.git的相關結構，保證白白淨淨的到你的local
   ```sh
   npm install -g degit
   ```
4. 安裝pnpm
   ```sh
   npm i -g pnpm
   ```   
5. 安裝QWER<br/>
  <kbd>my-blog</kbd>替換成你想要的資料夾名稱 
   ```sh
   npx degit kwchang0831/svelte-QWER my-blog
   ```  
### 跑起來!寶貝
1. 安裝所有相依性套件
   ```sh
   pnpm i
   ```
2. Run起來!!!
   ```sh
   pnpm dev
   ```
3. 察看結果
   ```sh
   VITE v3.1.1  ready in 1080 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

## 小小總結
簡單回顧了一下當初申請到安裝的過程<br/>
其實還有後續的反向代理跟域名解析，不過礙於篇幅<br/>
今天就先醬吧
感謝看到這裡的你妳尼泥...你逆.?

<ImgZoom src="/tech/first_post/hatori.jpg" alt="尼逆" class="h-full object-cover">
Illustrated by <a href="https://www.instagram.com/bye_chicken_78/" target="_blank">公雞先生</a>
</ImgZoom>
