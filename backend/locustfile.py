from locust import HttpUser, task


class ListPostUser(HttpUser):
    @task
    def post_detail(self):
        self.client.get("api/products")

# locust --locustfile locustfile.py
