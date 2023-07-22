import duckdb
import pyarrow

# Create a DuckDB connection
conn = duckdb.connect()

# Create an Arrow table
table = pyarrow.Table.from_records([("a", 1), ("b", 2)])

# Scan the Arrow table into DuckDB
df = conn.query(
    "SELECT * FROM duckdb_arrow_scan('{}')".format(table.schema.to_arrow_schema())
)

# Print the DataFrame
print(df)
