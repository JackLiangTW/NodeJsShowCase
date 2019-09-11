# NodeJsShowCase
Node.js show case and examples
# 2017 WildAid 野生救援
![author](https://img.shields.io/badge/front--end-Junxiang-yellow.svg)
![author](https://img.shields.io/badge/back--end-San-blue.svg)


WildAid 野生救援 - 無翅聯盟


## 正式站 尚未上線
> <a href="https://www.wildaidtaiwan.org/" target="_blank">https://www.wildaidtaiwan.org/</a>

## 測試站 
> <a href="https://wildaid.webgene.com.tw/" target="_blank">https://wildaid.webgene.com.tw/</a>


## Source List

項目                                       | folder
------------------------------------------|-----------
前端 source                  			  | [/ front-end](http://git.webgene.tw/webgene/WildAid/tree/master/Site)




# 魚翅聯盟登入改版 API

# 1.新增使用者宣言


送出使用者宣言


### API
> #### api/send_user

### Request Parameters

> **POST** 

Param    |    Type  | Description  |Option 
---------|--------|--------------|-----
fbid     | *string* | Facebook ID    | M |
name     | *string* | user name        | M |
logo_pic    | *string* |  圖片網址      | M |
email       | *string* | user email    | M |
caption   | *string* | 宣言內容 | M |

fbid格式欄位可以給  user_00000000 (亂數8碼以上)  


### Response JSON
* `status`: 回傳狀態(success = 200, fbid  或name沒寫 = 130, fbid重複 = 110)

```json
{
  "status": 200
}
```
