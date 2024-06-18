import requests
import json

url = "http://10.254.25.12:8777/api/local_doc_qa/list_knowledge_base"
headers = {
    "Content-Type": "application/json"
}
data = {
    "user_id": "zzp"
}

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.status_code)
print(response.text)
