import requests
import csv
import time

# Input: List of [School, Name, State]
schools = [
    ["Alcuin Montessori School", "Keely A.", "Texas"],
    ["Alliance College-Ready Public Schools", "Kayline R.", "California"]
]

# Output file
output_file = "school_locations.csv"

# Header row
rows = [["School", "Name", "State", "Full Address", "Latitude", "Longitude"]]

for school, name, state in schools:
    query = f"{school}, {state}"
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        "q": query,
        "format": "json",
        "limit": 1
    }
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; SchoolLocatorBot/1.0; +weliwq013@163.com)"
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200:
        data = response.json()
        if data:
            result = data[0]
            address = result.get("display_name", "N/A")
            lat = result.get("lat", "N/A")
            lon = result.get("lon", "N/A")
        else:
            address = lat = lon = "Not Found"
    else:
        address = lat = lon = "Error"

    rows.append([school, name, state, address, lat, lon])
    time.sleep(1)  # Be polite to the API

# Save to CSV
with open(output_file, mode="w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

print(f"Saved to {output_file}")
