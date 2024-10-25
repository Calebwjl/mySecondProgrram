import requests
from bs4 import BeautifulSoup

# 目标网址
url = 'https://quotes.toscrape.com/'  # 一个公开可爬的网站
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (HTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
}

# 发送请求获取页面内容
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # 找到所有的名言和作者
    quotes = soup.find_all('span', class_='text')
    authors = soup.find_all('small', class_='author')

    # 打开或创建一个 txt 文件，用于写入数据
    with open('quotes.txt', 'w', encoding='utf-8') as f:
        # 遍历名言和作者，并写入文件
        for quote, author in zip(quotes, authors):
            f.write(f"{quote.text} —— {author.text}\n")

    print("数据已成功保存到 quotes.txt")
else:
    print("请求失败，状态码：", response.status_code)
