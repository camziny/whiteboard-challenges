import pandas as pd

dict = {
    "name": ["Bob", "Mary", "Joe"],
    "age": [40, 33, 50],
    "height": [170, 160, 130],
}

df = pd.DataFrame.from_dict(dict)

print(df)
