from django.urls import path
from .views import *


urlpatterns = [
    path('products/', get_products, name='products'),
    path('products/<str:pk>', get_product, name='product'),
]