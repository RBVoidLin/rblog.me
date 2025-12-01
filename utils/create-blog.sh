#!/bin/bash

BASE_PATH="./user/blogs"
CATEGORIES=("about" "music" "coloring" "tech" "trip")

# 顯示選單
echo "請選擇文章分類："
select CATEGORY in "${CATEGORIES[@]}"; do
    if [ -n "$CATEGORY" ]; then
        break
    else
        echo "無效的選擇，請重新選擇"
    fi
done

# 輸入文章名稱
read -p "請輸入文章名稱（英文小寫，可用連字符分隔單詞）: " POST_NAME

# 檢查輸入是否為空
if [ -z "$POST_NAME" ]; then
    echo "錯誤：文章名稱不能為空"
    exit 1
fi

# 獲取當前日期時間
CURRENT_DATE=$(date "+%Y-%m-%dT%H:%M:%S.000")
TIMEZONE_FORMATTED=$(date "+%z" | sed 's/\([0-9][0-9]\)\([0-9][0-9]\)/\1:\2/')

# 建立目錄路徑
DIRECTORY="$BASE_PATH/$CATEGORY/$POST_NAME"

# 建立 Front Matter 模板
MD_TEMPLATE="---
title: 
description: 
summary: 
published: '$CURRENT_DATE$TIMEZONE_FORMATTED'
updated: '$CURRENT_DATE$TIMEZONE_FORMATTED'
cover: 
coverCaption: Photo by
coverStyle: 'IN'
series_tag:
series_title:
tag:
  - 
---"

# 確保基礎目錄存在
if [ ! -d "$BASE_PATH" ]; then
    mkdir -p "$BASE_PATH"
fi

# 確保分類目錄存在
if [ ! -d "$BASE_PATH/$CATEGORY" ]; then
    mkdir -p "$BASE_PATH/$CATEGORY"
fi

# 檢查目錄是否已存在
if [ -d "$DIRECTORY" ]; then
    echo "錯誤：目錄 $DIRECTORY 已存在！"
    exit 1
else
    mkdir -p "$DIRECTORY"
    echo "$MD_TEMPLATE" > "$DIRECTORY/index.md"
    echo "已成功建立文章：$DIRECTORY/index.md"
    echo "您可以使用以下命令開始編輯："
    echo "code $DIRECTORY/index.md"
fi