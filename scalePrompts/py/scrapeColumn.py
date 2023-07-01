import httpx
from bs4 import BeautifulSoup


def scrape_table_column(url, column_id):
    response = httpx.get(url)
    html = response.content.decode()
    soup = BeautifulSoup(html, "html.parser")
    table = soup.find("table", id=column_id)
    column = []
    for row in table.find_all("tr"):
        cell = row.find("td")
        if cell:
            column.append(cell.text)
    return column


if __name__ == "__main__":
    url = "https://www.example.com/table.html"
    column_id = "my-table-column"
    column = scrape_table_column(url, column_id)
    print(column)
