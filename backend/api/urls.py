from django.urls import path
from . import views

urlpatterns = [
    path('', views.listDetail, name='list-detail'),
    path('soma/', views.somaMes, name='soma'),
]