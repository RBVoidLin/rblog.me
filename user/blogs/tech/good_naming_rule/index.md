---
title: 命名的三要三不要：寫給未來自己的禮物
description: 從識別度、精確性與產品視野出發，給出實用命名心法與避坑指南，降低溝通與維護成本。
summary: 教練！我想學命名
published: '2025-12-23T01:21:57.000+08:00'
updated: '2025-12-23T01:21:57.000+08:00'
cover: ./good_naming_cover.png
coverCaption: Photo by
coverStyle: 'IN'
series_tag: 工程師好習慣
series_title: 命名篇
tag:
  - 
---


## 計算機科學界流傳著一句經典名言
<ImgZoom src="/tech/good_naming_rule/PhilKarlton.png" alt="phil_karlton" class="h-full object-cover" width="500"/>

> 計算機科學領域只有兩件難事：緩存失效 (Cache Invalidation) 和 命名 (Naming things) —— Phil Karlton

我們今天不說緩存失效，只說命名<br/>

:::tip 
WTFI<sup>2</sup> ∝ (1 / Naming Rule)

> 說出What The F**k It Is?的次數 正比於 命名的不規則度 <br/>
> 計算機其實不在乎你要叫 a 還是 apple，但人類在乎。良好的命名能節省大量的溝通成本 <br/>
> 我想從團隊合作的角度切入，來談談命名的重要性

:::

## ✅ 三要：如何命個好名字？
### 要有「識別度」
體現意圖！如果一個變數是日期，別只叫 date。你應該告訴讀者，這是什麼日期？

C++ 範例：

```C++
// ❌ 你是想比什麼？ 
if (date1 < date2) { ... }

// ✅ 如果房客在下訂時間前提早入住
if (customerOrderDate > customerCheckInDate) {
    // 執行處理邏輯
}
```
### 要「夠精確」
如果只是個名詞，那就好好形容 Ex. customerOrderDate<br/>
如果打算做某事，那就好好描述怎麼做要幹嘛 Ex. 與其用模糊的 generate()，不如說明你要生成什麼。<br/>

:::tip
萬用公式

1. 變數 (Variable)： 名詞（如 maxSpeed, customerOrderDate）
2. 函數 (Function)： 動詞 + 名詞（如 calculateTotalPrice(), printTestReport()）
3. 布林值 (Boolean)： is / has / can + (動詞)名詞（如 isEmpty, hasPermission, canLoginAdmin）
:::


### 要具備「產品視野」
命名不只是技術問題，更是業務理解。<br/>
需考慮到系統未來可能對接第三方或不同服務對象<br/>
💡 核心心法： 命名時要考慮「未來的擴充性」。<br/>

```C++
// ❌
// 反正離開前有付錢就好了R
int checkOutMoney();

// ✅
// 付現金
int checkOutWithCash();
// 付信用卡
int checkOutWithCreditCard();
// 第三方金流
int checkOutWithLinePay();
```

## ❌ 三不要：避開這些命名地雷
### 不要搞「原創縮寫」
你不是倉頡, 別成天想著造字<br/>
除非是業界公認的縮寫（如 info, std, temp），否則請不要自創。<br/>

```C++
// ❌ 你想表達 Generate Report，但沒人看得懂
void genRap();

// ✅  
void generateReport();
```

### 不要「硬性規範」
正確性與準確性遠比統一規範重要<br/>
在 Code Review 時，不要為了 remove 還是 delete 這種同義詞爭論不休<br/>
請優先確認團隊的語意辭典，大家約法三章，往後在開發or維運上<br/>
只要命名客觀上沒錯誤、不產生歧義、不增加維護成本，就應該被接受。

:::info
有時還會有檢查包含 astyle / eslint / cpplint 等工具, 可以讓代碼更具一致性也更整齊<br/>
幫你省掉很多手殘行為
:::

### 不要「反復橫跳」
不要讓心情決定你今天的coding style<br/>
最最最起碼保證同一個文件的coding style要一致<br/>
隨著經驗的積累慢慢往同個資料夾、同個專案邁進...


## 🎉結語
好的命名是給未來自己的一份禮物。當你三個月後回來看這段代碼 <br/>
相信我! 你會感謝自己的！🎁

## Reference
<a href="https://www.shakebugs.com/blog/good-productivity-habits-for-great-coding/" target="_blank">Good habits of productive software developers needed for great coding</a><br/>
<a href="https://www.youtube.com/watch?v=Z02zGJcJ2EA&loop=0" target="_blank">给代码起名字的三要三不要准则【让编程再次伟大#11】</a>