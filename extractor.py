
import PyPDF2
import re
import pandas as pd

pdf_path = 'Cold Mailing List for Industrial Training.pdf'

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    text = ''
    for page in reader.pages:
        text += page.extract_text() or ''

# Split text into lines and try to parse rows
lines = text.split('\n')
rows = []
for line in lines:
    # Try to split by two or more spaces or tabs
    parts = re.split(r'\s{2,}|\t', line)
    if len(parts) >= 3:
        rows.append(parts)

# Use the provided header explicitly
header = ["Company", "Location", "Mail ID", "Stipend", "Description"]
data_rows = rows
header_len = len(header)
aligned_data = []
for row in data_rows:
    if len(row) < header_len:
        row = row + [None]*(header_len - len(row))
    elif len(row) > header_len:
        row = row[:header_len]
    aligned_data.append(row)
df = pd.DataFrame(aligned_data, columns=header)
# Filter for any row where any column contains the specified locations
locations = ["delhi", "delhi/ncr", "gurgaon", "gurugram", "noida", "ghaziabad"]
mask = df.apply(lambda row: any(any(loc in str(cell).lower() for loc in locations) for cell in row), axis=1)
filtered = df[mask]
if not filtered.empty:
    filtered.to_excel('filtered_locations.xlsx', index=False)
    print(f"Saved {len(filtered)} rows to filtered_locations.xlsx")
else:
    print("No rows found for the specified locations in any column.")
